/*Zona 1 : Importaciones*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';//Para omenzar el useState para el estado de los componentes


//componente Propio de Texto
const Texto= ({style})=>{
  const [contenido, setContenido]=useState('Hola Mundo')//Para cambiar el texto del boton al presionar
  const actualizaTexto=()=>{setContenido('Estado modificado')}//Para cambiar el hola mundo por otro tecto
  
  return (
    <Text style={[styles.text,style]} onPress={actualizaTexto}> {contenido} </Text>// est aparte la modificamos para 
    
   
  );
}

/*Zona 2 : Main zona de la ejecución*/
export default function App() {
  const [botonContenido, setBotonTexto]=useState('Presionar')
  const cambiarTextoBoton=()=>{setBotonTexto('Presionado')} 
  return (

    <View style={styles.container}>

      
      <Texto style={styles.azul}></Texto>
      <Texto style={styles.verde}></Texto>
      <Texto style={styles.negro}></Texto>
      
      <StatusBar style="auto" />

    </View>
  );
}


/*Zona 3 : Estitos*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'strech',
    justifyContent: 'center',
    
  },
  text: {
    color: 'white',
    fontSize: 27,
   
  },
  azul: {backgroundColor: 'blue'},
  verde: {backgroundColor: 'green'},
  negro: {backgroundColor: 'black'},
});
