'use client';

import { useEffect, useState } from 'react';

import { increaseViews } from '@/src/apis/view';

export function Views({ slug }: { slug: string }) {
  const [views, setViews] = useState(0);

  useEffect(() => {
    (async () => {
      const { views } = await increaseViews(slug);
      setViews(views);
    })();
  }, [slug]);

  return <></>;
}
