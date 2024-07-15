import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrettyCode from 'rehype-pretty-code';

import Bullet from '@/src/components/Bullet';
import Category from '@/src/components/Category';
import Time from '@/src/components/Date';
import { MDX } from '@/src/components/mdx';
import ReadingTime from '@/src/components/ReadingTime';
import Summary from '@/src/components/Summary';
import { getPosts } from '@/src/utils/post';

export async function generateStaticParams() {
  const posts = getPosts();

  return posts.map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPosts().find((post) => post.slug === slug);

  if (!post) return {};

  const { title, summary, categories } = post.meta;

  return {
    title,
    description: summary,
    keywords: categories,
    openGraph: {
      title,
      description: summary,
      url: `${process.env.SITE_URL}/posts/${slug}`,
    },
  };
}

export default async function PostPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = getPosts().find((post) => post.slug === slug);

  if (!post) notFound();

  const { readingTime, content } = post;
  const { title, summary, categories, updatedAt } = post.meta;

  const { compiledSource } = await serialize(content, {
    mdxOptions: {
      /**
       * 다음 link와 같은 TS error로 인해 next-remote-mdx의 버전을 4.4.1로 사용
       * @link https://github.com/hashicorp/next-mdx-remote/issues/423
       *
       * @todo serialize하는 로직을 따로 분리하기
       */
      rehypePlugins: [[rehypePrettyCode, { theme: 'dark-plus' }]],
    },
  });

  return (
    <div className='w-full max-w-3xl'>
      <article className='prose w-full max-w-none'>
        <h1 className='m-0 py-4'>{title}</h1>
        <div className='flex flex-col items-start gap-1'>
          <Summary>{summary}</Summary>
          <div className='flex justify-start gap-2'>
            <Time date={updatedAt} />
            <Bullet />
            <ReadingTime readingTime={readingTime} />
          </div>
        </div>
        <div className='w-full py-8'>
          <MDX compiledSource={compiledSource} frontmatter={post.meta} />
        </div>
      </article>
    </div>
  );
}
