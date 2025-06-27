import React from 'react';
import { View , Text, StyleSheet, Image } from 'react-native';


const SplashScreen = () => {
  return (
    <View style={styles.container}
        resizeMode="contain">
        <Image
            source={require('C:/Users/cruzs/PycharmProjects/PM193/my-app2/src/assets/Imagen 2.jpeg')}
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