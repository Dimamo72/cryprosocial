import Redis from 'ioredis';
import { PrismaClient } from '@prisma/client';

export class CacheService {
  private redis: Redis;
  private prisma: PrismaClient;

  constructor() {
    const redisUrl = process.env.REDIS_URL;
    if (!redisUrl) {
      throw new Error('REDIS_URL environment variable is not set');
    }
    this.redis = new Redis(redisUrl);
    this.prisma = new PrismaClient();
  }

  async get<T>(key: string): Promise<T | null> {
    const value = await this.redis.get(key);
    if (!value) return null;
    return JSON.parse(value) as T;
  }

  async set<T>(key: string, value: T, expiresIn?: number): Promise<void> {
    const serializedValue = JSON.stringify(value);
    if (expiresIn) {
      await this.redis.setex(key, expiresIn, serializedValue);
    } else {
      await this.redis.set(key, serializedValue);
    }
  }

  async delete(key: string): Promise<void> {
    await this.redis.del(key);
  }

  async clear(): Promise<void> {
    await this.redis.flushall();
  }

  async disconnect(): Promise<void> {
    await this.redis.quit();
    await this.prisma.$disconnect();
  }

  async getOrSet<T>(
    key: string,
    fetchFn: () => Promise<T>,
    expiresIn?: number
  ): Promise<T> {
    const cached = await this.get<T>(key);
    if (cached) return cached;

    const value = await fetchFn();
    await this.set(key, value, expiresIn);
    return value;
  }
} 