import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SWRConfig } from 'swr';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/components/useColorScheme';
import { StatusBar } from 'expo-status-bar';
import { fetcher } from '@/services/api';
// import { swrStorageProvider } from '@/utils/swr-storage-provider';
import AsyncStorage from '@react-native-async-storage/async-storage';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const cache = new Map();

async function loadCacheFromStorage() {
  const storedCache = await AsyncStorage.getItem("swr-cache");
  if (storedCache) {
      const parsedCache = JSON.parse(storedCache);
      parsedCache.forEach(([key, value]: [String, any]) => {
        cache.set(key, value)
      })
  }

}

loadCacheFromStorage();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <SWRConfig
      value={{
        fetcher,
        provider: () => cache,
        onErrorRetry: (error, key, config, revalidate, { retryCount}) => {
          if (retryCount >= 3) return;
          setTimeout(() => revalidate({retryCount}), 2000)
        },
        onSuccess: async (data, key) => {
          const cacheArray = Array.from(cache.entries());
          await AsyncStorage.setItem("swr-cache", JSON.stringify(cacheArray))
        }
      }}
    >
       <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <StatusBar style="auto" />
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="search" options={{ presentation: 'modal', title:"Busca" }} />
            <Stack.Screen name="settings" options={{ presentation: 'modal', title:"Configurações"}} />
          </Stack>
      </ThemeProvider>
    </SWRConfig>
  );
}
