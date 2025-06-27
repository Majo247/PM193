
import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, TextInput, Switch, Button, Alert } from 'react-native';

const validarCorreo = (correo) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
const validarNombre = (nombre) => /^[a-zA-Z\s]+$/.test(nombre);

const HomeScreen = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const handleRegistro = () => {
    if (!nombre.trim() || !correo.trim()) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }
    if (!validarNombre(nombre)) {
      Alert.alert('Error', 'El nombre solo debe contener letras y espacios.');
      return;
    }
    if (!validarCorreo(correo)) {
      Alert.alert('Error', 'Por favor, ingresa un correo electrónico válido.');
      return;
    }
    if (!aceptaTerminos) {
      Alert.alert('Error', 'Debes aceptar los términos y condiciones.');
      return;
    }
    Alert.alert('Registro exitoso', `Nombre: ${nombre}\nCorreo: ${correo}`);
  };

  return (
    <ImageBackground
      source={require('C:/Users/cruzs/PycharmProjects/PM193/my-appBlanck3/src/assets/Auroras3.jpg')}
      style={styles.background}>
      <SafeAreaView style={styles.content}>
        <Text style={styles.text}>Registro de Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          placeholderTextColor="#ccc"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#ccc"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View style={styles.switchContainer}>
          <Switch
            value={aceptaTerminos}
            onValueChange={setAceptaTerminos}
          />
          <Text style={styles.switchText}>Acepto términos y condiciones</Text>
        </View>
        <Button title="Registrarse" onPress={handleRegistro} />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  input: {
    width: 280,
    height: 45,
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
});