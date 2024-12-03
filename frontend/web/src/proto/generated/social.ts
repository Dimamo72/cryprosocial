import { ServiceError as GrpcServiceError, status } from '@grpc/grpc-js';

export interface User {
  id: string;
  address: string;
  username: string;
  bio?: string;
  avatar?: string;
}

export interface Post {
  id: string;
  content: string;
  author: User;
  createdAt: string;
  likesCount: number;
  comments: Comment[];
  nftAddress?: string;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: string;
}

export interface GetUserRequest {
  address: string;
}

export interface GetUserResponse {
  user: User;
}

export interface CreatePostRequest {
  content: string;
  nftAddress?: string;
}

export interface GetFeedRequest {
  limit: number;
  offset: number;
}

export interface PostList {
  posts: Post[];
  total: number;
}

export interface LikePostRequest {
  postId: string;
}

export interface CommentPostRequest {
  postId: string;
  content: string;
}

export interface MintPostNFTRequest {
  postId: string;
}

export interface NFTResponse {
  transactionHash: string;
  nftAddress: string;
  tokenId: string;
}

export interface ServiceError extends GrpcServiceError {
  details: string;
  metadata: any;
} 