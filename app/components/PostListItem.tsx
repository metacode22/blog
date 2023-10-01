'use client';

import ROUTES from '@/src/constants/routes';
import useHover from '@/src/hooks/useHover';
import { PostMeta } from '@/src/types/posts';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import Category from '@/src/components/Category';
import TimeToRead from '@/src/components/TimeToRead';

export default function PostListItem({ postMeta }: { postMeta: PostMeta }) {
  const { targetRef, isHovered } = useHover<HTMLAnchorElement>();

  return (
    <Link
      ref={targetRef}
      href={`${ROUTES.POSTS}/${postMeta.id}`}
      className='flex h-60 w-full items-center gap-14 break-keep rounded-sm'>
      <div className='relative min-h-[240px] min-w-[240px]'>
        <Image
          src={`${process.env.NEXT_PUBLIC_POSTS_SOURCE}/${postMeta.id}/thumbnail.png`}
          alt={`${postMeta.title} 썸네일`}
          fill
          className={clsx(
            'rounded-2xl bg-slate-500 p-2 shadow-2xl transition duration-300',
            isHovered && '-translate-y-2',
          )}
        />
      </div>
      <div className='flex h-full flex-col justify-between self-start'>
        <div>
          {postMeta.categories.map(category => (
            <Category key={category}>{category}</Category>
          ))}
        </div>
        <h3
          className={clsx(
            'text-3xl font-medium transition duration-300',
            isHovered && 'text-blue-600',
          )}>
          {postMeta.title}
        </h3>
        <div>{postMeta.summary}</div>
        <div className='flex gap-4'>
          <span className='text-gray-500'>date</span>
          <TimeToRead timeToRead={postMeta.timeToRead} />
        </div>
      </div>
    </Link>
  );
}
