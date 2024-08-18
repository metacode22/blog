'use client';

import Image, { ImageProps } from 'next/image';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { ReactNode } from 'react';

export function MDX({ scope = {}, ...props }: Omit<MDXRemoteProps, 'scope'> & { scope?: Record<string, any> }) {
  return <MDXRemote {...props} scope={scope} components={{ Image: RoundedImage, Resource }} />;
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

function Resource({ children }: { children: ReactNode }) {
  return <p className='text-xs text-gray-500'>{children}</p>;
}
