export interface User {
  id: string;
  address: string;
  username: string;
  bio?: string;
  avatar?: string;
  followers?: User[];
  following?: User[];
  posts?: Post[];
}

export interface Post {
  id: string;
  content: string;
  author: User;
  createdAt: string;
  likes: number;
  comments?: Comment[];
  nftAddress?: string;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  post: Post;
  createdAt: string;
}

export interface Context {
  user?: User;
} 