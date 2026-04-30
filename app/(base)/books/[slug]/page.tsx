import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Bullet from '@/src/components/bullet';
import { MDX } from '@/src/components/mdx';
import ReadingTime from '@/src/components/reading-time';
import Summary from '@/src/components/summary';
import Time from '@/src/components/time';
import { Views } from '@/src/components/view';
import { getBooks } from '@/src/utils/contents/book';
import { serialize } from '@/src/utils/mdx';

export async function generateStaticParams() {
  const books = getBooks();

  return books.map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }): Promise<Metadata> {
  const book = getBooks().find((book) => book.slug === slug);

  if (!book) return {};

  const { title, summary, categories, createdAt, updatedAt } = book.meta;

  return {
    title,
    description: summary,
    keywords: categories,
    alternates: {
      canonical: `/books/${slug}`,
    },
    openGraph: {
      type: 'article',
      title,
      description: summary,
      url: `${process.env.SITE_URL}/books/${slug}`,
      publishedTime: new Date(createdAt).toISOString(),
      modifiedTime: new Date(updatedAt).toISOString(),
    },
  };
}

export default async function BookPage({ params: { slug } }: { params: { slug: string } }) {
  const book = getBooks().find((book) => book.slug === slug);

  if (!book) notFound();

  const { readingTime, content } = book;
  const { title, summary, updatedAt } = book.meta;

  const { compiledSource } = await serialize(content);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title,
      description: summary,
      datePublished: new Date(book.meta.createdAt).toISOString(),
      dateModified: new Date(updatedAt).toISOString(),
      url: `${process.env.SITE_URL}/books/${slug}`,
      inLanguage: 'ko-KR',
      keywords: book.meta.categories,
      author: {
        '@type': 'Person',
        '@id': `${process.env.SITE_URL}/#person`,
        name: '신승준',
        url: process.env.SITE_URL,
        sameAs: [
          'https://github.com/metacode22',
          'https://www.linkedin.com/in/%EC%8A%B9%EC%A4%80-%EC%8B%A0-73602420a/',
        ],
      },
      publisher: {
        '@type': 'Person',
        '@id': `${process.env.SITE_URL}/#person`,
        name: '신승준',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: process.env.SITE_URL },
        { '@type': 'ListItem', position: 2, name: '읽은 책', item: `${process.env.SITE_URL}/books` },
        { '@type': 'ListItem', position: 3, name: title },
      ],
    },
  ];

  return (
    <div className='w-full max-w-3xl'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className='prose prose-neutral w-full max-w-none break-all dark:prose-invert'>
        <h1 className='m-0 py-4'>{title}</h1>
        <div className='flex flex-col items-start gap-1'>
          <Summary>{summary}</Summary>
          <div className='flex items-center justify-start gap-2'>
            <Time date={updatedAt} />
            <Bullet />
            <ReadingTime readingTime={readingTime} />
            <Bullet />
            <Views slug={slug} increase />
          </div>
        </div>
        <div className='w-full py-8'>
          <MDX compiledSource={compiledSource} frontmatter={book.meta} />
        </div>
      </article>
    </div>
  );
}
