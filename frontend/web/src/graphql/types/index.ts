import { createSchema } from 'graphql-yoga';
import { makeExecutableSchema } from '@graphql-tools/schema';

export interface User {
  id: string;
  address: string;
  username: string;
}

export interface Context {
  user: User | null;
}

const typeDefs = /* GraphQL */ `
  type User {
    id: ID!
    address: String!
    username: String!
  }

  type Post {
    id: ID!
    content: String!
    author: User!
    createdAt: String!
    likesCount: Int!
    comments: [Comment!]!
    nftAddress: String
  }

  type Comment {
    id: ID!
    content: String!
    author: User!
    createdAt: String!
  }

  type Query {
    me: User
    user(address: String!): User
    posts(limit: Int!, offset: Int!): [Post!]!
    post(id: ID!): Post
  }

  type Mutation {
    createPost(content: String!, nftAddress: String): Post!
    likePost(postId: ID!): Post!
    createComment(postId: ID!, content: String!): Comment!
    mintPostNFT(postId: ID!): String!
  }
`;

export const schema = makeExecutableSchema({
  typeDefs,
}); 