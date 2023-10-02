import { ReactNode } from 'react';

export default function Category({ children }: { children: ReactNode }) {
  return (
    <span className='rounded-[32px] bg-indigo-500 px-3 py-[6px] text-sm text-white'>
      {children}
    </span>
  );
}
