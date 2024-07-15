import { getPosts } from '@/src/utils/post';

import PostList from '../src/components/PostList';

export default async function HomePage() {
  const posts = getPosts();

  return (
    <div className='flex w-full flex-col items-start'>
      <PostList posts={posts} />
    </div>
  );
}
