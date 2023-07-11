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
        <TouchableOpacity style={estilos.botaoLogin} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={estilos.texto1}>ENTRAR</Text>
        </TouchableOpacity>

      <View style={estilos.botaoCadastrar}>
        <Text>Não tem uma conta? </Text>
        <TouchableOpacity style={estilos} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={estilos.texto2}>Cadastra-se</Text>
        </TouchableOpacity>
        </View>
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

  texto1: {
    fontSize: 18,
    color: '#FF800B',
    textAlign: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
  },  

  texto2: {
    fontWeight: 'bold',
    color: '#0864be',
  },

  containerBotao: {
    alignItems: 'center',
    flexDirection: 'column',
    
  },

  botao: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderRadius:20,
  },

  botaoLogin: {
    width: '90%',
    backgroundColor: 'black',
    borderWidth:  2,
    fontSize: 15,
    border: 1,
    marginTop: 15,
    justifyContent: 'center',
    height: 40,
   },

  botaoCadastrar: {
    flexDirection: 'row',
    paddingTop: 5,
  },

})


