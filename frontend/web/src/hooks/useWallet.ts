import { useState, useEffect } from 'react';
import { WalletService } from '../services/wallet';

export function useWallet() {
  const [address, setAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const walletService = new WalletService();

  useEffect(() => {
    const checkConnection = async () => {
      const savedAddress = await walletService.getAddress();
      if (savedAddress) {
        setAddress(savedAddress);
      }
    };
    checkConnection();
  }, []);

  const connect = async () => {
    setIsConnecting(true);
    try {
      const newAddress = await walletService.connect();
      setAddress(newAddress);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      throw error;
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnect = async () => {
    try {
      await walletService.disconnect();
      setAddress(null);
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
      throw error;
    }
  };

  return {
    address,
    isConnecting,
    isConnected: !!address,
    connect,
    disconnect,
  };
} 