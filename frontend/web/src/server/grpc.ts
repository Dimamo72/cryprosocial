import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { SocialService } from '../services/socialService';
import { join } from 'path';

const PROTO_PATH = join(__dirname, '../proto/social.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const socialProto = grpc.loadPackageDefinition(packageDefinition);
const server = new grpc.Server();
const socialService = new SocialService();

server.addService((socialProto as any).social.SocialService.service, {
  getUser: socialService.getUser.bind(socialService),
  createPost: socialService.createPost.bind(socialService),
  getFeed: socialService.getFeed.bind(socialService),
  likePost: socialService.likePost.bind(socialService),
  mintPostNFT: socialService.mintPostNFT.bind(socialService),
});

const port = process.env.GRPC_PORT || 50051;
server.bindAsync(
  `0.0.0.0:${port}`,
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    if (error) {
      console.error('Failed to bind server:', error);
      return;
    }
    server.start();
    console.log(`gRPC server running on port ${port}`);
  }
); 