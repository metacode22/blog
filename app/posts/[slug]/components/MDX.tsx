'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

export default function MDX({ code }: { code: string }) {
  const MDXComponent = useMDXComponent(code);

  return (
    <MDXComponent
      components={{
        Image,
      }}
    />
  );
}
