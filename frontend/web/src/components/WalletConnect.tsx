import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  HStack,
  Icon,
  useToast,
  ButtonProps,
  IconButton,
  Box,
} from '@chakra-ui/react';
import { FaWallet, FaEthereum, FaSignOutAlt } from 'react-icons/fa';
import { useWallet } from '../hooks/useWallet';

interface WalletConnectProps extends ButtonProps {
  variant?: string;
}

export const WalletConnect: React.FC<WalletConnectProps> = ({ variant, ...props }) => {
  const { address, connect, disconnect, isConnecting } = useWallet();
  const toast = useToast();

  const handleConnect = async () => {
    try {
      await connect();
    } catch (error) {
      toast({
        title: 'Connection Error',
        description: error instanceof Error ? error.message : 'Failed to connect wallet',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  if (!window.ethereum) {
    return (
      <Button
        onClick={() => window.open('https://metamask.io', '_blank', 'noopener,noreferrer')}
        colorScheme="orange"
        {...props}
      >
        <HStack spacing={2}>
          <Icon as={FaWallet} />
          <Text>Install MetaMask</Text>
        </HStack>
      </Button>
    );
  }

  if (!address) {
    return (
      <Button
        onClick={handleConnect}
        isLoading={isConnecting}
        loadingText="Connecting..."
        colorScheme="blue"
        {...props}
      >
        <HStack spacing={2}>
          <Icon as={FaWallet} />
          <Text>Connect Wallet</Text>
        </HStack>
      </Button>
    );
  }

  return (
    <Menu>
      <MenuButton
        as={Button}
        colorScheme="blue"
        variant={variant}
        {...props}
      >
        <HStack spacing={2}>
          <Icon as={FaEthereum} />
          <Text>{`${address.slice(0, 6)}...${address.slice(-4)}`}</Text>
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={disconnect}
          icon={<Icon as={FaSignOutAlt} />}
        >
          Disconnect
        </MenuItem>
      </MenuList>
    </Menu>
  );
}; 