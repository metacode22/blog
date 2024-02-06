'use client';

import { Post } from '@/.contentlayer/generated';
import Bullet from '@/src/components/Bullet';
import Category from '@/src/components/Category';
import Date from '@/src/components/Date';
import ReadingTime from '@/src/components/ReadingTime';
import Summary from '@/src/components/Summary';
import Title from '@/src/components/Title';
import ROUTES from '@/src/constants/routes';
import useHover from '@/src/hooks/useHover';
import Link from 'next/link';

export default function PostListItem({
  post: { slug, title, categories, summary, updatedAt, readingTime },
}: {
  post: Post;
}) {
  const { targetRef, isHovered } = useHover<HTMLAnchorElement>();

  return (
    <Link
      ref={targetRef}
      href={`${ROUTES.POSTS}/${slug}`}
      className='flex flex-col items-start gap-4'>
      <div className='flex flex-col items-start gap-2'>
        <div className='flex justify-start gap-2'>
          {categories.map(category => (
            <Category key={category}>{category}</Category>
          ))}
        </div>
        <Title title={title} />
      </div>
      <Summary>{summary}</Summary>
      <div className='flex gap-2'>
        <Date date={updatedAt} />
        <Bullet />
        <ReadingTime readingTime={readingTime} />
      </div>
    </Link>
  );
}
