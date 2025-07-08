import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const RestaurantDetails = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: restaurant.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.info}>Calificación: {restaurant.rating || 'N/A'}</Text>
      <Text style={styles.info}>Distancia: {restaurant.distance ? (restaurant.distance / 1000).toFixed(2) + ' km' : 'N/A'}</Text>
      <Text style={styles.info}>Dirección: {restaurant.address || 'No disponible'}</Text>
      <Text style={styles.info}>Teléfono: {restaurant.phone || 'No disponible'}</Text>
      {/* Aquí podrías agregar reseñas si la API las provee */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  info: { fontSize: 16, marginBottom: 8 },
});

export default RestaurantDetails;