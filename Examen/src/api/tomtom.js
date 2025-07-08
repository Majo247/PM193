const API_KEY = '0ntN5juvoFcFAE46Kh7WQqFTQqLI66zs'; // Tu API Key real
const API_URL = 'https://api.tomtom.com/search/2/poiSearch';

export async function fetchRestaurantsTomTom(type, city) {
  const params = new URLSearchParams({
    key: API_KEY,
    query: type,
    limit: 10,
    countrySet: 'MX',
  });

  // Obtener lat/lon de la ciudad
  const geocodeResp = await fetch(
    `https://api.tomtom.com/search/2/geocode/${encodeURIComponent(city)}.json?key=${API_KEY}`
  );
  const geocodeData = await geocodeResp.json();
  const position = geocodeData.results[0]?.position;

  if (!position) throw new Error('Ciudad no encontrada');

  // Buscar restaurantes cerca de esa ciudad
  const response = await fetch(
    `${API_URL}/${encodeURIComponent(type)}.json?lat=${position.lat}&lon=${position.lon}&${params.toString()}`
  );
  const data = await response.json();

  return data.results.map((item) => ({
    id: item.id,
    name: item.poi?.name,
    address: item.address?.freeformAddress,
    phone: item.poi?.phone,
    distance: item.dist,
    imageUrl: 'https://via.placeholder.com/100', // TomTom no da imágenes reales
    rating: 'N/A', // TomTom no da rating
  }));
}