import { Box, Center, Heading, Text, VStack } from 'native-base';

export default function Home() {
  return (
    <Center flex={1} bg="white">
      <VStack space={4} alignItems="center">
        <Heading size="xl">
          Welcome to CryptoSocial
        </Heading>
        <Text fontSize="md" textAlign="center" px={4}>
          Децентрализованная социальная сеть на блокчейне
        </Text>
      </VStack>
    </Center>
  );
} 