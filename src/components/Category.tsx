import { ComponentPropsWithoutRef } from 'react';
import cn from '../utils/class-name';

/**
 * @todo query string, categories=[category1, category2]
 * @todo router -> Link, use client -> use server
 */
export default function Category({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      className={cn('cursor-pointer text-sm text-gray-500 hover:underline', className)}
      {...props}>
      {children}
    </span>
  );
}
