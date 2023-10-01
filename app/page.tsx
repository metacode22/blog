import { getPostMetas } from '@/src/services/post';
import PostList from './components/PostList';

export default async function HomePage() {
  const postMetas = await getPostMetas();

  if (!postMetas) return <div>무언가 잘못됨!</div>;

  return (
    <div className='w-full max-w-5xl p-4'>
      <PostList postListName='주요 글' postMetas={postMetas} />
    </div>
  );
}
