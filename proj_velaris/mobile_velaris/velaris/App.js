import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from './pages/login/index';
import Home from './pages/home/index';
import Perfil from './pages/perfil/index';
import Escreva from './pages/escreva/index';
import DadosLivro from './pages/dadoslivro/index';
import Leitura from './pages/leitura/index';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        {/* <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Perfil" component={Perfil}></Stack.Screen>
        <Stack.Screen name="Escreva" component={Escreva}></Stack.Screen>
        <Stack.Screen name="DadosLivro" component={DadosLivro}></Stack.Screen>
        <Stack.Screen name="Leitura" component={Leitura}></Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}