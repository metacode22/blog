import { ReactNode } from 'react';

export default function Date({ date }: { date: string }) {
  return (
    <time dateTime={date} className='text-sm text-gray-400'>
      {date}
    </time>
  );
}
