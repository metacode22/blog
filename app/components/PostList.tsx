import ROUTES from '@/src/constants/routes';
import { getPostMetas } from '@/src/services/post';
import Image from 'next/image';
import Link from 'next/link';

export default async function PostList({ postListName }: { postListName: string }) {
  const postMetas = await getPostMetas();
  // console.log('🚀 ~ file: PostList.tsx:7 ~ PostList ~ postMetas:', postMetas);

  if (!postMetas) return <div>무언가 잘못됨!</div>;

  return (
    <section>
      <h2>{postListName}</h2>
      {/**
       * @TODO
       * 글들이 많아지면 Vercel Blog 처럼 grid를 이용해서 만들기
       * */}
      <ul>
        {postMetas.map(postMeta => (
          <Link
            key={postMeta.id}
            /**
             * @TODO
             * posts/[postId] 페이지 만들어지면 href 변경하기
             */
            href={`${ROUTES.POSTS}/${postMeta.id}`}
            className='flex h-60 w-full items-center gap-12 break-keep rounded-sm border-2 border-slate-400'>
            <Image
              src={`${process.env.NEXT_PUBLIC_POSTS_SOURCE}/${postMeta.id}/thumbnail.png`}
              alt={`${postMeta.title} 썸네일`}
              width={240}
              height={240}
              className='rounded-2xl border-2 border-red-300'
            />
            <div className='flex h-full flex-col justify-between self-start'>
              <div>
                {postMeta.categories.map(category => (
                  <span key={category}>{category}</span>
                ))}
              </div>
              <h3 className='text-4xl font-bold'>{postMeta.title}</h3>
              <div>{postMeta.summary}</div>
              {/**
               * @TODO
               * 업데이트 날짜를 바탕으로 출력하기
               */}
              <div className='flex gap-4'>
                <span>date</span>
                <span>time to read</span>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </section>
  );
}
