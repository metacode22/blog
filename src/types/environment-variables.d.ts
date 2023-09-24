declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NEXT_PUBLIC_POSTS_SOURCE: string;

    // server only
    readonly GITHUB_API_URL_TO_GET_POSTS_SOURCE_TREE: string;
    readonly GITHUB_TOKEN: string;
  }
}
