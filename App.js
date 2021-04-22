/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CoinsStack from './src/components/coins/CoinsStack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottonTabNavigator } from '@react-navigation/bottom-tabs';
import { View,Text,Pressable,StyleSheet} from 'react-native';
import { NativeAppEventEmitter } from 'react-native';
import {MaterialCommunityIcons} from '@react-native-vector-icons/MaterialCommunityIcons';

// Funcion Pantalla de inicio

function HomeScreen(){
  return(
      <View style={{ flex:1 , justifyContent: 'center' , alignItems: 'center', backgroundColor: "blue"}}>
          <Text> Screen de Inicio de code Pineapple</Text>
      </View>
  )

}
// Funcion Pantalla de categorias

function CategoriesScreen(){
  return(
      <View style={{ flex:1 , justifyContent: 'center' , alignItems: 'center', backgroundColor: "yellow"}}>
          <Text> Screen de Categorias de code Pineapple</Text>
      </View>
  )

}
// Funcion Pantalla de Post

function PostScreen(){
  return(
      <View style={{ flex:1 , justifyContent: 'center' , alignItems: 'center', backgroundColor: "gray"}}>
          <Text> Screen de Categorias de code Pineapple</Text>
      </View>
  )

}
const Tab = createBottonTabNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen name="Inicio" component={HomeScreen} 
              options={{ 
                tabBarLabel : 'Home',
                tabBarIcon: ({ color,size }) => (

                  <MaterialCommunityIcons name="Home" color= {'#F32A54'} size ={25} />
              ),
              tabBarBadge: 3
              }}/> 
              <Tab.Screen name="Categories" component={CategoriesScreen} 
              options={{ 
                tabBarLabel : 'Home',
                tabBarIcon: ({ color,size }) => (

                  <MaterialCommunityIcons name="cards-variant" color= {'#F32A54'} size ={25} />
              ),
              tabBarBadge: 3
              }}/>
              <Tab.Screen name="Post" component={PostScreen} 
              options={{ 
                tabBarLabel : 'Home',
                tabBarIcon: ({ color,size }) => (

                  <MaterialCommunityIcons name="bookmark-multiple-outline" color= {'#F32A54'} size ={25} />
              ),
              tabBarBadge: 3
              }}/>       
              <Tab.Screen name="Categorias" component={CategoriesScreen} />
              <Tab.Screen name="Post" component={PostScreen} />
          </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};



export default App;
