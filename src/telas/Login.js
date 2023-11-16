import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button, SafeAreaView, TextInput } from "react-native";
import { Logo } from "../componentes/Logo";


const Login = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = () => {
    // Verificação fake de email e senha
    const emailFake = 'Admin';
    const senhaFake = '12345';

    if (email === emailFake && senha === senhaFake) {
      // Login bem-sucedido, redireciona para a tela do usuário
      navigation.navigate('TelaDoUsuario');
    } else if (email !== emailFake) {
      // Exiba uma mensagem de erro ou realize outra ação adequada
      setErro('Email não cadastrado');
    }else {
      setErro('Senha incorreta');
    }

  };

  return (

    <SafeAreaView style={estilos.container}>
      <Logo />

      <View>
        <Text style={estilos.texto}>Login*</Text>
        <TextInput
          style={estilos.input}
          placeholder="Digite seu email"
          backgroundColor='white'
          value={email}
          onChangeText={setEmail}
        />

        <Text style={estilos.texto}>Senha*</Text>
        <TextInput
          style={estilos.input}
          placeholder="Digite a senha"
          backgroundColor='white'
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />

      </View>


      {erro && (
        <View style={estilos.containerErro}>
          <Text style={estilos.textoErro}>{erro}</Text>
        </View>
      )}


      <View style={estilos.containerBotao}>
        <TouchableOpacity style={estilos.botaoLogin} onPress={handleLogin}>
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
    textDecorationLine: 'underline',
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

  containerErro: {
    alignItems: 'center',
    marginTop: 10,
  },
  textoErro: {
    color: 'red',
  },

 
})
export default Login;


