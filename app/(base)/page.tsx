import Link from 'next/link';

export default async function HomePage() {
  return (
    <section className='flex flex-col gap-6'>
      <h1 className='sr-only'>신승준</h1>
      <p className='prose dark:prose-invert'>
        늙어서도 유쾌하게 일하게 싶은 개발자입니다. 현재 팀스파르타라는 회사에서 좋은 동료들에 파묻혀 정말 재밌게 일하고
        있어요.
        <br />
        <br />
        돈과 명성만 바라보고 반도체 설비 엔지니어로 직장 생활을 시작했었어요. 돈은 만족스러웠어요! 근데 장난기와 웃음이
        가득한 제 모습을 잃어버렸었습니다. &apos;더 늦기 전에 저를 되찾고 정말 재밌어서 할 수 있는 일을 해보자&apos;라는
        생각으로 뛰쳐나와, 지금은 웹 프론트엔드를 주로 다루고 있어요.
        <br />
        <br />
        주식에 대해 이야기하는 걸 좋아해요. 기업들이 어떤 일을 하고 있는지 알게 되고, 그러면서 세상도 어떻게 돌아가고
        있는지 알 수 있게 되는데 이게 너무 재밌더라구요.
        <br />
        <br />
        욕심이 조금 있어서 QLD, SSO와 같은 레버리지 ETF를 투자하고 있어요. 또 항상 가슴 뛰게 만드는 일론 머스크의
        테슬라에도 투자를 하고 있답니다. 부디 제가 먼 미래에{' '}
        <Link href='/books/money-hot-love-and-cold-treat#부화뇌동파-소신파' target='_blank' rel='noopener noreferrer'>
          소신파 장기투자자
        </Link>
        가 되어 있었으면 좋겠어요.
        <br />
        <br />
        주말 오전에 등산을 즐겨 해요. 평일동안 어떻게 살았는지 자연스럽게 되새겨 볼 수 있고, 다음 주에는 어떻게 살아볼지
        단기적인 계획과 목표를 생각할 수 있더라구요. 아마 주말 오전 10 ~ 11시 사이에 사당에서 출발하시면 저를 목격하실
        수도 있어요.
        <br />
        <br />책 읽는 것도 좋아해요. 적당한 주변 소리, 충분한 시간과 함께 정말 재밌는 책을 만나길 항상 기대합니다.
        생각보다 남은 인생 동안 읽을 수 있는 책의 양이 적다는 생각에{' '}
        <Link href='/logs/books-left-to-read' target='_blank' rel='noopener noreferrer'>
          평점-드리븐
        </Link>
        으로 책을 고르고 있어요.
      </p>
    </section>
  );
}
