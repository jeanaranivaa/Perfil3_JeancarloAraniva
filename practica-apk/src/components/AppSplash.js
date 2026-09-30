import { useEffect, useRef } from 'react';
import { View, Text, Animated, Easing, ActivityIndicator, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, fonts } from '../theme/theme';

// Pantalla de bienvenida animada
export default function AppSplash() {
  const scale = useRef(new Animated.Value(0.6)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const float = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Entrada: aparece y crece
    Animated.parallel([
      Animated.spring(scale, { toValue: 1, friction: 5, useNativeDriver: true }),
      Animated.timing(opacity, { toValue: 1, duration: 600, useNativeDriver: true }),
    ]).start();

    // Flotación suave en bucle
    Animated.loop(
      Animated.sequence([
        Animated.timing(float, { toValue: -10, duration: 900, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        Animated.timing(float, { toValue: 0, duration: 900, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
      ])
    ).start();
  }, []);

  return (
    <LinearGradient colors={[colors.backgroundTop, colors.background]} style={styles.container}>
      <Animated.Image
        source={require('../../assets/masterball.png')}
        style={[styles.logo, { opacity, transform: [{ scale }, { translateY: float }] }]}
        resizeMode="contain"
      />

      <Animated.View style={{ opacity, alignItems: 'center' }}>
        <Text style={styles.title}>Developer Profile</Text>
        <Text style={styles.subtitle}>JEANCARLO ARANIVA</Text>
      </Animated.View>

      <View style={styles.footer}>
        <ActivityIndicator color={colors.primary} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 24,
    color: colors.text,
  },
  subtitle: {
    marginTop: 4,
    fontFamily: fonts.medium,
    fontSize: 12,
    letterSpacing: 3,
    color: colors.lavender,
  },
  footer: {
    position: 'absolute',
    bottom: 60,
  },
});