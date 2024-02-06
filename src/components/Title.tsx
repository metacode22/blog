import { ReactNode } from 'react';

export default function Title({ children }: { children: ReactNode }) {
  return <h2 className='text-3xl font-medium'>{children}</h2>;
}
