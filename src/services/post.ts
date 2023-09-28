import { compileMDX } from 'next-mdx-remote/rsc';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';

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
  categories: string[];
  createdAt: string;
  updatedAt: string;
};

export async function getPostMetas() {
  const response = await fetch(process.env.GITHUB_API_URL_TO_GET_POSTS_SOURCE_TREE, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-Github-Api-Version': '2022-11-28',
    },
  });

  /**
   * @TODO
   * response.ok가 false일 때 status, statusText가 어떤 것이 뜨는지 확인하고 throw error로 처리해보기.
   */
  if (!response.ok) {
    // console.log(response.status, response.statusText);
    return undefined;
  }

  /**
   * @TODO
   * repositoryFileTree에 무엇이 찍히는지 확인 이후 메서드 체이닝으로 리팩터링하기
   */
  const repositoryFileTree: RepositoryFileTree = await response.json();
  // console.log("🚀 ~ file: post.ts:43 ~ getPostMetas ~ repositoryFileTree:", repositoryFileTree)

  const postFileNames = repositoryFileTree.tree
    .map(file => file.path)
    .filter(path => path.endsWith('/index.mdx'));
  // console.log("🚀 ~ file: post.ts:52 ~ getPostMetas ~ postFileNames:", postFileNames)

  const postMetas = [];
  for (const postFileName of postFileNames) {
    const postDetail = await getPostDetailByPostFileName(postFileName);

    /**
     * @TODO
     * timeToRead 기능 더하기
     */
    if (postDetail) {
      postMetas.push(postDetail.meta);
      // console.log("🚀 ~ file: post.ts:63 ~ getPostMetas ~ postMetas:", postMetas)
    }
  }

  return postMetas.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export async function getPostDetailByPostFileName(postFileName: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_POSTS_SOURCE}/${postFileName}`, {
    headers: {
      Accept: 'appliction/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-Github-Api-Version': '2022-11-28',
    },
  });

  /**
   * @TODO
   * response.ok가 false일 때 status, statusText가 어떤 것이 뜨는지 확인하고 throw error로 처리해보기.
   */
  if (!response.ok) {
    // console.log(response.status, response.statusText);
    return undefined;
  }

  const rawMdx = await response.text();

  /**
   * @TODO
   * rawMdx가 404: Not Found인 경우를 확인하기
   */
  if (rawMdx === '404: Not Found') return undefined;

  const { frontmatter, content } = await compileMDX<PostMeta>({
    source: rawMdx,
    options: {
      parseFrontmatter: true,
      /**
       * @TODO
       * mdxOptions 추가하기
       */
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          rehypePrism,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'wrap',
              properties: {
                class: ['autolink-header'],
              },
            },
          ],
        ],
      },
    },
  });

  const timeToRead = Math.ceil(readingTime(rawMdx).minutes);
  const postFileNameWithoutFileExtension = postFileName.replace('/index.mdx', '');
  const postDetail = {
    meta: {
      id: postFileNameWithoutFileExtension,
      timeToRead,
      ...frontmatter,
    },
    content,
  };
  // console.log("🚀 ~ file: post.ts:114 ~ getPostDetailByPostFileName ~ postDetail:", postDetail)

  return postDetail;
}
