import React from 'react';
import { View , Text, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';


const HomeScreen = () => {
  return (
        <ImageBackground
            source={require('C:/Users/cruzs/PycharmProjects/PM193/my-app2/src/assets/Captura de pantalla 2025-06-23 224334.png')}
            style={styles.background}>
                <SafeAreaView style={styles.content}>
                    <Text style={styles.text}>
                        Pantalla Principal
                    </Text>
                </SafeAreaView>
        </ImageBackground>
);
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
    }
});