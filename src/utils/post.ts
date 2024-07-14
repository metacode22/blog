import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const CONTENT_PATH = path.join(process.cwd(), 'src/contents');

export async function getPosts() {
  const files = getMDXFiles(CONTENT_PATH);

  return files.map((file) => {
    const { meta, content } = readMDXFile(path.join(CONTENT_PATH, file));
    const slug = path.basename(file, path.extname(file));

    return {
      meta,
      content,
      slug,
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
    meta: data,
    content,
  };
}
