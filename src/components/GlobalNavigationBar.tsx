import Link from 'next/link';
import ROUTES from '../constants/routes';
import { CiSearch } from 'react-icons/ci';

export default function GlobalNavigationBar() {
  return (
    <nav className='bg-white flex w-full items-center justify-between border-b-[1px] p-4 lg:px-20 lg:py-4'>
      <ul className='flex justify-start gap-3'>
        <li>
          <Link href={ROUTES.HOME}>Logo</Link>
        </li>
        <li>
          <Link href={ROUTES.HOME}>Home</Link>
        </li>
        {/**
         * @TODO
         * About 페이지 만들어지면 주석 해제하기
         */}
        {/* <li>
          <Link href={ROUTES.ABOUT}>About</Link>
        </li> */}
      </ul>
      <ul>
        <li>
          <div className='flex items-center justify-end gap-3'>
            <input type='text' className='border-2 border-teal-200' />
            <CiSearch size={20} />
          </div>
        </li>
      </ul>
    </nav>
  );
}
