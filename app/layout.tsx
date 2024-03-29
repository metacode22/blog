import '@/src/styles/globals.css';

import type { Metadata } from 'next';

import GlobalNavigationBar from '@/src/components/GlobalNavigationBar';
import GoogleAnalyticsScript from '@/src/components/GoogleAnalyticsScript';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL),
  title: '신승준 블로그',
  description: '프론트엔드 개발자 신승준의 개인 블로그입니다.',
  alternates: {
    canonical: './',
  },
  verification: {
    google: 'YP4UXQP92HR2Cwg7cRLU9g3OQ8OLVlzxNaASuYQbAzg',
    other: {
      'naver-site-verification': 'c77e3af6256377ff0343a93fb26812585a2217b7',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className='bg- flex w-full flex-col items-center'>
        <GlobalNavigationBar />
        <main className='flex w-full max-w-5xl justify-center p-4'>
          {children}
        </main>
        <GoogleAnalyticsScript />
      </body>
    </html>
  );
}
