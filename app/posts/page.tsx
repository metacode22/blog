import { getPosts } from '@/src/utils/post';

import PostList from '../../src/components/PostList';

export default function PostsPage() {
  const posts = getPosts();

  return (
    <div className='flex w-full flex-col items-start gap-6'>
      <PostList posts={posts} />
    </div>
  );
}
