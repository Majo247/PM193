import React, { useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator, StyleSheet, Alert } from 'react-native';
import SearchBar from '../components/SearchBar';
import { fetchRestaurantsTomTom } from '../api/tomtom';
import RestaurantCard from '../components/RestaurantCard';

const HomeScreen = ({ navigation }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (type, city) => {
    if (!type.trim() || !city.trim()) {
      Alert.alert('Error', 'Por favor, ingresa tipo de comida y ciudad.');
      return;
    }
    setLoading(true);
    try {
      const results = await fetchRestaurantsTomTom(type, city);
      setRestaurants(results);
    } catch (error) {
      Alert.alert('Error', error.message || 'No se pudieron cargar los restaurantes');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🍽️ Busca Restaurantes</Text>
      <Text style={styles.subheader}>Descubre los mejores lugares para comer cerca de ti</Text>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <ActivityIndicator size="large" color="#e07a5f" style={{ marginTop: 30 }} />
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {restaurants.length === 0 ? (
            <Text style={styles.noResults}>No hay resultados. ¡Intenta otra búsqueda!</Text>
          ) : (
            restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                onPress={() => navigation.navigate('RestaurantDetails', { restaurant })}
              />
            ))
          )}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
    backgroundColor: '#fff5e1', // Color cálido tipo restaurante
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#bc6c25',
    marginBottom: 4,
    textAlign: 'center',
    letterSpacing: 1,
    fontFamily: 'serif',
  },
  subheader: {
    fontSize: 16,
    color: '#6d4c41',
    marginBottom: 18,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  noResults: {
    textAlign: 'center',
    marginTop: 40,
    color: '#bc6c25',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;