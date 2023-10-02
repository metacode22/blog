import { getPostDetailByPostFileName } from '@/src/services/post';

import { notFound } from 'next/navigation';

import '@/src/styles/prism-one-dark.css';
import Image from 'next/image';
import Category from '@/src/components/post/Category';
import TimeToRead from '@/src/components/post/TimeToRead';
import Date from '@/src/components/post/Date';
import formatDateWithDot from '@/src/utils/helpers/date';

export default async function PostDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const postDetail = await getPostDetailByPostFileName(`${postId}/index.mdx`);

  if (!postDetail) notFound();

  return (
    <article className='prose flex w-full max-w-none flex-col'>
      <div className='flex w-full justify-center bg-gradient-to-b from-indigo-50 px-4 py-8'>
        <div className='flex w-full max-w-5xl flex-col gap-4'>
          <div className='relative min-h-[240px] overflow-hidden'>
            <Image
              src={`${process.env.NEXT_PUBLIC_POSTS_SOURCE}/${postId}/thumbnail.png`}
              alt={`${postDetail.meta.title} 썸네일`}
              fill
              className='m-0 object-contain'
            />
          </div>
          <div className='flex flex-col items-start gap-8'>
            <div className='flex justify-start gap-4'>
              {postDetail.meta.categories.map(category => (
                <Category key={category}>{category}</Category>
              ))}
            </div>
            <h1 className='m-0'>{postDetail.meta.title}</h1>
            <div>
              <p className='m-0'>{postDetail.meta.summary}</p>
              <div className='flex justify-start gap-4'>
                <Date>{formatDateWithDot(postDetail.meta.updatedAt)}</Date>
                <TimeToRead timeToRead={postDetail.meta.timeToRead} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-full justify-center p-4'>
        <div className='w-full max-w-5xl'>{postDetail.content}</div>
      </div>
    </article>
  );
}
