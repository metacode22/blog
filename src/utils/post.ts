import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

import { PostMeta } from '@/src/types/post';

const CONTENT_PATH = path.join(process.cwd(), 'src/contents');

export function getPosts() {
  const files = getMDXFiles(CONTENT_PATH);

  return files
    .filter((file) => {
      const { meta } = readMDXFile(path.join(CONTENT_PATH, file));

      return meta.published;
    })
    .map((file) => {
      const { meta, content } = readMDXFile(path.join(CONTENT_PATH, file));
      const slug = path.basename(file, path.extname(file));

      return {
        meta,
        content,
        slug,
        readingTime: readingTime(content).minutes,
      };
    });
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(rawContent);

  return {
    meta: data as PostMeta,
    content,
  };
}
