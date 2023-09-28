import PostList from './components/PostList';

export default function HomePage() {
  return (
    <div className='w-full max-w-5xl p-4'>
      <PostList postListName='주요 글' />
    </div>
  );
}
