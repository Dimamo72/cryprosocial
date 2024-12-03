import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  VStack,
  useToast,
  Text,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { useState } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuth: (username: string, password: string, isLogin: boolean) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onAuth }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleSubmit = () => {
    if (!username || !password) {
      toast({
        title: 'Ошибка',
        description: 'Заполните все поля',
        status: 'error',
        duration: 3000,
      });
      return;
    }

    onAuth(username, password, isLogin);
    setUsername('');
    setPassword('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{isLogin ? 'Вход' : 'Регистрация'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Имя пользователя</FormLabel>
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Введите имя пользователя"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Пароль</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Введите пароль"
              />
            </FormControl>

            <Button colorScheme="blue" width="full" onClick={handleSubmit}>
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>

            <Text
              color="blue.500"
              cursor="pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin
                ? 'Нет аккаунта? Зарегистрируйтесь'
                : 'Уже есть аккаунт? Войдите'}
            </Text>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}; 