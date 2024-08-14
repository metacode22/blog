import path from 'path';

import { PostMeta } from '@/src/types/post';

import { getContents } from './file';

const CONTENTS_PATH = path.join(process.cwd(), 'src/contents/posts');

export function getPosts() {
  return getContents<PostMeta>(CONTENTS_PATH);
}
