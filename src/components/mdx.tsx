'use client';

import Image, { ImageProps } from 'next/image';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';

export function MDX({ scope = {}, ...props }: Omit<MDXRemoteProps, 'scope'> & { scope?: Record<string, any> }) {
  return <MDXRemote {...props} scope={scope} components={{ Image: RoundedImage }} />;
}

function RoundedImage({ alt, src, ...props }: ImageProps) {
  return (
    <Image
      alt={alt ?? ''}
      src={src}
      width={0}
      height={0}
      sizes='100vw'
      className='h-auto w-full rounded-lg'
      {...props}
    />
  );
}
