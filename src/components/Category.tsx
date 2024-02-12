'use client';

import { ComponentPropsWithoutRef } from 'react';
import cn from '../utils/class-name';
import { useSearchParams } from 'next/navigation';
import ROUTES from '../constants/routes';
import Link from 'next/link';

export default function Category({
  children,
  className,
  category,
  ...props
}: ComponentPropsWithoutRef<'span'> & { category: string }) {
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get('category');

  return (
    <Link
      href={`${ROUTES.POSTS.ROOT}?category=${category}`}
      className={cn(
        'cursor-pointer text-sm text-gray-600 hover:underline',
        { 'bg-slate-200': category === categoryQuery },
        className,
      )}
      {...props}>
      {children}
    </Link>
  );
}
