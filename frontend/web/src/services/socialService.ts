import { ServerUnaryCall, sendUnaryData, ServiceError, status, Metadata } from '@grpc/grpc-js';
import { User, GetUserRequest, Post, CreatePostRequest, PostList, GetFeedRequest, LikePostRequest, MintPostNFTRequest, NFTResponse } from '../proto/generated/social';

export class SocialService {
  async getUser(
    call: ServerUnaryCall<GetUserRequest, User>,
    callback: sendUnaryData<User>
  ) {
    try {
      const { address } = call.request;
      const user: User = {
        id: '1',
        address,
        username: `user_${address.slice(2, 8)}`,
      };
      callback(null, user);
    } catch (error) {
      const metadata = new Metadata();
      metadata.add('error-type', 'GetUserError');
      
      const err: ServiceError = {
        name: 'GetUserError',
        message: error instanceof Error ? error.message : 'Unknown error',
        code: status.INTERNAL,
        details: 'Failed to get user',
        metadata
      };
      callback(err, null);
    }
  }

  async createPost(
    call: ServerUnaryCall<CreatePostRequest, Post>,
    callback: sendUnaryData<Post>
  ) {
    try {
      const { content, nftAddress } = call.request;
      const post: Post = {
        id: Date.now().toString(),
        content,
        author: {
          id: '1',
          address: '0x...',
          username: 'test_user',
        },
        createdAt: new Date().toISOString(),
        likesCount: 0,
        comments: [],
        nftAddress,
      };
      callback(null, post);
    } catch (error) {
      const metadata = new Metadata();
      metadata.add('error-type', 'CreatePostError');

      const err: ServiceError = {
        name: 'CreatePostError',
        message: error instanceof Error ? error.message : 'Unknown error',
        code: status.INTERNAL,
        details: 'Failed to create post',
        metadata
      };
      callback(err, null);
    }
  }

  async getFeed(
    call: ServerUnaryCall<GetFeedRequest, PostList>,
    callback: sendUnaryData<PostList>
  ) {
    try {
      const { limit, offset } = call.request;
      const posts: Post[] = [];
      callback(null, { posts, total: 0 });
    } catch (error) {
      const metadata = new Metadata();
      metadata.add('error-type', 'GetFeedError');

      const err: ServiceError = {
        name: 'GetFeedError',
        message: error instanceof Error ? error.message : 'Unknown error',
        code: status.INTERNAL,
        details: 'Failed to get feed',
        metadata
      };
      callback(err, null);
    }
  }

  async likePost(
    call: ServerUnaryCall<LikePostRequest, Post>,
    callback: sendUnaryData<Post>
  ) {
    try {
      const { postId } = call.request;
      const post: Post = {
        id: postId,
        content: 'Test post',
        author: {
          id: '1',
          address: '0x...',
          username: 'test_user',
        },
        createdAt: new Date().toISOString(),
        likesCount: 1,
        comments: [],
      };
      callback(null, post);
    } catch (error) {
      const metadata = new Metadata();
      metadata.add('error-type', 'LikePostError');

      const err: ServiceError = {
        name: 'LikePostError',
        message: error instanceof Error ? error.message : 'Unknown error',
        code: status.INTERNAL,
        details: 'Failed to like post',
        metadata
      };
      callback(err, null);
    }
  }

  async mintPostNFT(
    call: ServerUnaryCall<MintPostNFTRequest, NFTResponse>,
    callback: sendUnaryData<NFTResponse>
  ) {
    try {
      const { postId } = call.request;
      const response: NFTResponse = {
        transactionHash: '0x...',
        nftAddress: '0x...',
        tokenId: '1',
      };
      callback(null, response);
    } catch (error) {
      const metadata = new Metadata();
      metadata.add('error-type', 'MintNFTError');

      const err: ServiceError = {
        name: 'MintNFTError',
        message: error instanceof Error ? error.message : 'Unknown error',
        code: status.INTERNAL,
        details: 'Failed to mint NFT',
        metadata
      };
      callback(err, null);
    }
  }
} 