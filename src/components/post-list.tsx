import { Item } from '@/src/types/contents/shared/item';
import { Meta } from '@/src/types/contents/shared/meta';

import { ListItem } from './post-list-item';

export function List({ items }: { items: Item<Meta>[] }) {
  return (
    <ul className='flex flex-col gap-14'>
      {items.map((item) => (
        <ListItem item={item} key={item.slug} />
      ))}
    </ul>
  );
}
