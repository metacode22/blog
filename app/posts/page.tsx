import { compareDesc } from 'date-fns';

import { allPosts } from '@/.contentlayer/generated';
import Category from '@/src/components/Category';

import PostList from '../components/PostList';

type Categories = Record<string, number>;

export default function PostsPage() {
  const posts = allPosts
    .filter(post => post.isPublished)
    .sort((a, b) => compareDesc(new Date(a.updatedAt), new Date(b.updatedAt)));
  const categories = posts.reduce(
    (acc, post) => {
      post.categories.forEach(category => {
        acc[category] = acc[category] ? acc[category] + 1 : 1;
      });

      return acc;
    },
    { All: 0 } as Categories,
  );

  return (
    <div className='flex w-full flex-col items-start gap-6'>
      <div className='flex flex-wrap gap-2'>
        {Object.entries(categories).map(([category, count]) => (
          <Category
            category={category}
            className='rounded-full border border-slate-200 px-3 py-1 hover:no-underline'
            key={category}>
            {category} {count !== 0 && count}
          </Category>
        ))}
      </div>
      <PostList posts={posts} />
    </div>
  );
}
