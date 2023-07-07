import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Logo } from './src/componentes/Logo';

export default function App() {
  return (
    <View>
      <Logo/>
      <Text>Ola mundo</Text>
      <StatusBar hidden={true}/>
    </View>
  );
}



