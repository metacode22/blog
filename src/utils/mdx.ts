import { serialize as serializeMDX } from 'next-mdx-remote/serialize';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';

export async function serialize(content: string) {
  return serializeMDX(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'wrap',
            properties: {
              className: ['anchor'],
              ariaLabel: 'anchor',
            },
          },
        ],
        [rehypePrettyCode as any, { theme: 'dark-plus' }],
      ],
    },
  });
}
