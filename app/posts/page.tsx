import { allPosts } from '@/.contentlayer/generated';

export default function Posts() {
  const posts = allPosts.filter(post => post.isPublished);

  return (
    <div className='flex w-full max-w-none flex-col items-center pt-20'>
      <div className='flex w-full max-w-5xl px-4'>
        
      </div>
    </div>
  );
}
