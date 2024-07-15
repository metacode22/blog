import Link from 'next/link';

import Bullet from '@/src/components/Bullet';
import Time from '@/src/components/Date';
import ReadingTime from '@/src/components/ReadingTime';
import Summary from '@/src/components/Summary';
import Title from '@/src/components/Title';
import ROUTES from '@/src/constants/routes';

import { Post } from '../types/post';

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
          <Link href={`${ROUTES.POSTS.DETAIL(slug)}`}>
            <Title>{title}</Title>
          </Link>
        </div>
        <Link
          href={`${ROUTES.POSTS.DETAIL(slug)}`}
          className='flex flex-col items-start gap-1'>
          <Summary>{summary}</Summary>
          <div className='flex gap-2'>
            <Time date={updatedAt} />
            <Bullet />
            <ReadingTime readingTime={readingTime} />
          </div>
        </Link>
      </div>
    </li>
  );
}
