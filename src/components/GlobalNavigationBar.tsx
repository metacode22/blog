'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import cn from '@/src/utils/class-name';

import ROUTES from '../constants/routes';
import { ProgressBar } from './ProgressBar';

const NAVIGATION_LIST = [
  {
    name: 'Home',
    path: ROUTES.HOME,
  },
  {
    name: 'Posts',
    path: ROUTES.POSTS.ROOT,
  },
  {
    name: 'About',
    path: ROUTES.ABOUT,
  }
];

export default function GlobalNavigationBar() {
  const pathname = usePathname();

  return (
    <nav
      className={cn('top-0 z-10 flex w-full flex-col', {
        sticky: pathname !== ROUTES.HOME,
        'h-96': pathname === ROUTES.HOME,
        'bg-introduction': pathname === ROUTES.HOME,
        'bg-cover': pathname === ROUTES.HOME,
        'bg-center': pathname === ROUTES.HOME,
        'bg-no-repeat': pathname === ROUTES.HOME,
      })}>
      <div
        className={cn('flex justify-between px-4 py-2 text-black', {
          'text-white': pathname === ROUTES.HOME,
          'backdrop-blur-xl': pathname !== ROUTES.HOME,
          'border-b-[1px] border-slate-200': pathname !== ROUTES.HOME,
        })}>
        <div className='z-[1] flex items-center gap-10'>
          <Link
            href={ROUTES.HOME}
            className='whitespace-nowrap rounded-lg text-xl font-semibold italic'>
            {'<Jun />'}
          </Link>
          <div className='flex justify-start gap-4 rounded-md px-2 text-sm leading-7'>
            {NAVIGATION_LIST.map(({ name, path }) => (
              <Link
                className={cn(
                  'rounded-md px-2 py-1 opacity-70 transition hover:opacity-100',
                  {
                    'hover:bg-slate-100': pathname !== ROUTES.HOME,
                  },
                )}
                key={name}
                href={path}>
                {name}
              </Link>
            ))}
          </div>
        </div>
        <ul>
          <li>
            {/**
             * @TODO
             * 검색 기능 구현하기
             * command + k로 띄울 수 있게 구현하기(운영체제를 코드로 확인해서 윈도우에서는 ctrl + k로 표시하기)
             */}
          </li>
        </ul>
      </div>
      {pathname.startsWith(ROUTES.POSTS.DETAIL('')) && <ProgressBar />}
    </nav>
  );
}
