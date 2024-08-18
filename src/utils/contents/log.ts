import path from 'path';

import { LogMeta } from '@/src/types/contents/log';
import { getContents } from '@/src/utils/file';

const CONTENTS_PATH = path.join(process.cwd(), 'src/contents/logs');

export function getLogs() {
  return getContents<LogMeta>(CONTENTS_PATH).sort(
    (a, b) => new Date(b.meta.updatedAt).getTime() - new Date(a.meta.updatedAt).getTime(),
  );
}
