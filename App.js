import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Treatments from './Components/Treatments';
import About from './Components/About';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Container style={{
        marginTop:23
      }}>
        <Header style={{
            backgroundColor:'green'
        }} searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
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
