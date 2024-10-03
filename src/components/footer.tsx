import { GithubIcon, LinkedinIcon } from 'lucide-react';
import Link from 'next/link';

const LINKS = [
  {
    name: 'github',
    href: 'https://github.com/metacode22',
    icon: <GithubIcon size={16} className='text-gray-400' />,
  },
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/%EC%8A%B9%EC%A4%80-%EC%8B%A0-73602420a/',
    icon: <LinkedinIcon size={16} className='text-gray-400' />,
  },
];

export function Footer() {
  return (
    <footer className='mb-12 mt-40 flex w-full flex-col items-end gap-8'>
      <hr className='w-full border-t border-gray-100' />
      <div className='flex w-full flex-col items-end gap-4'>
        <div className='flex w-full  justify-end pt-4'>
          {LINKS.map(({ name, href, icon }) => (
            <Link key={name} href={href} className='px-2 py-1' target='_blank' rel='noopener noreferrer'>
              {icon}
            </Link>
          ))}
        </div>
        <span className='text-xs text-gray-400'>© 신승준 2024</span>
      </div>
    </footer>
  );
}
