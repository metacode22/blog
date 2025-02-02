'use client';

import { Activity } from 'lucide-react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import Link from 'next/link';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { DetailedHTMLProps, ReactNode, VideoHTMLAttributes } from 'react';

export function MDX({ scope = {}, ...props }: Omit<MDXRemoteProps, 'scope'> & { scope?: Record<string, any> }) {
  return <MDXRemote {...props} scope={scope} components={{ Image, Video, Resource, MyThought, Short, Long }} />;
}

function Image({
  alt,
  src,
  source,
  description,
  ...props
}: NextImageProps & { source?: string; description?: string }) {
  return (
    <div className='flex flex-col items-center'>
      <NextImage
        alt={alt ?? ''}
        src={src}
        width={0}
        height={0}
        sizes='100vw'
        className='mb-1 mt-8 h-auto w-full rounded-lg'
        {...props}
      />
      {source && <p className='text-xs text-gray-500'>[출처: {source}]</p>}
      {description && <p className='text-xs text-gray-500'>{description}</p>}
    </div>
  );
}

function Video({ src, ...props }: DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>) {
  return <video src={src} className='h-auto w-full rounded-lg' playsInline {...props} />;
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
  return (
    <div className='rounded-lg bg-gray-50 px-4 py-1 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-400'>
      {children}
    </div>
  );
}

function Short() {
  return (
    <div className='flex w-full items-center gap-1 border-b border-gray-200 pb-2'>
      <span className='text-xl font-semibold '>숏</span>
      <Activity size={20} color='#98a3cd' />
    </div>
  );
}

function Long() {
  return (
    <div className='flex w-full items-center gap-1 border-b border-gray-200 pb-2'>
      <span className='text-xl font-semibold '>롱</span>
      <Activity size={20} color='#ed1d65' className='scale-x-[-1] transform' />
    </div>
  );
}
