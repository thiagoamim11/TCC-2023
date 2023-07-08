import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Logo } from './src/componentes/Logo';
import Cadastro from './src/telas/Cadastro';
//import Login from './src/telas/Login';

export default function App() {
  return (
    <View>
    
   {/*
      <Login/>

  */}
      
      <Cadastro/>
      
    </View>
  );
}



