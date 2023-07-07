import React from "react";
import { StyleSheet, View, Image, SafeAreaView } from "react-native";



export const Logo = () => {
    return(
        <SafeAreaView style={estilos.container}>
            <View>
                <Image source={require('../image/logo.png')}/>
            </View>
        </SafeAreaView>
    )
}


const estilos = StyleSheet.create ({
    container: {
        height: 100,
        width: '100%',
        backgroundColor: '#FF800B',
    }
})