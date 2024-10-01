import { List } from '@/src/components/post-list';
import { routes } from '@/src/constants/routes';
import { getLogs } from '@/src/utils/contents/log';

export default function LogsPage() {
  const logs = getLogs();

  return (
    <section>
      <List items={logs} baseUrl={routes.logs.root} />
    </section>
  );
}
