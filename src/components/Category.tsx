'use client';

import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import ROUTES from '../constants/routes';

/**
 * @todo query string, categories=[category1, category2]
 * @todo router -> Link, use client -> use server
 */
export default function Category({ children }: { children: ReactNode }) {
  const router = useRouter();

  function handleClickCategory() {
    router.push(ROUTES.POSTS);
  }

  return (
    <span className='text-sm text-gray-500 hover:underline' onClick={handleClickCategory}>
      {children}
    </span>
  );
}
