import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi';
import { useAppDispatch } from '../store';
import { setUser, logout } from '../store/features/authSlice';

export function useWeb3() {
  const { address, isConnected } = useAccount();
  const { connectAsync: connect, connectors } = useConnect();
  const { disconnectAsync: disconnect } = useDisconnect();
  const { data: balance } = useBalance({
    address,
  });

  const dispatch = useAppDispatch();

  const handleConnect = async (connector: any) => {
    try {
      const result = await connect({ connector });
      if (result.accounts[0]) {
        dispatch(
          setUser({
            address: result.accounts[0],
            username: `User_${result.accounts[0].slice(2, 8)}`,
          })
        );
      }
    } catch (error) {
      console.error('Failed to connect:', error);
    }
  };

  const handleDisconnect = async () => {
    await disconnect();
    dispatch(logout());
  };

  return {
    address,
    isConnected,
    balance,
    connectors,
    connect: handleConnect,
    disconnect: handleDisconnect,
  };
} 