import ROUTES from '@/src/constants/routes';
import useHover from '@/src/hooks/useHover';
import { getPostMetas } from '@/src/services/post';
import Image from 'next/image';
import Link from 'next/link';
import PostListItem from './PostListItem';

export default async function PostList({ postListName }: { postListName: string }) {
  const postMetas = await getPostMetas();

  if (!postMetas) return <div>무언가 잘못됨!</div>;

  return (
    <section>
      <h2>{postListName}</h2>
      {/**
       * @TODO
       * 글들이 많아지면 Vercel Blog 처럼 grid를 이용해서 만들기
       * */}
      <ul>
        {postMetas.map(postMeta => (
          <PostListItem postMeta={postMeta} key={postMeta.id} />
        ))}
      </ul>
    </section>
  );
}
