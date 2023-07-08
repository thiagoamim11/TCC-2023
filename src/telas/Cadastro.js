import React, { useState} from 'react';
import { SafeAreaView, StyleSheet,Text,TextInput,Input,onChangeNumber,onChangeText,number, TouchableOpacity,onPress, View} from 'react-native';
import { Logo } from '../componentes/Logo';
import { StatusBar } from 'expo-status-bar';


const Cadastro = () => {
    return(

    <SafeAreaView style={estilos.container}>

      <Logo/>

      <TextInput
        style={estilos.input}
        placeholder="Nome"
        backgroundColor='white'
        placeholderTextColor="black"
      />
       <TextInput
        style={estilos.input}
        placeholder="E-mail"
        backgroundColor='white'
        placeholderTextColor="black"
      />

      <TextInput
        style={estilos.input}
        placeholder="Celular"
        backgroundColor='white'
        placeholderTextColor="black"
      />

      <TextInput
        style={estilos.input}
        placeholder="Endereço"
        backgroundColor='white'
        placeholderTextColor="black"
      />

      <TextInput
        style={estilos.input}
        value={number}
        keyboardType="numeric"
        placeholder="Senha"
        backgroundColor='white'
        placeholderTextColor="black"
      />

      <TextInput
        style={estilos.input}
        value={number}
        keyboardType="numeric"
        placeholder="Confirmar Senha"
        backgroundColor='white'
        placeholderTextColor="black"
      />

      <SafeAreaView style={estilos.posicao_button}>

      <TouchableOpacity style={estilos.button} onPress={onPress} >
        <Text style={estilos.texto}>Voltar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.button1} onPress={onPress}>
        <Text style={estilos.texto}>Confirmar</Text>
      </TouchableOpacity>
        
      </SafeAreaView>


          
    </SafeAreaView>

);
}

export default Cadastro;

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

  container:{
    backgroundColor:'#FF8C00',
    
  },

  button :{
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderRadius:20,
   
  
  },

  button1 :{
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderRadius:20,
     
    
  },

  texto:{
    color: '#FF8C00',
    
  },

  posicao_button:{
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop:55,
    marginBottom:'20%',
    marginHorizontal:30,
    
   
   
  }

});