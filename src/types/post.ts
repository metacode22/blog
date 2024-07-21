export type PostMeta = {
  title: string;
  summary: string;
  categories: string[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type Post = {
  content: string;
  meta: PostMeta;
  readingTime: number;
  slug: string;
};
