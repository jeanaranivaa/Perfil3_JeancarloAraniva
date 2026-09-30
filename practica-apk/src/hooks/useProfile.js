import { useMemo } from 'react';
import { PROFILE } from '../data/profile';

// Toma las iniciales del primer nombre y del primer apellido
function getInitials(fullName) {
  const parts = fullName.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? '';
  const lastName = parts.length >= 3 ? parts[parts.length - 2] : parts[1];
  return (first + (lastName?.[0] ?? '')).toUpperCase();
}

// Lógica de la pantalla de presentación
export function useProfile() {
  const profile = useMemo(
    () => ({
      ...PROFILE,
      initials: getInitials(PROFILE.fullName),
      roleLabel: PROFILE.role.toUpperCase(),
    }),
    []
  );

  return { profile };
}
