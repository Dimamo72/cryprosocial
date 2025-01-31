import { Stack } from 'expo-router';
import { NativeBaseProvider, extendTheme } from 'native-base';

const theme = extendTheme({
  colors: {
    primary: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
    },
  },
  config: {
    initialColorMode: 'light',
  },
});

export default function RootLayout() {
  return (
    <NativeBaseProvider theme={theme}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.primary[600],
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </NativeBaseProvider>
  );
}
