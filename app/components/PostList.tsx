'use client';

import { Post } from 'contentlayer/generated';
import { useSearchParams } from 'next/navigation';

import PostListItem from './PostListItem';

export default function PostList({ posts }: { posts: Post[] }) {
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get('category');

  return (
    <ul className='flex flex-col gap-14'>
      {posts
        .filter(post =>
          !categoryQuery || categoryQuery === 'All'
            ? true
            : post.categories.includes(categoryQuery),
        )
        .map(post => (
          <PostListItem post={post} key={post.slug} />
        ))}
    </ul>
  );
}
