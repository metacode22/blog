import { format } from 'date-fns';

import { getGuestbooks } from '@/src/apis/guestbooks';

import { GuestbookForm } from './_components/guestbook-form';

export const dynamic = 'force-dynamic';

export default async function GuestbookPage() {
  const { guestbooks } = await getGuestbooks();

  return (
    <section className='flex flex-col gap-6'>
      <GuestbookForm />
      <ul className='flex flex-col gap-6'>
        {guestbooks.map(({ id, name, message, created_at }) => (
          <li key={id} className='flex items-start gap-4'>
            <div className='flex flex-col gap-1'>
              <span className='whitespace-nowrap text-sm font-bold text-gray-500'>{name} </span>
              <time dateTime={created_at} className='text-[0.5rem] text-gray-500'>
                {format(new Date(created_at), 'yyyy-MM-dd HH:mm')}
              </time>
            </div>
            <p className='text-sm'>{message}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
