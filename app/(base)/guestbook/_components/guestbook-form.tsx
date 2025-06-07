'use client';

import { RotateCw } from 'lucide-react';
import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

import { cn } from '@/src/utils/class-name';

import { createGuestbookAction } from './actions';

export function GuestbookForm({
  guestbooks,
  onSubmitSuccess,
}: {
  guestbooks: { id: number; name: string; message: string; created_at: string }[];
  onSubmitSuccess: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleChangeMessage(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setMessage(event.target.value);
  }

  function handleClickRandomName() {
    const currentNames = guestbooks.map(({ name }) => name);
    setName(pickRandomName(currentNames));
  }

  async function handleSubmit(formData: FormData) {
    flushSync(() => setLoading(true));

    const name = formData.get('name')?.toString();
    const message = formData.get('message')?.toString();

    if (!name || !message) {
      alert('이름 혹은 메시지를 입력해주세요.');
      setLoading(false);
      return;
    }

    try {
      await createGuestbookAction({ name, message });
      setName('');
      setMessage('');
      onSubmitSuccess();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const currentNames = guestbooks.map(({ name }) => name);
    const result = pickRandomName(currentNames);
    console.log(guestbooks);
    console.log('🚀 ~ useEffect ~ result:', result);
    setName(result);
  }, [guestbooks]);

  return (
    <form className='flex flex-col gap-2' action={handleSubmit}>
      <div className='flex gap-2'>
        <input
          name='name'
          className='w-full max-w-[120px] self-start rounded-md border border-gray-300 p-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white'
          maxLength={12}
          placeholder='name'
          value={name}
          onChange={handleChangeName}
        />
        <button
          type='button'
          onClick={handleClickRandomName}
          className={cn(
            'w-fit rounded-md bg-gray-500 px-2 py-1 text-sm text-white',
            loading && 'cursor-not-allowed opacity-50',
          )}>
          <RotateCw size={20} />
        </button>
      </div>
      <textarea
        name='message'
        className='w-full rounded-md border border-gray-300 p-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white'
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

function pickRandomName(currentNames: string[]) {
  const adjective = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];

  if (currentNames.includes(`${adjective}${noun}`)) {
    return pickRandomName(currentNames);
  }

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
  '깜찍한',
  '하마닮은',
  '쓰다버린',
  '회생불가',
  '건실한',
  '깐죽대는',
  '엉뚱한',
  '뿔난',
  '옹골찬',
  '평화로운',
  '구닥다리',
  '기이한',
  '특이한',
  '평범한',
  '순수한',
  '비범한',
  '잡종',
  '축복받은',
  '희귀한',
  '최첨단',
  '최초의',
  '최후의',
  '최고의',
  '화난',
  '용맹한',
  '엉망진창',
  '느긋한',
  '사악한',
  '비실비실',
  '날렵한',
  '거친',
  '꼬질꼬질',
  '근육질',
  '마른',
  '바삭한',
  '비린내',
  '훤칠한',
  '조잡한',
  '비참한',
  '비통한',
  '죽여주는',
  '대단한',
  '대담한',
  '용감한',
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
  '뚱땡이',
  '펭귄',
  '뿡뿡이',
  '돈까스',
  '간디',
  '고릴라',
  '침팬지',
  '오징어',
  '불가사리',
  '버섯',
  '피망',
  '원숭이',
  '코끼리',
  '오랑우탄',
  '숨결',
  '콧바람',
  '콧물',
  '닭발',
  '곰발바닥',
  '마카롱',
  '부리또',
  '햄버거',
  '순두부',
  '짬뽕',
  '족발',
  '보쌈',
  '핫도그',
];
