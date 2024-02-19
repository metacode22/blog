import Image from 'next/image';
import Link from 'next/link';

import ROUTES from '@/src/constants/routes';

import cn from '../utils/class-name';

export function Thumbnail({
  src,
  alt,
  slug,
  classname,
  ...props
}: {
  src: string;
  alt?: string;
  slug: string;
  classname?: string;
}) {
  return (
    <Link
      href={`${ROUTES.POSTS.DETAIL(slug)}`}
      className='relative min-w-[200px] self-stretch'>
      <Image
        fill
        src={src}
        alt={alt ?? ''}
        className={cn('rounded-xl object-cover shadow-lg', classname)}
        sizes='(max-width: 360px) 1vw, (max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1200px) 25vw, 20vw'
        {...props}
      />
    </Link>
  );
}
