import { routes } from '@/src/constants/routes';
import { getPosts } from '@/src/utils/contents/post';

import { List } from '../../../src/components/post-list';

export const metadata = {
  title: '신승준 블로그 | 개발',
};

export default function PostsPage() {
  const posts = getPosts();

  return (
    <section>
      <List items={posts} baseUrl={routes.posts.root} />
    </section>
  );
}
