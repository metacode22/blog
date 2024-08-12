import Link from 'next/link';

import Bullet from '@/src/components/bullet';
import ReadingTime from '@/src/components/reading-time';
import Summary from '@/src/components/summary';
import Time from '@/src/components/time';
import Title from '@/src/components/title';
import { routes } from '@/src/constants/routes';

import { Post } from '../../../src/types/post';

export default function PostListItem({
  post: {
    slug,
    meta: { title, summary, updatedAt },
    readingTime,
  },
}: {
  post: Post;
}) {
  return (
    <li className='flex items-start gap-10'>
      <div className='flex flex-col items-start gap-4'>
        <div className='flex flex-col items-start gap-2'>
          <Link href={`${routes.posts.detail(slug)}`}>
            <Title>{title}</Title>
          </Link>
        </div>
        <Link href={`${routes.posts.detail(slug)}`} className='flex flex-col items-start gap-1'>
          <Summary>{summary}</Summary>
          <div className='flex gap-2 items-center'>
            <Time date={updatedAt} />
            <Bullet />
            <ReadingTime readingTime={readingTime} />
          </div>
        </Link>
      </div>
    </li>
  );
}
