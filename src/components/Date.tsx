/**
 * @param date - YYYY-MM-DD와 같은 형식으로 들어와야 함.
 */
export default function Date({ date }: { date: string }) {
  return (
    <time dateTime={date} className='text-sm text-gray-400'>
      {date}
    </time>
  );
}
