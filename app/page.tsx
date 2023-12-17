import FeaturedPostListItem from './components/FeaturedPostListItem';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export default async function HomePage() {
  const posts = allPosts
    .filter(post => post.isPublished)
    .sort((a, b) => compareDesc(new Date(a.updatedAt), new Date(b.updatedAt)));

  if (!posts || !posts.length) return <div>무언가 잘못됨!</div>;

  return (
    <div className='flex flex-col items-center'>
      <div className='w-full max-w-5xl px-4 py-6'>
        {posts[0] && <FeaturedPostListItem post={posts[0]} />}
      </div>
    </div>
  );
}
