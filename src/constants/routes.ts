const ROUTES = {
  HOME: '/',
  POSTS: {
    ROOT: '/posts',
    DETAIL: (slug: string) => `${ROUTES.POSTS.ROOT}/${slug}`,
  },
  ABOUT: '/about',
  DIARY: '/diary',
};

export default ROUTES;
