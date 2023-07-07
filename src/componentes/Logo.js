import React from "react";
import { StyleSheet, View, Image, SafeAreaView } from "react-native";



export const Logo = () => {
    return(
        <SafeAreaView style={estilos.container}>
            <View style={estilos.containerLogo}>
                <Image style={estilos.logo} source={require('../image/logo.png')}/>
            </View>
        </SafeAreaView>
    )
}


const estilos = StyleSheet.create ({
    container: {
        height: 100,
        width: '100%',
        backgroundColor: '#FF800B',
        justifyContent: 'center',
        alignItems: 'center',        
    },

    containerLogo: {
        height: 50,
        width: 100,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },

    logo: {
       
    }
})