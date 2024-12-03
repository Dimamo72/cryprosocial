import { SignJWT, jwtVerify } from 'jose';
import { User } from '../graphql/types';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const EXPIRES_IN = '7d';

export async function createToken(user: User): Promise<string> {
  const token = await new SignJWT({ userId: user.id, address: user.address })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(EXPIRES_IN)
    .setIssuedAt()
    .sign(new TextEncoder().encode(JWT_SECRET));

  return token;
}

export async function verifyToken(token: string): Promise<User | null> {
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
    return {
      id: payload.userId as string,
      address: payload.address as string,
      username: `user_${(payload.address as string).slice(2, 8)}`,
    };
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}

export function generateNonce(): string {
  return `Welcome to CryptoSocial!

Click to sign in and accept the Terms of Service.

This request will not trigger a blockchain transaction or cost any gas fees.

Nonce: ${Math.floor(Math.random() * 1000000)}`;
} 