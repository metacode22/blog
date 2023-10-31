import { ReactNode } from 'react';

export default function Category({ children }: { children: ReactNode }) {
  return (
    <span className='text-sm text-gray-500 hover:underline'>
      {children}
    </span>
  );
}
