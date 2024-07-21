import { getPosts } from '@/src/utils/post';

import PostList from './_components/post-list';

export default function PostsPage() {
  const posts = getPosts();

  return (
    <section>
      <PostList posts={posts} />
    </section>
  );
}
