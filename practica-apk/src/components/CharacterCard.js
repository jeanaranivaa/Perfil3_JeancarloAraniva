import { View, Text, Image, StyleSheet } from 'react-native';
import Card from './Card';
import { colors, fonts } from '../theme/theme';

// Tarjeta de un personaje de Dragon Ball (reutiliza Card)
export default function CharacterCard({ character }) {
  return (
    <Card style={styles.card}>
      <View style={styles.imageBox}>
        <Image source={{ uri: character.image }} style={styles.image} resizeMode="contain" />
      </View>

      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>{character.name}</Text>
        <Text style={styles.race}>
          {character.race} · {character.gender}
        </Text>

        <View style={styles.kiRow}>
          <Text style={styles.kiLabel}>KI</Text>
          <Text style={styles.kiValue} numberOfLines={1}>{character.ki}</Text>
        </View>

        {!!character.affiliation && (
          <View style={styles.badge}>
            <Text style={styles.badgeText} numberOfLines={1}>{character.affiliation}</Text>
          </View>
        )}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 14,
    padding: 14,
    borderRadius: 18,
  },
  imageBox: {
    width: 84,
    height: 110,
    borderRadius: 14,
    backgroundColor: colors.cardInner,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: { width: '90%', height: '95%' },
  info: {
    flex: 1,
    justifyContent: 'center',
    gap: 4,
  },
  name: {
    fontFamily: fonts.bold,
    fontSize: 17,
    color: colors.text,
  },
  race: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.textMuted,
  },
  kiRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  kiLabel: {
    fontFamily: fonts.bold,
    fontSize: 11,
    color: colors.gradientStart,
    letterSpacing: 1,
  },
  kiValue: {
    flex: 1,
    fontFamily: fonts.semibold,
    fontSize: 13,
    color: colors.lavender,
  },
  badge: {
    alignSelf: 'flex-start',
    marginTop: 4,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    backgroundColor: colors.tabActive,
  },
  badgeText: {
    fontFamily: fonts.medium,
    fontSize: 11,
    color: colors.lavender,
  },
});
