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
      mapsLink: 'https://www.google.com.br/maps/place/R.+Bar%C3%A3o+de+Santo+%C3%82ngelo,+451+-+Xaxim,+Curitiba+-+PR,+81810-140',
     
    },
    {
      id: '2',
      nome: 'Urbana',
      localidade: 'Belo Horizonte - MG',
      phoneNumber: '31 99422-4365',
      mapsLink: 'https://www.google.com.br/maps/place/R.+Frei+Concei%C3%A7%C3%A3o+Veloso,+86+-+Alto+dos+Pinheiros,+Belo+Horizonte+-+MG,+30530-300',
   
    },
    {
      id: '3',
      nome: 'Sucesso',
      localidade: 'Foz do Iguaçu - PR',
      phoneNumber: '(45) 99910-3144',
      mapsLink: 'https://www.google.com.br/maps/place/R.+Estanislau+Zambrzycki,+197+-+Centro,+Foz+do+Igua%C3%A7u+-+PR,+85852-200',
      
    },

    {
    id: '4',
    nome: 'Act-Bio',
    localidade: 'Wenceslau Braz - PR',
    phoneNumber: ' (43) 99967-6375',
    mapsLink: 'https://www.google.com.br/maps/place/R.+Irm%C3%A3s+Klosienski,+135,+Wenceslau+Braz+-+PR,+84950-000',
    
    },

    {
    id: '5',
    nome: 'Antinseto',
    localidade: 'Londrina - PR',
    phoneNumber: '43 30291234',
    mapsLink: 'https://www.google.com.br/maps/place/Dedetizadora+Antinseto+Controle+de+Pragas/@-23.3080344,-51.1857275,17z',
    },

    {
      id: '6',
      nome: 'Biotrat',
      localidade: 'Pinhais - PR',
      phoneNumber: '41 9207-4545',
      mapsLink: 'https://www.google.com.br/maps/place/R.+Corb%C3%A9lia,+1475+-+Emiliano+Perneta,+Pinhais+-+PR,+83325-260',

      }
      





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
              <FontAwesome name="phone" size={25} color={'#000000'} onPress={() => openDialPad(item.phoneNumber)} style={{ marginHorizontal: 30, marginVertical: 5 }} />
              <Ionicons name="location" size={25} color={'#000000'} onPress={() => openLink(item.mapsLink)} style={{ marginHorizontal: 30, marginVertical: 5 }} />
            </View>
            <TextInput
              
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
    margin: 15,
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
    alignItems:'center',
    textAlign: 'center',
    justifyContent:'center',
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
    justifyContent:'center',
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
