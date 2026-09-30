import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ScreenBackground from '../components/ScreenBackground';
import Header from '../components/Header';
import Card from '../components/Card';
import Avatar from '../components/Avatar';
import InfoBox from '../components/InfoBox';
import GradientButton from '../components/GradientButton';
import { useProfile } from '../hooks/useProfile';
import { colors, fonts } from '../theme/theme';

// Pantalla de presentación: solo renderiza, la lógica está en useProfile
export default function HomeScreen({ navigation }) {
  const { profile } = useProfile();

  return (
    <ScreenBackground>
      <Header title="Developer Profile" />

      <ScrollView contentContainerStyle={styles.content}>
        <Card glow style={styles.profileCard}>
          <Avatar initials={profile.initials} online={profile.online} />

          <Text style={styles.name}>{profile.fullName}</Text>
          <Text style={styles.role}>{profile.roleLabel}</Text>

          <View style={styles.divider} />

          <View style={styles.row}>
            <InfoBox icon="id-card-outline" iconColor={colors.blue} label="Carné" value={profile.carne} />
            <InfoBox icon="school-outline" iconColor={colors.teal} label="Sección" value={profile.seccion} />
          </View>
        </Card>

        <View style={styles.spacer} />

        <GradientButton
          title="Ver API de Dragon Ball"
          onPress={() => navigation.navigate('DragonBall')}
        />
      </ScrollView>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    padding: 16,
    paddingBottom: 24,
  },
  profileCard: {
    alignItems: 'center',
    paddingTop: 28,
  },
  name: {
    marginTop: 20,
    fontFamily: fonts.bold,
    fontSize: 20,
    lineHeight: 28,
    color: colors.text,
    textAlign: 'center',
  },
  role: {
    marginTop: 4,
    fontFamily: fonts.medium,
    fontSize: 11,
    letterSpacing: 2,
    color: colors.lavender,
  },
  divider: {
    alignSelf: 'stretch',
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    alignSelf: 'stretch',
  },
  spacer: {
    flex: 1,
    minHeight: 40,
  },
});
