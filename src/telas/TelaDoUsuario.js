import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, TextInput, View, TouchableOpacity, Text,Linking} from "react-native";
import { Logo } from "../componentes/Logo";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';





export const TelaDoUsuario = ({navigation}) => {
    const phoneNumber1 = '43-99280-8488';
    const phoneNumber2 = '43-9987-8212';

    const openDialPad1 = () => {
    Linking.openURL(`tel:${phoneNumber1}`);
    };

    const openDialPad2 = () => {
    Linking.openURL(`tel:${phoneNumber2}`); 
    };

    const Data = {
        id : '1',
        nome : 'Confiança',
        localidade :'Curitiba - PR',

        id : '2',
        nome1 :'Serviço Feito',
        localidade1 :'Belo Horizonte'
    }


    return(
        
        
        <ScrollView style={estilos.gambiarra}>

            <Logo/>
            <SafeAreaView style={estilos.container}>
                <View style={estilos.containerInput}>
                <TextInput 
                style={estilos.input}
                placeholder="Digite o que busca"
                />
                </View>

                <View style={estilos.container2}>
                <Text style={estilos.input}>{Data.nome} </Text>
                <Text style={estilos.input}>{Data.localidade}</Text>  

               <View style={estilos.container_button}>
               <FontAwesome name="phone" size={25} color={'#000000'} onPress={openDialPad2} style={{ marginHorizontal: 20, marginVertical:5 }}/>
               <FontAwesome name="facebook" size={25} color={'#000000'} onPress={() => Linking.openURL('https://www.example.com')} style={{ marginHorizontal: 20, marginVertical:5 }}/>
               <Ionicons name="location" size={25} color={'#000000'}  onPress={() => Linking.openURL('https://www.google.com/maps/place//data=!4m2!3m1!1s0x94dcfbac4e0a5631:0xeb19541f87038e0c')} style={{ marginHorizontal: 20, marginVertical:5 }}/>
               <FontAwesome name="instagram" size={25} color={'#000000'} onPress={() => Linking.openURL('https://www.example.com')} style={{ marginHorizontal: 20, marginVertical:5 }}/>  

                </View>
               

                <TextInput
                style={estilos.input2}
                
                />

                </View>

                
                <View style={estilos.container2}>
                
                <Text style={estilos.input2}>{Data.nome1}</Text>
                <Text style={estilos.input2}>{Data.localidade1}</Text>

                
                

                <TextInput
                style={estilos.input2}
                
                />

                <TextInput
                style={estilos.input2}
                
                />

                </View>

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
        flexDirection:'row',
    
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
        width: '100%',
        paddingLeft: 40,
        paddingRight: 40,      
       
      },

   

    

    
    
});