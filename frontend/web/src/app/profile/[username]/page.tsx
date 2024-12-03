'use client';

import {
  Box,
  Container,
  VStack,
  HStack,
  Avatar,
  Text,
  Button,
  Grid,
  GridItem,
  List,
  ListItem,
  Icon,
  Divider,
  useColorModeValue,
  Badge,
  SimpleGrid,
  Progress,
  Tooltip,
  Image,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { PostCard } from '@/components/PostCard';
import { Header } from '@/components/Header';
import { EditProfileModal } from '@/components/EditProfileModal';
import { useAppSelector } from '@/store';
import { 
  FaHome, 
  FaUserFriends, 
  FaImage, 
  FaBookmark, 
  FaBell, 
  FaEnvelope,
  FaCog,
  FaHeart,
  FaEthereum,
  FaMedal,
  FaGem,
  FaChartLine,
} from 'react-icons/fa';

interface MenuItem {
  icon: any;
  label: string;
  count?: number;
}

const menuItems: MenuItem[] = [
  { icon: FaHome, label: 'Главная' },
  { icon: FaUserFriends, label: 'Друзья', count: 42 },
  { icon: FaImage, label: 'Фотографии', count: 156 },
  { icon: FaBookmark, label: 'Сохраненное', count: 15 },
  { icon: FaBell, label: 'Уведомления', count: 3 },
  { icon: FaEnvelope, label: 'Сообщения', count: 5 },
  { icon: FaHeart, label: 'Понравилось', count: 248 },
  { icon: FaCog, label: 'Настройки' },
];

interface Post {
  id: string;
  content: string;
  likesCount: number;
  commentsCount: number;
  createdAt: string;
}

interface Profile {
  username: string;
  bio: string;
  postsCount: number;
  followersCount: number;
  followingCount: number;
  posts: Post[];
}

interface NFT {
  id: string;
  name: string;
  image: string;
  collection: string;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  progress: number;
  maxProgress: number;
  icon: any;
}

interface DAOParticipation {
  name: string;
  role: string;
  votingPower: number;
  proposalsCreated: number;
  icon: string;
}

const mockNFTs: NFT[] = [
  { id: '1', name: 'CryptoArt #123', image: 'https://via.placeholder.com/150', collection: 'CryptoArt' },
  { id: '2', name: 'Punk #456', image: 'https://via.placeholder.com/150', collection: 'CryptoPunks' },
  { id: '3', name: 'Ape #789', image: 'https://via.placeholder.com/150', collection: 'BoredApes' },
];

const mockAchievements: Achievement[] = [
  { id: '1', title: 'Влиятельный автор', description: '1000+ лайков на постах', progress: 750, maxProgress: 1000, icon: FaMedal },
  { id: '2', title: 'DAO Активист', description: 'Участие в 50 голосованиях', progress: 35, maxProgress: 50, icon: FaGem },
  { id: '3', title: 'NFT Коллекционер', description: 'Собрано 10 NFT', progress: 3, maxProgress: 10, icon: FaEthereum },
];

const mockDAOs: DAOParticipation[] = [
  { name: 'DeFi DAO', role: 'Core Member', votingPower: 1500, proposalsCreated: 3, icon: '🏦' },
  { name: 'NFT Creators', role: 'Contributor', votingPower: 750, proposalsCreated: 1, icon: '🎨' },
];

export default function ProfilePage({ params }: { params: { username: string } }) {
  const currentUser = useAppSelector((state) => state.auth.user);
  const isOwnProfile = currentUser?.username === params.username;
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Главная');
  
  const [profile, setProfile] = useState<Profile>({
    username: params.username,
    bio: 'Это мой профиль в CryptoSocial 👋',
    postsCount: 5,
    followersCount: 120,
    followingCount: 85,
    posts: [
      {
        id: '1',
        content: 'Мой первый пост!',
        likesCount: 10,
        commentsCount: 2,
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        content: 'Изучаю Web3 технологии',
        likesCount: 15,
        commentsCount: 3,
        createdAt: new Date().toISOString(),
      },
    ],
  });

  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    setProfile(prev => ({
      ...prev,
      followersCount: isFollowing ? prev.followersCount - 1 : prev.followersCount + 1,
    }));
  };

  const handleEditProfile = (updatedProfile: { username: string; bio: string; avatar?: string }) => {
    setProfile(prev => ({
      ...prev,
      username: updatedProfile.username,
      bio: updatedProfile.bio,
    }));
  };

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const renderWeb3Stats = () => (
    <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} mb={6}>
      <Box p={4} bg={bgColor} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
        <VStack>
          <Icon as={FaEthereum} w={6} h={6} color="purple.500" />
          <Text fontWeight="bold">2.5 ETH</Text>
          <Text fontSize="sm" color="gray.500">Портфолио</Text>
        </VStack>
      </Box>
      <Box p={4} bg={bgColor} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
        <VStack>
          <Icon as={FaGem} w={6} h={6} color="blue.500" />
          <Text fontWeight="bold">12</Text>
          <Text fontSize="sm" color="gray.500">NFTs</Text>
        </VStack>
      </Box>
      <Box p={4} bg={bgColor} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
        <VStack>
          <Icon as={FaChartLine} w={6} h={6} color="green.500" />
          <Text fontWeight="bold">2250</Text>
          <Text fontSize="sm" color="gray.500">DAO Токены</Text>
        </VStack>
      </Box>
      <Box p={4} bg={bgColor} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
        <VStack>
          <Icon as={FaMedal} w={6} h={6} color="yellow.500" />
          <Text fontWeight="bold">Level 3</Text>
          <Text fontSize="sm" color="gray.500">Репутация</Text>
        </VStack>
      </Box>
    </SimpleGrid>
  );

  const renderNFTGallery = () => (
    <Box mb={6}>
      <HStack justify="space-between" mb={4}>
        <Text fontSize="lg" fontWeight="bold">NFT Коллекция</Text>
        <Button size="sm" variant="ghost">Показать все</Button>
      </HStack>
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
        {mockNFTs.map(nft => (
          <Box 
            key={nft.id}
            borderRadius="lg"
            overflow="hidden"
            borderWidth="1px"
            borderColor={borderColor}
          >
            <Image src={nft.image} alt={nft.name} />
            <Box p={3}>
              <Text fontWeight="bold" fontSize="sm">{nft.name}</Text>
              <Text fontSize="xs" color="gray.500">{nft.collection}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );

  const renderAchievements = () => (
    <Box mb={6}>
      <Text fontSize="lg" fontWeight="bold" mb={4}>Достижения</Text>
      <VStack spacing={4}>
        {mockAchievements.map(achievement => (
          <Box 
            key={achievement.id}
            p={4}
            bg={bgColor}
            borderRadius="lg"
            borderWidth="1px"
            borderColor={borderColor}
            w="full"
          >
            <HStack spacing={4}>
              <Icon as={achievement.icon} w={6} h={6} color="blue.500" />
              <Box flex={1}>
                <HStack justify="space-between">
                  <Text fontWeight="bold">{achievement.title}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {achievement.progress}/{achievement.maxProgress}
                  </Text>
                </HStack>
                <Text fontSize="sm" color="gray.500" mb={2}>{achievement.description}</Text>
                <Progress 
                  value={(achievement.progress / achievement.maxProgress) * 100}
                  colorScheme="blue"
                  borderRadius="full"
                  size="sm"
                />
              </Box>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );

  const renderDAOParticipation = () => (
    <Box mb={6}>
      <Text fontSize="lg" fontWeight="bold" mb={4}>DAO Участие</Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {mockDAOs.map(dao => (
          <Box
            key={dao.name}
            p={4}
            bg={bgColor}
            borderRadius="lg"
            borderWidth="1px"
            borderColor={borderColor}
          >
            <HStack spacing={4}>
              <Text fontSize="2xl">{dao.icon}</Text>
              <Box flex={1}>
                <HStack justify="space-between">
                  <Text fontWeight="bold">{dao.name}</Text>
                  <Badge colorScheme="purple">{dao.role}</Badge>
                </HStack>
                <HStack justify="space-between" mt={2}>
                  <Text fontSize="sm" color="gray.500">Voting Power</Text>
                  <Text fontSize="sm" fontWeight="bold">{dao.votingPower}</Text>
                </HStack>
                <HStack justify="space-between">
                  <Text fontSize="sm" color="gray.500">Proposals</Text>
                  <Text fontSize="sm" fontWeight="bold">{dao.proposalsCreated}</Text>
                </HStack>
              </Box>
            </HStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );

  return (
    <>
      <Header 
        user={currentUser}
        onAuthClick={() => {}}
        onLogout={() => {}}
      />
      <Container maxW="container.xl" py={8}>
        <Grid templateColumns="250px 1fr" gap={8}>
          {/* Боковое меню */}
          <GridItem>
            <Box 
              bg={bgColor} 
              borderRadius="lg" 
              borderWidth="1px"
              borderColor={borderColor}
              position="sticky"
              top="20px"
            >
              <List spacing={2} p={4}>
                {menuItems.map((item) => (
                  <ListItem key={item.label}>
                    <Button
                      variant={activeTab === item.label ? 'solid' : 'ghost'}
                      colorScheme={activeTab === item.label ? 'blue' : 'gray'}
                      width="full"
                      justifyContent="flex-start"
                      leftIcon={<Icon as={item.icon} />}
                      onClick={() => setActiveTab(item.label)}
                      position="relative"
                    >
                      {item.label}
                      {item.count && item.count > 0 && (
                        <Box
                          position="absolute"
                          right="2"
                          bg={activeTab === item.label ? 'white' : 'blue.500'}
                          color={activeTab === item.label ? 'blue.500' : 'white'}
                          px={2}
                          py={1}
                          borderRadius="full"
                          fontSize="xs"
                        >
                          {item.count}
                        </Box>
                      )}
                    </Button>
                  </ListItem>
                ))}
              </List>
            </Box>
          </GridItem>

          {/* Основной контент */}
          <GridItem>
            <VStack spacing={8} align="stretch">
              {/* Профиль */}
              <Box bg={bgColor} borderRadius="lg" p={6} borderWidth="1px" borderColor={borderColor}>
                <HStack spacing={6} align="start">
                  <Avatar size="2xl" name={profile.username} />
                  <VStack align="start" flex={1} spacing={4}>
                    <HStack justify="space-between" w="full">
                      <VStack align="start" spacing={1}>
                        <Text fontSize="2xl" fontWeight="bold">
                          {profile.username}
                        </Text>
                        <Text color="gray.600">{profile.bio}</Text>
                      </VStack>
                      {isOwnProfile ? (
                        <Button
                          colorScheme="blue"
                          variant="outline"
                          onClick={() => setIsEditModalOpen(true)}
                        >
                          Редактировать профиль
                        </Button>
                      ) : (
                        <Button
                          colorScheme={isFollowing ? 'gray' : 'blue'}
                          onClick={handleFollow}
                        >
                          {isFollowing ? 'Отписаться' : 'Подписаться'}
                        </Button>
                      )}
                    </HStack>

                    <HStack spacing={8}>
                      <VStack align="center" spacing={1}>
                        <Text fontSize="xl" fontWeight="bold">{profile.postsCount}</Text>
                        <Text color="gray.600">постов</Text>
                      </VStack>
                      <VStack align="center" spacing={1}>
                        <Text fontSize="xl" fontWeight="bold">{profile.followersCount}</Text>
                        <Text color="gray.600">подписчиков</Text>
                      </VStack>
                      <VStack align="center" spacing={1}>
                        <Text fontSize="xl" fontWeight="bold">{profile.followingCount}</Text>
                        <Text color="gray.600">подписок</Text>
                      </VStack>
                    </HStack>
                  </VStack>
                </HStack>
              </Box>

              {/* Web3 статистика */}
              {renderWeb3Stats()}

              {/* Контент в зависимости от выбранной вкладки */}
              {activeTab === 'Главная' && (
                <>
                  {/* NFT галерея */}
                  {renderNFTGallery()}
                  
                  {/* Достижения */}
                  {renderAchievements()}
                  
                  {/* DAO участие */}
                  {renderDAOParticipation()}
                  
                  {/* Посты */}
                  <Box>
                    <Text fontSize="lg" fontWeight="bold" mb={4}>Последние посты</Text>
                    <VStack spacing={4} align="stretch">
                      {profile.posts.map(post => (
                        <PostCard
                          key={post.id}
                          username={profile.username}
                          content={post.content}
                          likesCount={post.likesCount}
                          commentsCount={post.commentsCount}
                          createdAt={post.createdAt}
                        />
                      ))}
                    </VStack>
                  </Box>
                </>
              )}
              {activeTab === 'Фотографии' && (
                <Box p={4} bg={bgColor} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
                  <Text>Галерея фотографий (в разработке)</Text>
                </Box>
              )}
              {activeTab === 'Друзья' && (
                <Box p={4} bg={bgColor} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
                  <Text>Список друзей (в разработке)</Text>
                </Box>
              )}
              {/* Добавьте другие вкладки по необходимости */}
            </VStack>
          </GridItem>
        </Grid>
      </Container>

      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        currentProfile={{
          username: profile.username,
          bio: profile.bio,
        }}
        onSave={handleEditProfile}
      />
    </>
  );
} 