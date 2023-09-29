export type RepositoryFileTree = {
  tree: Array<{ path: string }>;
};

export type PostMetaFromRawMdx = {
  title: string;
  summary: string;
  categories: string[];
  createdAt: string;
  updatedAt: string;
};

export type PostMeta = PostMetaFromRawMdx & {
  id: string;
  timeToRead: number;
};

export type PostDetail = {
  meta: PostMeta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};
