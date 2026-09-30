import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import Loader from './src/components/Loader';
import { useAppFonts } from './src/hooks/useAppFonts';
import { colors } from './src/theme/theme';

const navTheme = {
  ...DarkTheme,
  colors: { ...DarkTheme.colors, background: colors.background },
};

export default function App() {
  const fontsReady = useAppFonts();

  // Mientras carga Poppins mostramos solo el indicador (sin texto)
  if (!fontsReady) return <Loader small />;

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navTheme}>
        <StatusBar style="light" />
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
