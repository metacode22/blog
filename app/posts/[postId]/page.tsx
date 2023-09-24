import { getPostDetailByPostFileName } from '@/src/services/post';

import { notFound } from 'next/navigation';

import '@/src/styles/prism-one-dark.css'

export default async function PostDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const postDetail = await getPostDetailByPostFileName(`${postId}/index.mdx`);

  if (!postDetail) notFound();

  return <article className='prose max-w-none'>{postDetail.content}</article>;
}
