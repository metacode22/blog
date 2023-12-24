import { allPosts } from '@/.contentlayer/generated';
import PostListItem from '../components/PostListItem';

export default function Posts() {
  const posts = allPosts.filter(post => post.isPublished);

  return (
    <div className='flex w-full flex-col items-start'>
      {posts.map(post => (
        <PostListItem key={post._id} post={post} />
      ))}
    </div>
  );
}
