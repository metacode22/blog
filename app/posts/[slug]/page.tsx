import { notFound } from 'next/navigation';

import Category from '@/src/components/Category';
import ReadingTime from '@/src/components/ReadingTime';
import Date from '@/src/components/Date';
import { allPosts } from 'contentlayer/generated';
import MDX from './components/MDX';

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
    <article className='prose flex w-full max-w-none flex-col bg-gradient-to-b'>
      <div className='flex w-full justify-center px-4 py-8'>
        <div className='flex w-full max-w-5xl flex-col gap-4'>
          {/* <div className='relative min-h-[240px] overflow-hidden'>
            <Image
              src={post.thumbnailImagePath}
              alt={`${post.title} 썸네일`}
              fill
              className='m-0 object-contain'
            />
          </div> */}
          <div className='flex flex-col items-start gap-8'>
            <div className='flex justify-start gap-4'>
              {post.categories.map(category => (
                <Category key={category}>{category}</Category>
              ))}
            </div>
            <h1 className='m-0'>{post.title}</h1>
            <div>
              <p className='m-0'>{post.summary}</p>
              <div className='flex justify-start gap-4'>
                <Date date={post.updatedAt} />
                <ReadingTime readingTime={post.readingTime} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-full justify-center p-4'>
        <div className='w-full max-w-5xl'>
          <MDX code={post.body.code} />
        </div>
      </div>
    </article>
  );
}
