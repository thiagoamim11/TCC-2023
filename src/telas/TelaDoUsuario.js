import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, TextInput, View, TouchableOpacity, Text,Linking} from "react-native";
import { Logo } from "../componentes/Logo";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';





export const TelaDoUsuario = ({navigation}) => {
    const phoneNumber1 = '32 98875-5200';
    const phoneNumber2 = '31 99422-4365';
    const phoneNumber3 = '00 00000-0000';


    const openDialPad1 = () => {
    Linking.openURL(`tel:${phoneNumber1}`);
    };

    const openDialPad2 = () => {
    Linking.openURL(`tel:${phoneNumber2}`); 
    };

    const openDialPad3 = () => {
    Linking.openURL(`tel:${phoneNumber3}`); 
    };

    const Data = {

        id : '1',
        nome : 'Confiança',
        localidade :'Curitiba - PR',

        id : '2',
        nome1 :'Urbana',
        localidade1 :'Belo Horizonte',

        id : '3',
        nome2 :'VAZIO',
        localidade2 :'VAZIO'
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
                <FontAwesome name="phone" size={25} color={'#000000'} onPress={openDialPad1} style={{ marginHorizontal: 20, marginVertical:5 }}/>
                <FontAwesome name="facebook" size={25} color={'#000000'} onPress={() => Linking.openURL('https://www.example.com')} style={{ marginHorizontal: 20, marginVertical:5 }}/>
                <Ionicons name="location" size={25} color={'#000000'}  onPress={() => Linking.openURL('https://www.google.com.br/maps/place/R.+Bar%C3%A3o+de+Santo+%C3%82ngelo,+451+-+Xaxim,+Curitiba+-+PR,+81810-140/@-25.5098228,-49.2832227,17z/data=!3m1!4b1!4m6!3m5!1s0x94dcfb5e5ecd69f7:0x16df3eb165b80bab!8m2!3d-25.5098277!4d-49.2806478!16s%2Fg%2F11v0_53h_b?entry=ttu')} style={{ marginHorizontal: 20, marginVertical:5 }}/>
                <FontAwesome name="instagram" size={25} color={'#000000'} onPress={() => Linking.openURL('https://www.example.com')} style={{ marginHorizontal: 20, marginVertical:5 }}/>  
               </View>
            
               <TextInput
                style={estilos.input2}
                
                />

                </View>

                
                <View style={estilos.container2}>
                
                <Text style={estilos.input2}>{Data.nome1}</Text>
                <Text style={estilos.input2}>{Data.localidade1}</Text>

                
               <View style={estilos.container_button}>
                <FontAwesome name="phone" size={25} color={'#000000'} onPress={openDialPad2} style={{ marginHorizontal: 20, marginVertical:5 }}/>
                <FontAwesome name="facebook" size={25} color={'#000000'} onPress={() => Linking.openURL('https://www.example.com')} style={{ marginHorizontal: 20, marginVertical:5 }}/>
                <Ionicons name="location" size={25} color={'#000000'}  onPress={() => Linking.openURL('https://www.google.com.br/maps/place/R.+Frei+Concei%C3%A7%C3%A3o+Veloso,+86+-+Alto+dos+Pinheiros,+Belo+Horizonte+-+MG,+30530-300/@-19.9301122,-43.9994699,17z/data=!3m1!4b1!4m6!3m5!1s0xa696f5f63a654b:0x29fd2fbe1814f33e!8m2!3d-19.9301173!4d-43.996895!16s%2Fg%2F11c218_hqp?entry=ttu')} style={{ marginHorizontal: 20, marginVertical:5 }}/>
                <FontAwesome name="instagram" size={25} color={'#000000'} onPress={() => Linking.openURL('https://www.example.com')} style={{ marginHorizontal: 20, marginVertical:5 }}/>  
                </View> 

               

                <TextInput
                style={estilos.input2}
                
                />

                </View>

                <View style={estilos.container2}>

                <Text style={estilos.input2}>{Data.nome2}</Text>
                <Text style={estilos.input2}>{Data.localidade2}</Text>

                <View style={estilos.container_button}>
                <FontAwesome name="phone" size={25} color={'#000000'} onPress={openDialPad3} style={{ marginHorizontal: 20, marginVertical:5 }}/>
                <FontAwesome name="facebook" size={25} color={'#000000'} onPress={() => Linking.openURL('https://www.example.com')} style={{ marginHorizontal: 20, marginVertical:5 }}/>
                <Ionicons name="location" size={25} color={'#000000'}  onPress={() => Linking.openURL('https://www.example.com')} style={{ marginHorizontal: 20, marginVertical:5 }}/>
                <FontAwesome name="instagram" size={25} color={'#000000'} onPress={() => Linking.openURL('https://www.example.com')} style={{ marginHorizontal: 20, marginVertical:5 }}/>  
                </View> 

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