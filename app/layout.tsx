import GlobalNavigationBar from '@/src/components/GlobalNavigationBar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '신승준 블로그',
  description: '프론트엔드 개발자 신승준의 개인 블로그입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body className={inter.className}>
        <GlobalNavigationBar />
        <main className='flex justify-center'>
          <div className='max-w-5xl border-red-100 border-2 w-full p-4'>{children}</div>
        </main>
      </body>
    </html>
  );
}
