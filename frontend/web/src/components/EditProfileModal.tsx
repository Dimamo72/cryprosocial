import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
  Avatar,
  Center,
  IconButton,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaCamera } from 'react-icons/fa';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentProfile: {
    username: string;
    bio: string;
    avatar?: string;
  };
  onSave: (profile: { username: string; bio: string; avatar?: string }) => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  currentProfile,
  onSave,
}) => {
  const [profile, setProfile] = useState(currentProfile);
  const toast = useToast();

  const handleSave = () => {
    if (!profile.username.trim()) {
      toast({
        title: 'Ошибка',
        description: 'Имя пользователя не может быть пустым',
        status: 'error',
        duration: 3000,
      });
      return;
    }

    onSave(profile);
    onClose();
    toast({
      title: 'Успешно',
      description: 'Профиль обновлен',
      status: 'success',
      duration: 3000,
    });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(prev => ({
          ...prev,
          avatar: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Редактировать профиль</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <VStack spacing={4}>
            <Center position="relative">
              <Avatar
                size="2xl"
                name={profile.username}
                src={profile.avatar}
              />
              <IconButton
                aria-label="Изменить фото"
                icon={<FaCamera />}
                size="sm"
                colorScheme="blue"
                rounded="full"
                position="absolute"
                bottom="0"
                right="0"
                onClick={() => document.getElementById('avatar-upload')?.click()}
              />
              <Input
                id="avatar-upload"
                type="file"
                accept="image/*"
                display="none"
                onChange={handleImageUpload}
              />
            </Center>

            <FormControl>
              <FormLabel>Имя пользователя</FormLabel>
              <Input
                value={profile.username}
                onChange={(e) => setProfile(prev => ({ ...prev, username: e.target.value }))}
                placeholder="Введите имя пользователя"
              />
            </FormControl>

            <FormControl>
              <FormLabel>О себе</FormLabel>
              <Textarea
                value={profile.bio}
                onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                placeholder="Расскажите о себе"
                rows={4}
              />
            </FormControl>

            <Button colorScheme="blue" width="full" onClick={handleSave}>
              Сохранить
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}; 