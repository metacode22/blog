import Link from 'next/link';

import { routes } from '../constants/routes';

const LINKS = {
  home: routes.home,
  posts: routes.posts.root,
} as const;

export function GNB() {
  return (
    <aside className='mb-16 tracking-tight'>
      <nav className='flex flex-row items-end gap-8'>
        <Link href={routes.home} className='text-2xl font-medium'>
          Seungjun Shin
        </Link>
        <div className='flex flex-row items-end'>
          {Object.entries(LINKS).map(([name, path]) => (
            <Link
              key={path}
              href={path}
              className='flex px-2 py-1 hover:text-neutral-800 dark:hover:text-neutral-200'>
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
}
