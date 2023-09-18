import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, TextInput, View, TouchableOpacity, Text, Linking } from "react-native";
import { Logo } from "../componentes/Logo";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

export const TelaDoUsuario = ({ navigation }) => {
  const [searchText, setSearchText] = useState(""); // Estado para o texto de pesquisa

  const data = [
    {
      id: '1',
      nome: 'Confiança',
      localidade: 'Curitiba - PR',
      phoneNumber: '32 98875-5200',
      facebookLink: 'https://www.example.com',
      mapsLink: 'https://www.google.com.br/maps/place/R.+Bar%C3%A3o+de+Santo+%C3%82ngelo,+451+-+Xaxim,+Curitiba+-+PR,+81810-140',
      instagramLink: 'https://www.example.com',
    },
    {
      id: '2',
      nome: 'Urbana',
      localidade: 'Belo Horizonte',
      phoneNumber: '31 99422-4365',
      facebookLink: 'https://www.example.com',
      mapsLink: 'https://www.google.com.br/maps/place/R.+Frei+Concei%C3%A7%C3%A3o+Veloso,+86+-+Alto+dos+Pinheiros,+Belo+Horizonte+-+MG,+30530-300',
      instagramLink: 'https://www.example.com',
    },
    {
      id: '3',
      nome: 'VAZIO',
      localidade: 'VAZIO',
      phoneNumber: '00 00000-0000',
      facebookLink: 'https://www.example.com',
      mapsLink: 'https://www.example.com',
      instagramLink: 'https://www.example.com',
    },

    {
    id: '4',
    nome: 'Exemplo',
    localidade: 'Curitiba - PR',
    phoneNumber: '32 98875-5200',
    facebookLink: 'https://www.example.com',
    mapsLink: 'https://www.google.com.br/maps/place/R.+Bar%C3%A3o+de+Santo+%C3%82ngelo,+451+-+Xaxim,+Curitiba+-+PR,+81810-140',
    instagramLink: 'https://www.example.com',
    },


  ];

  // Função de pesquisa
  const filteredData = data.filter(item =>
    item.nome.toLowerCase().includes(searchText.toLowerCase()) ||
    item.localidade.toLowerCase().includes(searchText.toLowerCase())
  );

  // Função para abrir o discador de telefone
  const openDialPad = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  // Função para abrir o link
  const openLink = (link) => {
    Linking.openURL(link);
  };

  return (
    <ScrollView style={estilos.gambiarra}>
      <Logo />

      <SafeAreaView style={estilos.container}>
        <View style={estilos.containerInput}>
          <TextInput
            style={estilos.input}
            placeholder="Digite o que busca"
            value={searchText} // Valor do input controlado pelo estado
            onChangeText={text => setSearchText(text)} // Atualiza o estado com o texto de pesquisa
          />
        </View>

        {filteredData.map(item => (
          <View key={item.id} style={estilos.container2}>
            <Text style={estilos.input2}>{item.nome}</Text>
            <Text style={estilos.input2}>{item.localidade}</Text>
            <View style={estilos.container_button}>
              <FontAwesome name="phone" size={25} color={'#000000'} onPress={() => openDialPad(item.phoneNumber)} style={{ marginHorizontal: 20, marginVertical: 5 }} />
              <FontAwesome name="facebook" size={25} color={'#000000'} onPress={() => openLink(item.facebookLink)} style={{ marginHorizontal: 20, marginVertical: 5 }} />
              <Ionicons name="location" size={25} color={'#000000'} onPress={() => openLink(item.mapsLink)} style={{ marginHorizontal: 20, marginVertical: 5 }} />
              <FontAwesome name="instagram" size={25} color={'#000000'} onPress={() => openLink(item.instagramLink)} style={{ marginHorizontal: 20, marginVertical: 5 }} />
            </View>
            <TextInput
              style={estilos.input2}
            />
          </View>
        ))}

        <View style={estilos.posicao_button}>
          <TouchableOpacity style={estilos.button} onPress={() => navigation.navigate('Login')}  >
            <Text style={estilos.texto}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.button1} onPress={() => navigation.navigate('Login')}>
            <Text style={estilos.texto}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    alignContent: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
    width: 250,
    borderWidth: 3,
  },

  input2: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    alignContent: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
    width: '80%',
    borderWidth: 3,
  },

  container_button: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
    alignContent: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
    width: '80%',
    borderWidth: 3,
    flexDirection: 'row',
  },

  gambiarra: {
    backgroundColor: '#FF800B',
  },

  containerInput: {
    alignItems: 'center',
    marginTop: -15,
  },

  container: {
    alignItems: 'center',
  },

  container2: {
    borderWidth: 3,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },

  button: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 20,
  },

  button1: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 20,
  },

  texto: {
    color: '#FF8C00',
  },

  posicao_button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 40,
    paddingRight: 40,
  },
});
