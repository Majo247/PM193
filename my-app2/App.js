/*Zona 1 : Importaciones*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';//Para omenzar el useState para el estado de los componentes


//componente Propio de Texto
const Texto= ()=>{
  const [contenido, setContenido]=useState('Hola Mundo')
  const actualizaTexto=()=>{setContenido('Estado modificado')}//Para cambiar el hola mundo por otro tecto
  return (
    <Text onPress={actualizaTexto}> {contenido} </Text>
   
  );
}

/*Zona 2 : Main zona de la ejecución*/
export default function App() {
  return (

    <View style={styles.container}>

    
      <Texto ></Texto>
      <Texto ></Texto>
      <Texto ></Texto>
      <Button title = "Presionar"></Button>
      <StatusBar style="auto" />

    </View>
  );
}


/*Zona 3 : Estitos*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
