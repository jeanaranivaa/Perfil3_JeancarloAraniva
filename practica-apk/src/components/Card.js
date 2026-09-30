import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../theme/theme';

// Tarjeta genérica reutilizable. `glow` agrega la línea morada superior.
export default function Card({ children, style, glow = false }) {
  return (
    <View style={[styles.card, style]}>
      {glow && (
        <LinearGradient
          colors={['transparent', colors.primary, 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.glow}
        />
      )}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  glow: {
    position: 'absolute',
    top: 0,
    left: 40,
    right: 40,
    height: 2,
  },
});
