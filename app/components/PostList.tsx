import PostListItem from './PostListItem';
import { PostMeta } from '@/src/types/posts';

export default async function PostList({
  postListName = '글 목록',
  postMetas,
}: {
  postListName?: string;
  postMetas: PostMeta[];
}) {
  if (!postMetas.length) return <div>글이 하나도 없음.</div>;

  return (
    <section className='flex flex-col gap-8'>
      <h2 className='text-3xl font-bold text-slate-700'>{postListName}</h2>
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
