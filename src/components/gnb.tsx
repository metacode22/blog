import Link from 'next/link';

import { routes } from '../constants/routes';

const LINKS = {
  posts: routes.posts.root,
  books: routes.books.root,
} as const;

export function GNB() {
  return (
    <aside className='mb-16 tracking-tight'>
      <nav className='flex flex-row items-center gap-8'>
        <Link href={routes.home} className='text-xl font-semibold'>
          SeungJun Shin
        </Link>
        <div className='flex flex-row items-center'>
          {Object.entries(LINKS).map(([name, path]) => (
            <Link key={path} href={path} className='flex px-2 opacity-50'>
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
}
