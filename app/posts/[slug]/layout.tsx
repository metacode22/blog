import { ReactNode } from 'react';

export default function PostLayout({ children }: { children: ReactNode }) {
  return <div className='max-w-3xl'>{children}</div>;
}
