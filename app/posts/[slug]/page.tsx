import { notFound } from 'next/navigation';

import Category from '@/src/components/Category';
import ReadingTime from '@/src/components/ReadingTime';
import Date from '@/src/components/Date';
import { allPosts } from 'contentlayer/generated';
import MDX from './components/MDX';
import Bullet from '@/src/components/Bullet';
import Summary from '@/src/components/Summary';

export async function generateStaticParams() {
  const posts = allPosts.filter(post => post.isPublished);

  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params: { slug } }: { params: { slug: string } }) {
  const post = allPosts.find(post => post.slug === slug);

  if (!post) notFound();

  return (
    <article className='prose w-full max-w-none'>
      <div className='flex w-full justify-start gap-4'>
        {post.categories.map(category => (
          <Category key={category}>{category}</Category>
        ))}
      </div>
      <h1 className='m-0 py-4'>{post.title}</h1>
      <div className='flex flex-col items-start gap-1'>
        <Summary>{post.summary}</Summary>
        <div className='flex justify-start gap-2'>
          <Date date={post.updatedAt} />
          <Bullet />
          <ReadingTime readingTime={post.readingTime} />
        </div>
      </div>
      <div className='w-full py-8'>
        <MDX code={post.body.code} />
      </div>
    </article>
  );
}
