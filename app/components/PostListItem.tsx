import Link from 'next/link';

import { Post } from '@/.contentlayer/generated';
import Bullet from '@/src/components/Bullet';
import Category from '@/src/components/Category';
import Date from '@/src/components/Date';
import ReadingTime from '@/src/components/ReadingTime';
import Summary from '@/src/components/Summary';
import { Thumbnail } from '@/src/components/Thumbnail';
import Title from '@/src/components/Title';
import ROUTES from '@/src/constants/routes';

export default function PostListItem({
  post: {
    slug,
    title,
    categories,
    summary,
    updatedAt,
    readingTime,
    thumbnailImagePath,
  },
}: {
  post: Post;
}) {
  return (
    <li className='flex items-start gap-10'>
      <Thumbnail src={thumbnailImagePath} alt={title} slug={slug} />
      <div className='flex flex-col items-start gap-4'>
        <div className='flex flex-col items-start gap-2'>
          <div className='flex justify-start gap-2'>
            {categories.map(category => (
              <Category
                category={category}
                key={category}
                className='bg-transparent'>
                {category}
              </Category>
            ))}
          </div>
          <Link href={`${ROUTES.POSTS.DETAIL(slug)}`}>
            <Title>{title}</Title>
          </Link>
        </div>
        <Link
          href={`${ROUTES.POSTS.DETAIL(slug)}`}
          className='flex flex-col items-start gap-1'>
          <Summary>{summary}</Summary>
          <div className='flex gap-2'>
            <Date date={updatedAt} />
            <Bullet />
            <ReadingTime readingTime={readingTime} />
          </div>
        </Link>
      </div>
    </li>
  );
}
