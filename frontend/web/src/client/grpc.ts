import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { join } from 'path';

const PROTO_PATH = join(__dirname, '../proto/social.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const proto = grpc.loadPackageDefinition(packageDefinition);
const client = new (proto.social as any).SocialService(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

export { client as socialServiceClient }; 