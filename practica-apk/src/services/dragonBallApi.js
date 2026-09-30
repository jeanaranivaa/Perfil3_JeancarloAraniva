// Acceso a la API pública de Dragon Ball: https://dragonball-api.com
const BASE_URL = 'https://dragonball-api.com/api';

export async function getPlanets(page = 1, limit = 10) {
  const response = await fetch(`${BASE_URL}/planets?page=${page}&limit=${limit}`);
  if (!response.ok) throw new Error(`Error ${response.status} al consultar la API`);
  return response.json();
}