import { getPosts } from '@/src/utils/post';

interface Props {}

export default async function Temp({}: Props) {
  const posts = await getPosts();

  return <></>;
}
