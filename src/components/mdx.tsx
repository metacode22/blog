'use client';

import Image, { ImageProps } from 'next/image';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';

export function MDX({
  scope = {},
  ...props
}: Omit<MDXRemoteProps, 'scope'> & { scope?: Record<string, any> }) {
  return (
    <MDXRemote {...props} scope={scope} components={{ Image: RoundedImage }} />
  );
}

function RoundedImage({ alt, ...props }: ImageProps) {
  return <Image alt={alt ?? ''} className='rounded-lg' {...props} />;
}
