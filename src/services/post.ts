import { compileMDX } from 'next-mdx-remote/rsc';
import { PostMetaFromRawMdx, PostMeta, PostDetail } from '../types/posts';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';

export async function getPostMetas(): Promise<PostMeta[] | undefined> {
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
  if (!response.ok) return undefined;
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
  if (!response.ok) return undefined;

  const rawMdx = await response.text();

  /**
   * @TODO
   * rawMdx가 404: Not Found인 경우를 확인하기
   */
  if (rawMdx === '404: Not Found') return undefined;

  const { frontmatter, content } = await compileMDX<PostMetaFromRawMdx>({
    source: rawMdx,
    options: {
      parseFrontmatter: true,
      /**
       * @TODO
       * mdxOptions에 toc 추가하기
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

  const postFileNameWithoutFileExtension = postFileName.replace('/index.mdx', '');
  const postDetail: PostDetail = {
    meta: {
      id: postFileNameWithoutFileExtension,
      timeToRead: Math.ceil(readingTime(rawMdx).minutes),
      ...frontmatter,
    },
    content,
  };

  return postDetail;
}
