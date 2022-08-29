import React,{useState,useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList,Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Rotas from './src/rotas'

export default function App() {


  return (

   
<NavigationContainer>

<Rotas></Rotas>

</NavigationContainer>



    
  );
}

