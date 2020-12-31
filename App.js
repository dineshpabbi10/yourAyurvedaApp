import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Treatments from './Components/Treatments';
import About from './Components/About';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator 
          tabBarOptions={
            {
              style:styles.bottomTab,
              activeBackgroundColor:'white',
              activeTintColor:'green',
              inactiveTintColor:'white',
              tabStyle:{
                justifyContent:'center'
              }
            }
          }
        >
            <Tab.Screen name="Treatments" component={Treatments} />
            <Tab.Screen name="Introduction" component={Treatments} />
            <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomTab:{
    backgroundColor:'green'
  },
  labelStyle:{
    color:'white'
  },
  activeBackgroundColor:{
    backgroundColor:'white'
  },
  activeLabelStyle:{
    color:'white'
  }
});
