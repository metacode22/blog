export default function TimeToRead({ timeToRead }: { timeToRead: number }) {
  return <span className='text-gray-500'>{timeToRead}분</span>;
}
