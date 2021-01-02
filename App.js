import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Treatments from './Components/Treatments';
import About from './Components/About';
import UniverseConnection from './Components/UniverseConnection';
import FiveElements from './Components/FiveElements';
import Dosha from './Components/Dosha'
const Tab = createBottomTabNavigator();

export default function App() {

  var ads = async ()=>{
    try{
      await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ID, Replace with your-admob-unit-id
      await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: false});
      await AdMobInterstitial.showAdAsync();
    }catch{
      console.log("error");
    }
    
  };
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
                justifyContent:'center',
              }
            }
          }
        >
            <Tab.Screen name="Treatments" component={Treatments} />
            <Tab.Screen name="Connection" component={UniverseConnection} />
            <Tab.Screen name="Elements" component={FiveElements} />
            <Tab.Screen name="Dosha" component={Dosha} />
            <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
        <StatusBar hidden={true} />
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
