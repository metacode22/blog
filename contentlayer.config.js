import { defineDocumentType, makeSource } from 'contentlayer/source-files';
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
    createdAt: {
      type: 'date',
      required: true,
    },
    updatedAt: {
      type: 'date',
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
      resolve: document => `/images/${document._raw.flattenedPath}/thumbnail.png`,
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
