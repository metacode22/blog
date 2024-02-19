import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

import PostList from './components/PostList';

export default async function HomePage() {
  const posts = allPosts
    .filter(post => post.isPublished)
    .sort((a, b) => compareDesc(new Date(a.updatedAt), new Date(b.updatedAt)));

  return (
    <div className='flex w-full flex-col items-start'>
      <PostList posts={posts} />
    </div>
  );
}
