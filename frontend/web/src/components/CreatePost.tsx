import { useState } from 'react';
import { Box, Button, Textarea, VStack } from '@chakra-ui/react';

interface CreatePostProps {
  onSubmit: (content: string) => void;
}

export const CreatePost: React.FC<CreatePostProps> = ({ onSubmit }) => {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (content.trim()) {
      onSubmit(content);
      setContent('');
    }
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={4} bg="white">
      <VStack spacing={4}>
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Что у вас нового?"
          resize="none"
          rows={3}
        />
        <Button
          colorScheme="blue"
          alignSelf="flex-end"
          onClick={handleSubmit}
          isDisabled={!content.trim()}
        >
          Опубликовать
        </Button>
      </VStack>
    </Box>
  );
}; 