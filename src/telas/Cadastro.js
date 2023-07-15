import React, { useState} from 'react';
import { SafeAreaView, StyleSheet,Text,TextInput,Input,onChangeNumber,onChangeText,number, TouchableOpacity,onPress, View} from 'react-native';
import { Logo } from '../componentes/Logo';
import { StatusBar } from 'expo-status-bar';


export default function Cadastro ({navigation}) {
    return(

    <SafeAreaView style={estilos.container}>

      <Logo/>

      <TextInput
        style={estilos.input}
        placeholder="Nome"
        backgroundColor='white'
      />
       <TextInput
        style={estilos.input}
        placeholder="email"
        backgroundColor='white'
      />

      <TextInput
        style={estilos.input}
        placeholder="Celular"
        backgroundColor='white'
      />

      <TextInput
        style={estilos.input}
        placeholder="Endereço"
        backgroundColor='white'
      />

      <TextInput
        style={estilos.input}
        value={number}
        keyboardType="numeric"
        placeholder="Senha"
        backgroundColor='white'
      />

      <TextInput
        style={estilos.input}
        value={number}
        keyboardType="numeric"
        placeholder="Confirmar Senha"
        backgroundColor='white'
      />

      <SafeAreaView style={estilos.posicao_button}>

      <TouchableOpacity style={estilos.button} onPress={() => navigation.navigate('Login')}  >
        <Text style={estilos.texto}>Voltar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.button1} onPress={() => navigation.navigate('Login')}>
        <Text style={estilos.texto}>Confirmar</Text>
      </TouchableOpacity>
        
      </SafeAreaView>


          
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

  container:{
    backgroundColor:'#FF800B',
    
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
    marginTop:'15%',
    marginBottom:'80%',
    marginHorizontal:30,
    
   
   
  }

});