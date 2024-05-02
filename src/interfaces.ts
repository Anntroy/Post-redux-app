export interface Post {
  userId: number;
  readonly id: number;
  title: string;
  body: string;
}

export interface RootState {
  posts: Post[];
}
