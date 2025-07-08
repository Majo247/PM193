const API_URL = 'https://api.foursquare.com/v3/places/search';
const PHOTO_URL = 'https://api.foursquare.com/v3/places/';
const API_KEY = '0ntN5juvoFcFAE46Kh7WQqFTQqLI66zs'; // Pon tu API Key real

// Obtiene la URL de la foto principal del lugar
async function getPhotoUrl(fsq_id) {
  const resp = await fetch(`${PHOTO_URL}${fsq_id}/photos`, {
    headers: { Authorization: API_KEY }
  });
  const photos = await resp.json();
  console.log('Fotos para', fsq_id, photos); // <-- Aquí el console.log
  if (photos.length > 0) {
    // Usa la primera foto
    return `${photos[0].prefix}original${photos[0].suffix}`;
  }
  return 'https://via.placeholder.com/100';
}

export async function fetchRestaurants(type, city) {
  const params = new URLSearchParams({
    query: type,
    near: city,
    limit: 10,
  });

  const response = await fetch(`${API_URL}?${params.toString()}`, {
    headers: {
      Accept: 'application/json',
      Authorization: API_KEY,
    },
  });

  if (!response.ok) throw new Error('Error al consultar Foursquare');

  const data = await response.json();

  // Obtén las fotos de cada restaurante
  const restaurants = await Promise.all(
    data.results.map(async (item) => ({
      id: item.fsq_id,
      name: item.name,
      imageUrl: await getPhotoUrl(item.fsq_id),
      rating: 'N/A', // Foursquare Places API no da rating público
      distance: item.distance,
      address: item.location?.formatted_address || 'No disponible',
      phone: item.tel || 'No disponible',
    }))
  );

  return restaurants;
}