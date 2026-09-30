import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { colors, fonts } from '../theme/theme';

// Componente de carga reutilizable
export default function Loader({ message = 'Cargando...', small = false }) {
  return (
    <View style={[styles.container, small && styles.small]}>
      <ActivityIndicator size={small ? 'small' : 'large'} color={colors.primary} />
      {!small && <Text style={styles.text}>{message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: 24,
  },
  small: { flex: 0, paddingVertical: 16 },
  text: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.textMuted,
  },
});
