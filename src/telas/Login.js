import React,{useState} from "react";
import { StyleSheet,Text, TouchableOpacity, View,Button, SafeAreaView, TextInput } from "react-native";
import { Logo } from "../componentes/Logo";


export default function Login ({navigation}) {
 return(
  



    <SafeAreaView style={estilos.container}>
      <Logo/>

      <View>
        <Text style={estilos.texto}>Login</Text>
        <TextInput
        style={estilos.input} 
        placeholder="Digite seu email" 
        backgroundColor='white' 
        />

        <Text>Senha</Text>
        <TextInput
        style={estilos.input} 
        placeholder="Digite a senha" 
        backgroundColor='white' 
        />
        
      </View>

   <TouchableOpacity style={estilos} onPress={() => navigation.navigate('Cadastro')}>
    <Text>BOTAO </Text>
   </TouchableOpacity>

   

   </SafeAreaView>
    
);
}

const estilos = StyleSheet.create ({
    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:20,
    alignContent:'center',
    textAlign: 'center',
  },

  container: {
    backgroundColor: '#FF800B',
    height: '100%',
  },

  texto: {
    fontWeight: 'bold',
    
  },

})


