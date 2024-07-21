'use client';

import { Post } from '@/src/types/post';

import PostListItem from './post-list-item';

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className='flex flex-col gap-14'>
      {posts.map((post) => (
        <PostListItem post={post} key={post.slug} />
      ))}
    </ul>
  );
}
