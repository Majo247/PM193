import React from 'react';
import { View , Text, StyleSheet, Image } from 'react-native';
import { ImageBackground } from 'react-native-web';

const SplashScreen = () => {
  return (
    <View style={styles.logoo}
        resizeMode="contain">
        <Image
            source={require('C:/Users/cruzs/PycharmProjects/PM193/my-app2/src/assets/Captura de pantalla 2025-06-23 224351.png')}
            style={styles.logo}
            resizeMode="contain"/> 
        <Text style={styles.tittle}>
            Bienvenido a la App
        </Text>
           
    </View>
   
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222831',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    },
    tittle: {
        marginTop: 20,
        color: '#eeeeee',
        fontSize: 24,
        marginTop: 20,
    }
});