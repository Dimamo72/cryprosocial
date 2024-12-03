import {
  Box,
  Container,
  Button,
  HStack,
  Text,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

interface HeaderProps {
  user: { username: string } | null;
  onAuthClick: () => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, onAuthClick, onLogout }) => {
  return (
    <Box bg="white" shadow="sm" py={4}>
      <Container maxW="container.md">
        <HStack justify="space-between">
          <Text fontSize="xl" fontWeight="bold">
            CryptoSocial
          </Text>

          {user ? (
            <Menu>
              <MenuButton as={Button} variant="ghost">
                <HStack>
                  <Avatar size="sm" name={user.username} />
                  <Text>{user.username}</Text>
                </HStack>
              </MenuButton>
              <MenuList>
                <MenuItem onClick={onLogout}>Выйти</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Button colorScheme="blue" onClick={onAuthClick}>
              Войти
            </Button>
          )}
        </HStack>
      </Container>
    </Box>
  );
}; 