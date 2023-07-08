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



const estilos = StyleSheet.create({
  container: {
    marginBottom: 30 , 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#FF8C00',
  },
  logoImage: {
    width: 200, // Ajuste o valor para aumentar ou diminuir a largura da imagem
    height: 280, // Ajuste o valor para aumentar ou diminuir a altura da imagem
    resizeMode: 'contain',
    backgroundColor:'#FF8C00',
  },


  input:{
    borderRadius:20,
    marginTop:25,
  },
});


