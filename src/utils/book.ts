import path from 'path';

import { BookMeta } from '@/src/types/book';
import { getContents } from '@/src/utils/file';

const CONTENTS_PATH = path.join(process.cwd(), 'src/contents/books');

export function getBooks() {
  return getContents<BookMeta>(CONTENTS_PATH);
}
