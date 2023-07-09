import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button, SafeAreaView, TextInput } from "react-native";
import { Logo } from "../componentes/Logo";


export default function Login({ navigation }) {
  return (




    <SafeAreaView style={estilos.container}>
      <Logo />

      <View>
        <Text style={estilos.texto}>Login*</Text>
        <TextInput
          style={estilos.input}
          placeholder="Digite seu email"
          backgroundColor='white'
        />

        <Text style={estilos.texto}>Senha*</Text>
        <TextInput
          style={estilos.input}
          placeholder="Digite a senha"
          backgroundColor='white'
        />

      </View>

      <View style={estilos.containerBotao}>
        <TouchableOpacity style={estilos} onPress={() => navigation.navigate('Cadastro')}>
          <Text>Logar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos} onPress={() => navigation.navigate('Cadastro')}>
          <Text>Cadastra-se</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>

  );
}

const estilos = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    alignContent: 'center',
    textAlign: 'center',

  },

  container: {
    backgroundColor: '#FF800B',
    height: '100%',
  },

  texto: {
    fontSize: 15,
    paddingLeft: 20,
    marginTop: 15,

  },

  containerBotao: {
    justifyContent: 'space-around',
    flexDirection: 'row-reverse',
    
  },

  botao: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderRadius:20,
  }


})


