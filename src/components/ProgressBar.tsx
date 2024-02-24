'use client';

import { useEffect, useState } from 'react';

export function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const {
        scrollTop: currentScroll,
        scrollHeight,
        clientHeight,
      } = document.documentElement;
      const totalScroll = scrollHeight - clientHeight;

      setProgress((currentScroll / totalScroll) * 100);
    }

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className='h-1 w-full origin-left bg-slate-300'
      style={{ transform: `scaleX(${progress / 100})` }}
    />
  );
}
