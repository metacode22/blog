import { allPosts } from '@/.contentlayer/generated';
import PostList from '../components/PostList';
import { compareDesc } from 'date-fns';

export default function Posts() {
  const posts = allPosts
    .filter(post => post.isPublished)
    .sort((a, b) => compareDesc(new Date(a.updatedAt), new Date(b.updatedAt)));

  return (
    <div className='flex w-full flex-col items-start gap-6'>
      <PostList posts={posts} />
    </div>
  );
}
