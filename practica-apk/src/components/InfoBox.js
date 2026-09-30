import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts } from '../theme/theme';

// Recuadro de dato (Carné, Sección, etc.)
export default function InfoBox({ icon, iconColor = colors.blue, label, value }) {
  return (
    <View style={styles.box}>
      <View style={styles.labelRow}>
        <Ionicons name={icon} size={14} color={iconColor} />
        <Text style={styles.label}>{label.toUpperCase()}</Text>
      </View>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: colors.cardInner,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 16,
    alignItems: 'center',
    gap: 6,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  label: {
    fontFamily: fonts.semibold,
    fontSize: 11,
    letterSpacing: 1,
    color: colors.textMuted,
  },
  value: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.text,
    letterSpacing: 1,
  },
});
