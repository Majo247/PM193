import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const RestaurantCard = ({ restaurant, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
    <Image source={{ uri: restaurant.imageUrl }} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.address}>{restaurant.address}</Text>
      <View style={styles.row}>
        <Text style={styles.detail}>Distancia: </Text>
        <Text style={styles.value}>
          {restaurant.distance ? (restaurant.distance / 1000).toFixed(2) + ' km' : 'N/A'}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.detail}>Tel: </Text>
        <Text style={styles.value}>{restaurant.phone}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginBottom: 18,
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 4, // sombra Android
    shadowColor: '#000', // sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  image: {
    width: 110,
    height: 110,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    backgroundColor: '#eee',
  },
  info: {
    flex: 1,
    padding: 14,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#22223b',
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: '#4a4e69',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  detail: {
    fontSize: 13,
    color: '#9a8c98',
    fontWeight: 'bold',
  },
  value: {
    fontSize: 13,
    color: '#22223b',
  },
});

export default RestaurantCard;