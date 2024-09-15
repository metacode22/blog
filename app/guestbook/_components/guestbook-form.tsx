'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { createGuestbook } from '@/src/apis/guestbooks';
import { cn } from '@/src/utils/class-name';
import { revalidatePath } from 'next/cache';

export function GuestbookForm() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name')?.toString();
    const message = formData.get('message')?.toString();

    if (!name || !message) {
      alert('이름 혹은 메세지를 입력해주세요.');
      setLoading(false);
      return;
    }

    await createGuestbook({ name, message });

    setLoading(false);
    setName('');
    setMessage('');
    router.refresh();
  }

  function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleChangeMessage(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setMessage(event.target.value);
  }

  function handleClickRandomName() {
    setName(pickRandomName());
  }

  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
      <div className='flex gap-2'>
        <input
          name='name'
          className='w-full max-w-[120px] self-start rounded-md border border-gray-300 p-2 text-sm'
          maxLength={12}
          placeholder='name'
          value={name}
          onChange={handleChangeName}
        />
        <button
          type='button'
          onClick={handleClickRandomName}
          className='w-fit rounded-md bg-gray-500 px-2 py-1 text-sm text-white'>
          랜덤 변경
        </button>
      </div>
      <textarea
        name='message'
        className='w-full rounded-md border border-gray-300 p-2 text-sm'
        maxLength={200}
        placeholder='Hello!'
        value={message}
        onChange={handleChangeMessage}
      />
      <button
        disabled={loading}
        className={cn(
          'h-[38px] w-fit self-end rounded-md bg-gray-500 px-2 py-1 text-sm text-white',
          loading && 'cursor-not-allowed opacity-50',
        )}>
        방명록 남기기
      </button>
    </form>
  );
}

function pickRandomName() {
  const adjective = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];

  return `${adjective}${noun}`;
}

const ADJECTIVES = [
  '잘생긴',
  '친절한',
  '예쁜',
  '반짝반짝',
  '다정한',
  '낼름낼름',
  '냄새나는',
  '향긋한',
  '말안듣는',
  '하마닮은',
  '쓰다버린',
  '회생불가',
  '건실한',
];

const NOUNS = [
  '미남',
  '미녀',
  '청년',
  '하마',
  '코털',
  '발가락',
  '아줌마',
  '아저씨',
  '벌레',
  '대머리',
  '발톱',
  '돼지',
  '메뚜기',
  '인력거',
  '호랑이',
];
