import { getGuestbooks } from '@/src/apis/guestbooks';

import { GuestbookForm } from './_components/guestbook-form';

export const dynamic = 'force-dynamic';

export default async function GuestbookPage() {
  const { guestbooks } = await getGuestbooks();

  return (
    <section className='flex flex-col gap-6'>
      <GuestbookForm />
      <ul className='flex flex-col gap-4'>
        {guestbooks.map(({ id, name, message }) => (
          <li key={id} className='flex items-start gap-2'>
            <span className='whitespace-nowrap text-sm font-bold text-gray-500'>{name} </span>
            <p className='text-sm'>{message}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
