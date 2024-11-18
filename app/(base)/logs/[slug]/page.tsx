import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Bullet from '@/src/components/bullet';
import { MDX } from '@/src/components/mdx';
import ReadingTime from '@/src/components/reading-time';
import Summary from '@/src/components/summary';
import Time from '@/src/components/time';
import { Views } from '@/src/components/view';
import { getLogs } from '@/src/utils/contents/log';
import { serialize } from '@/src/utils/mdx';

export async function generateStaticParams() {
  const logs = getLogs();

  return logs.map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }): Promise<Metadata> {
  const log = getLogs().find((log) => log.slug === slug);

  if (!log) return {};

  const { title, summary, categories } = log.meta;

  return {
    title,
    description: summary,
    keywords: categories,
    openGraph: {
      title,
      description: summary,
      url: `${process.env.SITE_URL}/logs/${slug}`,
    },
  };
}

export default async function LogPage({ params: { slug } }: { params: { slug: string } }) {
  const log = getLogs().find((log) => log.slug === slug);

  if (!log) notFound();

  const { readingTime, content } = log;
  const { title, summary, updatedAt } = log.meta;

  const { compiledSource } = await serialize(content);

  return (
    <div className='w-full max-w-3xl'>
      <article className='prose prose-neutral w-full max-w-none dark:prose-invert'>
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
          <MDX compiledSource={compiledSource} frontmatter={log.meta} />
        </div>
      </article>
    </div>
  );
}
