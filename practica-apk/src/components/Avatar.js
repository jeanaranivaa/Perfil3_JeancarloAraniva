import { View, Text, StyleSheet } from 'react-native';
import { colors, fonts } from '../theme/theme';

// Avatar cuadrado con iniciales e indicador de "en línea"
export default function Avatar({ initials, online = false, size = 80 }) {
  return (
    <View style={[styles.box, { width: size, height: size, borderRadius: size * 0.22 }]}>
      <Text style={[styles.initials, { fontSize: size * 0.3 }]}>{initials}</Text>
      {online && <View style={styles.dot} />}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.cardInner,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 10,
  },
  initials: {
    fontFamily: fonts.bold,
    color: colors.lavender,
  },
  dot: {
    position: 'absolute',
    right: -5,
    bottom: -5,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.online,
    borderWidth: 3,
    borderColor: colors.card,
  },
});
