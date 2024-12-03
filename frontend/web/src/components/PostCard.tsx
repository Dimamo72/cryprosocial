import { Box, Text, Avatar, HStack, VStack, IconButton } from '@chakra-ui/react';
import { FaHeart, FaComment } from 'react-icons/fa';

interface PostCardProps {
  username: string;
  content: string;
  likesCount: number;
  commentsCount: number;
  createdAt: string;
  onLike?: () => void;
  onComment?: () => void;
}

export const PostCard: React.FC<PostCardProps> = ({
  username,
  content,
  likesCount,
  commentsCount,
  createdAt,
  onLike,
  onComment,
}) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={4} bg="white">
      <HStack spacing={3} mb={3}>
        <Avatar size="sm" name={username} />
        <VStack align="start" spacing={0}>
          <Text fontWeight="bold">{username}</Text>
          <Text fontSize="sm" color="gray.500">
            {new Date(createdAt).toLocaleDateString()}
          </Text>
        </VStack>
      </HStack>

      <Text mb={4}>{content}</Text>

      <HStack spacing={4}>
        <HStack>
          <IconButton
            aria-label="Like"
            icon={<FaHeart />}
            variant="ghost"
            size="sm"
            onClick={onLike}
          />
          <Text fontSize="sm">{likesCount}</Text>
        </HStack>

        <HStack>
          <IconButton
            aria-label="Comment"
            icon={<FaComment />}
            variant="ghost"
            size="sm"
            onClick={onComment}
          />
          <Text fontSize="sm">{commentsCount}</Text>
        </HStack>
      </HStack>
    </Box>
  );
}; 