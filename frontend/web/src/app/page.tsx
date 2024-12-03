'use client';

import { Container, VStack, useDisclosure, useToast } from '@chakra-ui/react';
import { CreatePost } from '../components/CreatePost';
import { PostCard } from '../components/PostCard';
import { Header } from '../components/Header';
import { AuthModal } from '../components/AuthModal';
import { useState } from 'react';

interface User {
  username: string;
}

interface Post {
  id: string;
  username: string;
  content: string;
  likesCount: number;
  commentsCount: number;
  createdAt: string;
}

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleAuth = (username: string, password: string, isLogin: boolean) => {
    // В реальном приложении здесь будет API запрос
    if (isLogin) {
      // Имитация входа
      setUser({ username });
      toast({
        title: 'Успешно',
        description: 'Вы вошли в систему',
        status: 'success',
        duration: 3000,
      });
    } else {
      // Имитация регистрации
      setUser({ username });
      toast({
        title: 'Успешно',
        description: 'Регистрация выполнена',
        status: 'success',
        duration: 3000,
      });
    }
    onClose();
  };

  const handleLogout = () => {
    setUser(null);
    toast({
      title: 'Успешно',
      description: 'Вы вышли из системы',
      status: 'info',
      duration: 3000,
    });
  };

  const handleCreatePost = (content: string) => {
    if (!user) {
      toast({
        title: 'Ошибка',
        description: 'Войдите в систему, чтобы создать пост',
        status: 'error',
        duration: 3000,
      });
      return;
    }

    const newPost: Post = {
      id: Date.now().toString(),
      username: user.username,
      content,
      likesCount: 0,
      commentsCount: 0,
      createdAt: new Date().toISOString(),
    };
    setPosts([newPost, ...posts]);
  };

  const handleLike = (postId: string) => {
    if (!user) {
      toast({
        title: 'Ошибка',
        description: 'Войдите в систему, чтобы поставить лайк',
        status: 'error',
        duration: 3000,
      });
      return;
    }

    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likesCount: post.likesCount + 1 }
        : post
    ));
  };

  return (
    <>
      <Header
        user={user}
        onAuthClick={onOpen}
        onLogout={handleLogout}
      />
      <Container maxW="container.md" py={8}>
        <VStack spacing={6}>
          <CreatePost onSubmit={handleCreatePost} />
          {posts.map(post => (
            <PostCard
              key={post.id}
              username={post.username}
              content={post.content}
              likesCount={post.likesCount}
              commentsCount={post.commentsCount}
              createdAt={post.createdAt}
              onLike={() => handleLike(post.id)}
            />
          ))}
        </VStack>
      </Container>
      <AuthModal
        isOpen={isOpen}
        onClose={onClose}
        onAuth={handleAuth}
      />
    </>
  );
} 