'use client';

import ROUTES from '@/src/constants/routes';
import useHover from '@/src/hooks/useHover';
import Image from 'next/image';
import Link from 'next/link';
import Category from '@/src/components/Category';
import ReadingTime from '@/src/components/ReadingTime';
import Date from '@/src/components/Date';
import cn from '@/src/utils/class-name';
import Bullet from '@/src/components/Bullet';
import Title from '@/src/components/Title';
import Summary from '@/src/components/Summary';
import { Post } from 'contentlayer/generated';

export default function PostListItem({
  post: { slug, title, summary, readingTime, categories, updatedAt, thumbnailImagePath },
}: {
  post: Post;
}) {
  const { targetRef, isHovered } = useHover<HTMLAnchorElement>();

  return (
    <Link
      ref={targetRef}
      href={`${ROUTES.POSTS}/${slug}`}
      className='flex h-60 w-full items-center gap-14 break-keep rounded-sm'>
      <div className='relative min-h-[240px] min-w-[240px]'>
        <Image
          src={thumbnailImagePath}
          alt={`${title} 썸네일`}
          fill
          className={cn(
            'rounded-2xl bg-slate-500 object-cover p-2 shadow-2xl transition duration-300',
            {
              '-translate-y-2': isHovered,
            },
          )}
        />
      </div>
      <div className='flex h-full flex-col justify-between self-start'>
        <div>
          {categories.map(category => (
            <Category key={category}>{category}</Category>
          ))}
        </div>
        <Title title={title} />
        <Summary summary={summary} />
        <div className='flex gap-4'>
          <Date date={updatedAt} />
          <Bullet />
          <ReadingTime readingTime={readingTime} />
        </div>
      </div>
    </Link>
  );
}
