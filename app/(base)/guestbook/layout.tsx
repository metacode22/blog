export const metadata = {
  title: '신승준 블로그 | 방명록',
  description: '방명록에 메시지를 남겨주세요.',
  alternates: {
    canonical: '/guestbook',
  },
};

export default function GuestbookLayout({ children }: { children: React.ReactNode }) {
  return children;
}
