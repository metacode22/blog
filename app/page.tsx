import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

import { isEmptyArray } from '@/src/utils/array';

import PostList from './components/PostList';
import PostListItem from './components/PostListItem';

export default async function HomePage() {
  const posts = allPosts
    .filter(post => post.isPublished)
    .sort((a, b) => compareDesc(new Date(a.updatedAt), new Date(b.updatedAt)));

  if (!posts || !posts.length) return <div>무언가 잘못됨!</div>;

  return (
    <div className='flex w-full flex-col items-start'>
      {/* {!isEmptyArray(posts) ? <PostListItem post={posts[0]} /> : null} */}
      <PostList posts={posts} />
    </div>
  );
}
