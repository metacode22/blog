import { compileMDX } from 'next-mdx-remote/rsc';

type RepositoryFileTree = {
  tree: [
    {
      path: string;
    },
  ];
};

type PostMeta = {
  title: string;
  summary: string;
  timeToRead: number;
  categories: string[];
  thumbnailSrc: string;
  createdAt: string;
  updatedAt: string;
};

export async function getPostMetas() {
  const response = await fetch(
    'https://api.github.com/repos/metacode22/blog-posts/git/trees/main?recursive=1',
    {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'X-Github-Api-Version': '2022-11-28',
      },
    },
  );

  /**
   * @TODO
   * response.ok가 false일 때 status, statusText가 어떤 것이 뜨는지 확인하고 throw error로 처리해보기.
   */
  if (!response.ok) {
    console.log(response.status, response.statusText);
    return undefined;
  }

  /**
   * @TODO
   * repositoryFileTree에 무엇이 찍히는지 확인 이후 메서드 체이닝으로 리팩터링하기
   */
  const repositoryFileTree: RepositoryFileTree = await response.json();
  console.log('🚀 ~ file: post.ts:31 ~ getPostsMeta ~ repositoryFileTree:', repositoryFileTree);

  const postFileNames = repositoryFileTree.tree
    .map(file => file.path)
    .filter(path => path.endsWith('.mdx'));

  const postMetas = [];
  for (const postFileName of postFileNames) {
    const postDetail = await getPostDetailByPostFileName(postFileName);

    if (postDetail) {
      postMetas.push(postDetail.meta);
    }
  }

  return postMetas.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export async function getPostDetailByPostFileName(postFileName: string) {
  const response = await fetch(
    `https://raw.githubusercontent.com/metacode22/blog-posts/main/${postFileName}`,
    {
      headers: {
        Accept: 'appliction/vnd.github+json',
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'X-Github-Api-Version': '2022-11-28',
      },
    },
  );

  /**
   * @TODO
   * response.ok가 false일 때 status, statusText가 어떤 것이 뜨는지 확인하고 throw error로 처리해보기.
   */
  if (!response.ok) {
    console.log(response.status, response.statusText);
    return undefined;
  }

  const rawMdx = await response.text();

  /**
   * @TODO
   * rawMdx가 404: Not Found인 경우를 확인하기
   */
  if (rawMdx === '404: Not Found') return undefined;
  console.log('🚀 ~ file: post.ts:93 ~ getPostDetailByTitle ~ rawMdx:', rawMdx);

  const { frontmatter, content } = await compileMDX<PostMeta>({
    source: rawMdx,
    options: {
      parseFrontmatter: true,
      /**
       * @TODO
       * mdxOptions 추가하기
       */
    },
  });

  const postFileNameWithoutFileExtension = postFileName.replace('.mdx', '');
  const postDetail = {
    meta: {
      id: postFileNameWithoutFileExtension,
      ...frontmatter,
    },
    content,
  };

  return postDetail;
}
