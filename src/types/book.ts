export type BookMeta = {
  title: string;
  summary: string;
  categories: string[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type Book = {
  content: string;
  meta: BookMeta;
  readingTime: number;
  slug: string;
};
