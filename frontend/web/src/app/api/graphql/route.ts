import { createYoga } from 'graphql-yoga';
import { NextRequest } from 'next/server';
import { resolvers } from '../../../graphql/resolvers';
import { schema } from '../../../graphql/types';
import { verifyToken } from '../../../utils/auth';
import type { Context } from '../../../graphql/types';

const yoga = createYoga<Context>({
  graphqlEndpoint: '/api/graphql',
  schema,
  context: async ({ request }) => {
    const token = request.headers.get('authorization')?.split(' ')[1];
    const user = token ? await verifyToken(token) : null;
    return { user };
  },
});

export async function GET(request: NextRequest) {
  return yoga.handle(request);
}

export async function POST(request: NextRequest) {
  return yoga.handle(request);
} 