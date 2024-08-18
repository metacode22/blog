import { Item } from '@/src/types/contents/shared/item';
import { Meta } from '@/src/types/contents/shared/meta';

export type BookMeta = Required<Meta>;

export type Book = Item<BookMeta>;
