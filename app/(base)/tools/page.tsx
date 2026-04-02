export const metadata = {
  title: '신승준 블로그 | 도구',
  description: '개발에 사용하는 도구들을 소개합니다.',
  alternates: {
    canonical: '/tools',
  },
};

export default function ToolsPage() {
  return (
    <section className='prose dark:prose-invert'>
      <p>claude code</p>
      <p>vscode</p>
      <p>cmux</p>
      <p>zoxide</p>
      <p>refined github</p>
      <p>raycast</p>
    </section>
  );
}
