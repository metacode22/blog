import Link from 'next/link';
import ROUTES from '../constants/routes';
import { CiSearch } from 'react-icons/ci';

export default function GlobalNavigationBar() {
  return (
    <nav className='flex w-full items-center justify-between border-b-[1px] bg-white p-4 lg:px-20 lg:py-3'>
      <div className='flex items-center gap-10'>
        <Link href={ROUTES.HOME} className='rounded-lg text-xl font-semibold italic'>
          {"<Jun />"}
        </Link>
        <ul className='flex justify-start gap-3 rounded-md px-2 py-1 leading-7 transition hover:bg-slate-100'>
          <li>
            <Link href={ROUTES.HOME} className=''>
              Home
            </Link>
          </li>
          {/**
           * @TODO
           * About 페이지 만들어지면 주석 해제하기
           */}
          {/* <li>
          <Link href={ROUTES.ABOUT}>About</Link>
        </li> */}
        </ul>
      </div>
      <ul>
        <li>
          {/**
           * @TODO
           * 검색 기능 구현하기
           */}
          {/* <button className='relative h-8 w-60 rounded-2xl bg-slate-200 transition hover:bg-slate-300'>
            <CiSearch
              size={20}
              className='absolute right-4 -translate-y-1/2 text-slate-600 transition hover:text-slate-900'
            />
          </button> */}
        </li>
      </ul>
    </nav>
  );
}
