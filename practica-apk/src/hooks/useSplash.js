import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

// Mantiene el splash nativo visible hasta que carguen las fuentes
SplashScreen.preventAutoHideAsync().catch(() => {});

// Controla cuándo termina el splash animado
export function useSplash(appReady, duration = 2500) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (!appReady) return;
    SplashScreen.hideAsync().catch(() => {}); // ocultar el nativo y mostrar el animado
    const timer = setTimeout(() => setShowSplash(false), duration);
    return () => clearTimeout(timer);
  }, [appReady, duration]);

  return { showSplash };
}