import { View, Text, Image, StyleSheet } from 'react-native';
import Card from './Card';
import { colors, fonts } from '../theme/theme';

// Tarjeta de un planeta de Dragon Ball (reutiliza Card)
export default function PlanetCard({ planet }) {
  const destroyed = planet.isDestroyed;

  return (
    <Card style={styles.card}>
      <Image source={{ uri: planet.image }} style={styles.image} resizeMode="cover" />

      <View style={styles.body}>
        <View style={styles.titleRow}>
          <Text style={styles.name} numberOfLines={1}>{planet.name}</Text>
          <View style={[styles.badge, destroyed ? styles.badgeDestroyed : styles.badgeActive]}>
            <Text style={[styles.badgeText, { color: destroyed ? colors.gradientEnd : colors.online }]}>
              {destroyed ? 'Destruido' : 'Intacto'}
            </Text>
          </View>
        </View>

        <Text style={styles.description} numberOfLines={3}>
          {planet.description}
        </Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 0,
    borderRadius: 18,
  },
  image: {
    width: '100%',
    height: 160,
    backgroundColor: colors.cardInner,
  },
  body: {
    padding: 16,
    gap: 8,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  name: {
    flex: 1,
    fontFamily: fonts.bold,
    fontSize: 17,
    color: colors.text,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
  },
  badgeActive: { backgroundColor: 'rgba(52, 211, 153, 0.15)' },
  badgeDestroyed: { backgroundColor: 'rgba(232, 48, 94, 0.15)' },
  badgeText: {
    fontFamily: fonts.semibold,
    fontSize: 11,
  },
  description: {
    fontFamily: fonts.regular,
    fontSize: 13,
    lineHeight: 19,
    color: colors.textMuted,
  },
});