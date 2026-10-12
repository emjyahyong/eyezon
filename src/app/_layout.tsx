import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import Header from '@/app/header';
import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { Habitude } from '@/components/ui/habitude';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <Header />
      <Habitude />
      {/* <AppTabs /> */}
    </ThemeProvider>
  );
}
