/*Zona de importaciones */
import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';

import { View, TextInput,Text, StyleSheet, ScrollView, Button } from 'react-native';




/*Zona de ejecucion */
export default function App() {
   const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
}
const isValidPhone = (phone) => {
      const phoneRegex = /^\d{10}$/; 
  };
  const AlertaBasica = () => {
    window.alert('Hola, soy una alerta básica')
  }
  const AlertaConfirmacion = () => {
    const Confirmacion = window.confirm('Gus es Gustambo');

    if(Confirmacion){
      window.alert('Exactamente');
    }else{
      window.alert('Como que no!');
    }
    
    
}
const AlertaTexto = () => {
    const Confirmacion = window.prompt('Erik esta aqui?', 'ñero');

    if(Confirmacion){
      window.alert(`Exactamente, ${Confirmacion}`);
    }else{
      window.alert(`Exactamente, no dijiste nada`);
    }

    
  }
  const AlertaEdad = () => {
    const Confirmacion = window.prompt('Qué edad tienes?');
    const numero = parseInt(Confirmacion);

    if(numero >= 1 && numero <= 70){
      window.alert(`Tu edad es, ${numero}`);
    }else{
      window.alert(`Edad incorreta, como fallas esto?`);
    }
  }
  const AlertaRedireccion = () => {
    if (window.confirm('¿Quieres ir a Google?')) {
      window.location.href = 'https://www.google.com';
    }
  };
  return (
    
    <View style={styles.container}>
    <Text style={styles.title}>Correo:</Text>
    <TextInput style={styles.input }>
      
    </TextInput>
    <Button title='Alerta basica' onPress={AlertaBasica}></Button>
    <Button title='Alerta confirmacion' onPress={AlertaConfirmacion}></Button>
      <Button title='Alerta Erik' onPress={AlertaTexto}></Button>
      <Button title='Alerta Edad' onPress={AlertaEdad}></Button>
      <Button title='Alerta Redireccion' onPress={AlertaRedireccion}></Button>
    </View>

  );
}




/*Zona de Estilos */
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,
  } 
});
