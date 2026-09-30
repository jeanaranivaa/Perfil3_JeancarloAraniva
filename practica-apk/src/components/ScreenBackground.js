import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/theme';

// Fondo degradado oscuro reutilizado por todas las pantallas
export default function ScreenBackground({ children }) {
  return (
    <LinearGradient colors={[colors.backgroundTop, colors.background]} style={styles.flex}>
      <SafeAreaView style={styles.flex} edges={['top']}>
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
});
