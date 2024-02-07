import { allPosts } from '@/.contentlayer/generated';
import PostList from '../components/PostList';
import { compareDesc } from 'date-fns';

type Categories = Record<string, number>;

export default function Posts() {
  const posts = allPosts
    .filter(post => post.isPublished)
    .sort((a, b) => compareDesc(new Date(a.updatedAt), new Date(b.updatedAt)));
  const categories = posts.reduce((acc, post) => {
    post.categories.forEach(category => {
      acc[category] = acc[category] ? acc[category] + 1 : 1;
    });

    return acc;
  }, {} as Categories);

  return (
    <div className='flex w-full flex-col items-start gap-6'>
      <div>
        {/** 
         * @todo categories
         */}
      </div>
      <PostList posts={posts} />
    </div>
  );
}
