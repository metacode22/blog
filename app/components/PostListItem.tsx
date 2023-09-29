'use client';

import ROUTES from '@/src/constants/routes';
import useHover from '@/src/hooks/useHover';
import { PostMeta } from '@/src/types/posts';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

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
            'rounded-2xl bg-slate-500 p-2 transition duration-300',
            isHovered && '-translate-y-4',
          )}
        />
      </div>
      <div className='flex h-full flex-col justify-between self-start'>
        <div>
          {postMeta.categories.map(category => (
            <span key={category}>{category}</span>
          ))}
        </div>
        <h3
          className={clsx(
            'text-4xl font-bold transition duration-300',
            isHovered && 'text-blue-600',
          )}>
          {postMeta.title}
        </h3>
        <div>{postMeta.summary}</div>
        <div className='flex gap-4'>
          <span>date</span>
          <span>time to read</span>
        </div>
      </div>
    </Link>
  );
}
