import PostList from './components/PostList';
import Introduction from './components/Introduction';
import FeaturedPostListItem from './components/FeaturedPostListItem';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export default async function HomePage() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.updatedAt), new Date(b.updatedAt)));

  if (!posts) return <div>무언가 잘못됨!</div>;

  return (
    <div className='flex flex-col items-center'>
      <div className='w-full'>
        <Introduction />
      </div>
      <div className='w-full max-w-5xl px-4 py-6'>
        <FeaturedPostListItem post={posts[0]} />
      </div>
    </div>
  );
}
