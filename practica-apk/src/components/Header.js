import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts } from '../theme/theme';

// Encabezado superior con título y botón de menú (⋮)
export default function Header({ title, onMenuPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Pressable
        onPress={onMenuPress}
        style={({ pressed }) => [styles.menuButton, pressed && { opacity: 0.6 }]}
      >
        <Ionicons name="ellipsis-vertical" size={18} color={colors.text} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: colors.text,
  },
  menuButton: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: colors.cardInner,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
