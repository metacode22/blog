export default function TimeToRead({ timeToRead }: { timeToRead: number }) {
  return <span className='text-gray-400 text-sm'>{timeToRead} min read</span>;
}
