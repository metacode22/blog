import { ReactNode } from 'react';

export default function Date({ children }: { children: ReactNode }) {
  return <span className='text-gray-400 text-sm'>{children}</span>;
}
