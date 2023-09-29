export type RepositoryFileTree = {
  tree: Array<{ path: string }>;
};

export type PostMeta = {
  title: string;
  summary: string;
  categories: string[];
  createdAt: string;
  updatedAt: string;
};
