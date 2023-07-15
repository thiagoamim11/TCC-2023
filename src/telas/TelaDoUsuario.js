import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, TextInput, View, TouchableOpacity, Text} from "react-native";
import { Logo } from "../componentes/Logo";


export const TelaDoUsuario = ({navigation}) => {
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
                <TextInput
                style={estilos.input2}
                placeholder="Nome da empresa"
                />

                <TextInput
                style={estilos.input2}
                placeholder="Cidade"
                />

                <TextInput
                style={estilos.input2}
                
                />

                <TextInput
                style={estilos.input2}
                
                />

                </View>

                
                <View style={estilos.container2}>
                <TextInput
                style={estilos.input2}
                placeholder="Nome da empresa"
                />

                <TextInput
                style={estilos.input2}
                placeholder="Cidade"
                />

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