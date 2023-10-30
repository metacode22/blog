import PostListItem from './PostListItem';
import { PostMeta } from '@/src/types/posts';

export default async function PostList({ postMetas }: { postMetas: PostMeta[] }) {
  if (!postMetas.length) return <div>글이 하나도 없음.</div>;

  return (
    <section className='flex flex-col gap-8'>
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
