import Link from 'next/link';

import { routes } from '../constants/routes';

const LINKS = {
  post: routes.posts.root,
  book: routes.books.root,
  log: routes.logs.root,
  guestbook: routes.guestbook.root,
} as const;

export function GNB() {
  return (
    <aside className='mb-16 tracking-tight'>
      <nav className='flex flex-row items-center gap-4'>
        <Link href={routes.home} className='text-xl font-semibold'>
          SeungJun
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
