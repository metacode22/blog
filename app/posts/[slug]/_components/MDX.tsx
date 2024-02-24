'use client';

import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

export function MDX({ code }: { code: string }) {
  const MDXComponent = useMDXComponent(code);

  return (
    <MDXComponent
      components={{
        Image,
      }}
    />
  );
}
