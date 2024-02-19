import '@/src/styles/globals.css';

import type { Metadata } from 'next';

import GlobalNavigationBar from '@/src/components/GlobalNavigationBar';
import GoogleAnalyticsScript from '@/src/components/GoogleAnalyticsScript';

export const metadata: Metadata = {
  title: '신승준 블로그',
  description: '프론트엔드 개발자 신승준의 개인 블로그입니다.',
  verification: {
    google: 'YP4UXQP92HR2Cwg7cRLU9g3OQ8OLVlzxNaASuYQbAzg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className='flex w-full flex-col items-center'>
        <GlobalNavigationBar />
        <main className='w-full max-w-5xl p-4'>{children}</main>
        <GoogleAnalyticsScript />
      </body>
    </html>
  );
}
