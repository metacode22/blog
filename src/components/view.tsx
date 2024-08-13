import { getViews } from '../apis/view';

export async function Views({ slug }: { slug: string }) {
  const { views } = await getViews(slug);

  return <span className='text-xs text-gray-400'>{views.toLocaleString('ko-KR')} views</span>;
}
