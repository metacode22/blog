'use client';

import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { ReactNode } from 'react';

export function MDX({ scope = {}, ...props }: Omit<MDXRemoteProps, 'scope'> & { scope?: Record<string, any> }) {
  return <MDXRemote {...props} scope={scope} components={{ Image: RoundedImage, Resource, MyThought }} />;
}

function RoundedImage({ alt, src, source, ...props }: ImageProps & { source?: string }) {
  return (
    <div className='flex flex-col items-center'>
      <Image
        alt={alt ?? ''}
        src={src}
        width={0}
        height={0}
        sizes='100vw'
        className='h-auto w-full rounded-lg'
        {...props}
      />
      {source && <p className='text-xs text-gray-500'>[출처: {source}]</p>}
    </div>
  );
}

function Resource({ href, children }: { href?: string; children: ReactNode }) {
  return (
    <div className='flex w-full justify-end'>
      {href ? (
        <Link target='_blank' rel='noopener noreferrer' href={href} className='text-xs text-gray-500'>
          {children}
        </Link>
      ) : (
        <p className='text-xs text-gray-500'>{children}</p>
      )}
    </div>
  );
}

function MyThought({ children }: { children: ReactNode }) {
  return <div className='bg-gray-50 px-4 py-1 text-gray-500 rounded-lg text-sm'>{children}</div>;
}
