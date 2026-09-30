import { Text, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts } from '../theme/theme';

// Botón con degradado naranja → rosa
export default function GradientButton({ title, icon = 'flash', onPress, style }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.shadow, style, pressed && { transform: [{ scale: 0.98 }] }]}
    >
      <LinearGradient
        colors={[colors.gradientStart, colors.gradientEnd]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.button}
      >
        <Ionicons name={icon} size={20} color={colors.white} />
        <Text style={styles.title}>{title}</Text>
        <Ionicons name="arrow-forward" size={18} color={colors.white} />
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shadow: {
    borderRadius: 18,
    shadowColor: colors.gradientEnd,
    shadowOpacity: 0.45,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 18,
  },
  title: {
    flex: 1,
    fontFamily: fonts.semibold,
    fontSize: 15,
    color: colors.white,
  },
});
