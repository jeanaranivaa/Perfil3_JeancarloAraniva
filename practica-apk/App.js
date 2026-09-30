import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import AppSplash from './src/components/AppSplash';
import { useAppFonts } from './src/hooks/useAppFonts';
import { useSplash } from './src/hooks/useSplash';
import { colors } from './src/theme/theme';

const navTheme = {
  ...DarkTheme,
  colors: { ...DarkTheme.colors, background: colors.background },
};

export default function App() {
  const fontsReady = useAppFonts();
  const { showSplash } = useSplash(fontsReady);

  // Mientras cargan las fuentes sigue visible el splash nativo
  if (!fontsReady) return null;

  if (showSplash) {
    return (
      <>
        <StatusBar style="light" />
        <AppSplash />
      </>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navTheme}>
        <StatusBar style="light" />
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}