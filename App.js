import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './src/telas/Cadastro';
import Login from './src/telas/Login';

const Stack = createStackNavigator();

export default function App() {
  return (


   
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"> 
        <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="Cadastro" component={Cadastro} /> 
      </Stack.Navigator>
    </NavigationContainer>
  
  

  
  );
}
