import React from "react";
import { StyleSheet, View, Image, SafeAreaView,TextInput } from "react-native";

export const Logo = () => {
<<<<<<< HEAD
  return (
    <SafeAreaView style={estilos.container}>
      <View>
     
        <Image style={estilos.logoImage} source={require('../image/logo.png')} />
      </View>
    </SafeAreaView>
  );
};
=======
    return(
        <SafeAreaView style={estilos.container}>
            <View style={estilos.containerLogo}>
                <Image style={estilos.logo} source={require('../image/logo.png')}/>
            </View>
        </SafeAreaView>
    )
}
>>>>>>> 10375d3418be88838883f7af92e481673da99848

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

<<<<<<< HEAD
  input:{
    borderRadius:20,
    marginTop:25
  }
});
=======
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
>>>>>>> 10375d3418be88838883f7af92e481673da99848
