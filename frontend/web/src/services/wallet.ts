import { CacheService } from './cache';

export class WalletService {
  private cache: CacheService;

  constructor() {
    this.cache = new CacheService();
  }

  async connect(): Promise<string> {
    if (!window.ethereum) {
      throw new Error('MetaMask is not installed');
    }

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      const address = accounts[0];
      await this.cache.set('wallet', { address });
      return address;
    } catch (error) {
      throw new Error('Failed to connect wallet');
    }
  }

  async disconnect(): Promise<void> {
    await this.cache.delete('wallet');
  }

  async getAddress(): Promise<string | null> {
    const wallet = await this.cache.get<{ address: string }>('wallet');
    return wallet?.address || null;
  }

  async isConnected(): Promise<boolean> {
    return !!(await this.getAddress());
  }
} 