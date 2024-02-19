import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import fs from 'fs';
import path from 'path';
import readingTime from 'reading-time';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: '**/*.mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    summary: {
      type: 'string',
      required: true,
    },
    categories: {
      type: 'list',
      of: {
        type: 'string',
      },
      required: true,
    },
    isPublished: {
      type: 'boolean',
      required: true,
    },
    createdAt: {
      type: 'string',
      required: true,
    },
    updatedAt: {
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: document => document._raw.flattenedPath,
    },
    readingTime: {
      type: 'number',
      resolve: document => readingTime(document.body.raw).minutes,
    },
    thumbnailImagePath: {
      type: 'string',
      resolve: document => {
        const __dirname = path.resolve();
        const imagePath = `/public/images/contents/${document._raw.flattenedPath}/thumbnail.webp`;
        const filePath = path.join(__dirname, imagePath);

        return fs.existsSync(filePath)
          ? `/images/contents/${document._raw.flattenedPath}/thumbnail.webp`
          : '/images/default-thumbnail.webp';
      },
    },
  },
}));

export default makeSource({
  contentDirPath: 'src/contents',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'dark-plus',
        },
      ],
    ],
  },
});
