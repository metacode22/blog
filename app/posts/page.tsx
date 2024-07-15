import { getPosts } from '@/src/utils/post';

import PostList from '../../src/components/post-list';

export default function PostsPage() {
  const posts = getPosts();

  return <PostList posts={posts} />;
}
