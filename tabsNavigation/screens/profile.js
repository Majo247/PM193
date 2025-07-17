import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil usuario</Text>

      <Pressable style={[styles.button, styles.buttonDetails]} onPress={() => navigation.navigate('Detalle')}>
        <Text style={styles.buttonText}>Detalles de Usuario</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'green',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDetails: {
    backgroundColor: '#007BFF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
