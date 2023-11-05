export default function ReadingTime({ readingTime }: { readingTime: number }) {
  return <span className='text-sm text-gray-400'>{Math.ceil(readingTime)} min read</span>;
}
