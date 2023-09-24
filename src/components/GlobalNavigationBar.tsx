import Link from 'next/link';
import ROUTES from '../constants/routes';
import { CiSearch } from 'react-icons/ci';

export default function GlobalNavigationBar() {
  return (
    <nav className='flex justify-between items-center p-4 lg:px-20 lg:py-4 border-b-[1px]'>
      <ul className='flex justify-start gap-3'>
        <li>
          <Link href={ROUTES.HOME}>Logo</Link>
        </li>
        <li>
          <Link href={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link href={ROUTES.ABOUT}>About</Link>
        </li>
      </ul>
      <ul>
        <li>
          <div className='flex justify-end items-center gap-3'>
            <input type='text' />
            <CiSearch size={20} />
          </div>
        </li>
      </ul>
    </nav>
  );
}
