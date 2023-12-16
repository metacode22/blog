'use client';

import Bullet from '@/src/components/Bullet';
import Category from '@/src/components/Category';
import Date from '@/src/components/Date';
import Summary from '@/src/components/Summary';
import ReadingTime from '@/src/components/ReadingTime';
import Title from '@/src/components/Title';
import ROUTES from '@/src/constants/routes';
import useHover from '@/src/hooks/useHover';
import Link from 'next/link';
import { Post } from 'contentlayer/generated';

export default function FeaturedPostListItem({
  post: { slug, title, categories, summary, updatedAt, readingTime, thumbnailImagePath },
}: {
  post: Post;
}) {
  const { targetRef, isHovered } = useHover<HTMLAnchorElement>();

  return (
    <Link ref={targetRef} href={`${ROUTES.POSTS}/${slug}`} className='flex items-center gap-10'>
      {/* <div
        className={cn(
          'relative h-80 flex-1 overflow-hidden rounded-lg bg-gray-900 shadow-md transition duration-500',
          {
            'brightness-90': isHovered,
          },
        )}>
        <Image
          className={cn('object-contain transition duration-500', {
            'scale-105': isHovered,
          })}
          src={thumbnailImagePath}
          alt={`${title} 썸네일`}
          fill
        />
      </div> */}
      <div className='flex w-96 flex-col gap-4'>
        <div className='flex flex-col items-start gap-2'>
          <div className='flex justify-start gap-2'>
            {categories.map(category => (
              <Category key={category}>{category}</Category>
            ))}
          </div>
          <Title title={title} />
        </div>
        <Summary summary={summary} />
        <div className='flex gap-2'>
          <Date date={updatedAt} />
          <Bullet />
          <ReadingTime readingTime={readingTime} />
        </div>
      </div>
    </Link>
  );
}
