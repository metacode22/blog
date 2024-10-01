'use server';

import { revalidatePath } from 'next/cache';

import { createGuestbook } from '@/src/apis/guestbooks';

export async function createGuestbookAction(formData: FormData) {
  const name = formData.get('name')?.toString();
  const message = formData.get('message')?.toString();

  if (!name || !message) {
    throw new Error('이름 혹은 메시지를 입력해주세요.');
  }

  await createGuestbook({ name, message });
  revalidatePath('/guestbook');
}
