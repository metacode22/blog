import Link from 'next/link';

export default function BooksPage() {
  return (
    <section className='prose dark:prose-invert'>
      <div>
        <h3 className='m-0'>2025년</h3>
        <ul>
          <h4>5월</h4>
          <ul>
            <li>프로젝트 헤일메리</li>
            <li>울트라러닝</li>
          </ul>
        </ul>
        <ul>
          <h4>4월</h4>
          <ul>
            <li>단위 테스트의 기술</li>
            <li>
              <Link href='/books/getting-out-of-the-box'>상자 밖에 있는 사람</Link>
            </li>
          </ul>
        </ul>
        <ul>
          <h4>3월</h4>
          <ul>
            <li>사피엔스</li>
          </ul>
        </ul>
      </div>
      <hr />
      <div>
        <h3 className='m-0'>2024년</h3>
        <ul>
          <h4>12월</h4>
          <ul>
            <li>절박함을 버린 남자들</li>
            <li>
              <Link href='/books/how-to-stop-worrying-and-start-living'>데일 카네기 자기관리론</Link>
            </li>
          </ul>
        </ul>
        <ul>
          <h4>11월</h4>
          <ul>
            <li>
              <Link href='/books/tesla-reboot'>테슬라 리부트</Link>
            </li>
            <li>
              <Link href='/books/why-do-you-sacrifice-your-life-for-others'>
                왜 당신은 다른 사람을 위해 살고 있는가
              </Link>
            </li>
          </ul>
        </ul>
        <ul>
          <h4>10월</h4>
          <ul>
            <li>
              <Link href='/books/leverage'>레버리지</Link>
            </li>
          </ul>
        </ul>
        <ul>
          <h4>9월</h4>
          <ul>
            <li>
              <Link href='/books/the-pragmatic-programmer'>실용주의 프로그래머</Link>
            </li>
          </ul>
        </ul>
        <ul>
          <h4>8월</h4>
          <ul>
            <li>원씽(The One Thing)</li>
            <li>
              <Link href='/books/money-hot-love-and-cold-treat'>돈, 뜨겁게 사랑하고 차갑게 다루어라</Link>
            </li>
          </ul>
        </ul>
        <ul>
          <h4>7월</h4>
          <ul>
            <li>이동 평균선 투자법</li>
          </ul>
        </ul>
        <ul>
          <h4>6월</h4>
          <ul>
            <li>부자 아빠 가난한 아빠</li>
          </ul>
        </ul>
        <ul>
          <h4>5월</h4>
          <ul>
            <li>아주 작은 습관의 힘</li>
          </ul>
        </ul>
        <ul>
          <h4>4월</h4>
          <ul>
            <li>퇴사는 무섭지만 돈은 벌고 싶은 월급쟁이들에게</li>
          </ul>
        </ul>
        <ul>
          <h4>3월</h4>
          <ul>
            <li>돈은 좋지만 재테크는 겁나는 너에게</li>
          </ul>
        </ul>
        <ul>
          <h4>2월</h4>
          <ul>
            <li>미국주식 처음공부</li>
          </ul>
        </ul>
        <ul>
          <h4>1월</h4>
          <ul>
            <li>부자의 그릇</li>
          </ul>
        </ul>
      </div>
    </section>
  );
}
