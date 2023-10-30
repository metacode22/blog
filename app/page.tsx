import { getPostMetas } from '@/src/services/post';
import PostList from './components/PostList';
import Introduction from './components/Introduction';

export default async function HomePage() {
  const postMetas = await getPostMetas();

  if (!postMetas) return <div>무언가 잘못됨!</div>;

  return (
    <div className='flex flex-col items-center'>
      <div className='w-full'>
        <Introduction />
      </div>
      <div className='w-full max-w-5xl px-4 py-6'>
        <PostList postListName='주요 글' postMetas={postMetas} />
      </div>
    </div>
  );
}
