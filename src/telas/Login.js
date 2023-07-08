import React,{useState} from "react";
import { StyleSheet,Text, TouchableOpacity, View,Button } from "react-native";


export default function Login ({navigation}) {
 return(



    <View>
   <Text>Ola</Text>

   <TouchableOpacity style={estilos.input} onPress={() => navigation.navigate('Cadastro')}>
    <Text>Teste </Text>
   </TouchableOpacity>

   

   </View>
    
);
}

const estilos = StyleSheet.create ({
    input: {
      height: 50,
      margin: 5,
      borderWidth: 1,
      padding: 10,
      borderRadius:20,
      alignContent:'center',
      textAlign: 'center',
      marginTop:'20%'
    },

})


