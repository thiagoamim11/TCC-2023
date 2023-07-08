import React from "react";
import { StyleSheet, View, Image, SafeAreaView,TextInput } from "react-native";

export const Logo = () => {


  return (
    <SafeAreaView style={estilos.container}>
      <View>
     
        <Image style={estilos.logoImage} source={require('../image/logo.png')} />
      </View>
    </SafeAreaView>
  );
};







  


const estilos = StyleSheet.create ({
    container: {
        height: 150,
        width: '100%',
        backgroundColor: '#FF800B',
        marginBottom: 10,
        alignItems: 'center', 
        justifyContent:'center',    
        
    },

   


    logoImage: {
      width: 150, // Ajuste o valor para aumentar ou diminuir a largura da imagem
      height: 100, // Ajuste o valor para aumentar ou diminuir a altura da imagem
      resizeMode: 'contain',
      backgroundColor:'#fff',
      borderRadius: 30,
      borderWidth: 3,
      borderColor: 'black',
    },

    /*
    input:{
      borderRadius:20,
      marginTop:25
    }*/
})


