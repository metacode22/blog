export const metadata = {
  alternates: {
    canonical: '/',
  },
};

export default async function HomePage() {
  return (
    <section className='flex flex-col gap-6'>
      <h1 className='sr-only'>신승준</h1>
      <p className='prose dark:prose-invert'>
        유쾌하게 제품을 만들고 싶은 낙관주의 개발자 신승준입니다. 팀스파르타라는 회사에서 좋은 동료들에게 둘러싸여 정말
        재밌게 일하고 있어요.
        <br />
        <br />
        동료들을 위해, 세상 사람들을 위해 보상을 기대하지 않고 &apos;선물&apos;할 수 있는 것은 무엇일까를 생각하며 살고
        있습니다. 이러한 가치관이 제 삶을 더 풍족하게 만든다고 믿어요.
      </p>
    </section>
  );
}
