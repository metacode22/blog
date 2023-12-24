import PostListItem from './PostListItem';
import { Post } from 'contentlayer/generated';

export default async function PostList({ posts }: { posts: Post[] }) {
  if (!posts.length) return <div>글이 하나도 없음.</div>;

  return (
    <ul className='flex flex-col gap-14'>
      {posts.map(post => (
        <PostListItem post={post} key={post.slug} />
      ))}
    </ul>
  );
}
