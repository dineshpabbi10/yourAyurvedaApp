import React from 'react';
import Article from './Article';
import BoldText from './BoldText';
import {View,StyleSheet,Text} from 'react-native';
import CardTemplate from './CardTemplate'
import Card from './Card';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Dosha from './Dosha';
import FiveElements from './FiveElements';
import UniverseConnection from './UniverseConnection';

export default function CardContainer(props){
    const Stack = createStackNavigator()
    return(
    <Stack.Navigator>
        <Stack.Screen 
            options={{
            headerTransparent:true,
            title:'Read About Ayurveda',
            headerTitleAlign:'center',
            headerTitleStyle:{color:'white',fontFamily:'sans-serif-condensed',fontSize:25,fontWeight:'bold',textShadowColor:'black',
            textShadowOffset:{height:5,width:5},
            textShadowRadius:7,},
            headerTintColor:'white'
            }} 
            name='Home' 
            component={CardContainerComponent} 
        />

    <Stack.Screen options={{
           headerTransparent:true,
           title:'The Three Doshas in Ayurveda',
           headerTitleAlign:"left",
           headerTitleStyle:styles.headerStyle,
           headerTintColor:'white'
        }} name='Dosha' component={Dosha} />
    
    <Stack.Screen options={{
           headerTransparent:true,
           title:"The Five Elements of Nature",
           headerTitleAlign:'Left',
            headerTitleStyle:styles.headerStyle,
           headerTintColor:'white'
        }} name='FiveElements' component={FiveElements} />

    <Stack.Screen options={{
           headerTransparent:true,
           title:'The Human-Cosmic Connection',
           headerTitleAlign:'Left',
           headerTitleStyle:styles.headerStyle,
           headerTintColor:'white'
        }} name='UniverseConnection' component={UniverseConnection} />
    </Stack.Navigator>
    )
}

function CardContainerComponent(props){
    const {navigation} = props;
    return (
      <CardTemplate heading={""} imgUrl={require('../assets/CardContainer.jpg')}>
          <View style={styles.cardContainer}>
                <Card name="UniverseConnection" navigator = {navigation} heading={"The Human-Cosmic Connection"} imgUrl={require("../assets/Connection.jpg")} />
                <Card name="FiveElements" navigator = {navigation} heading={"The Five Elements of Nature"} imgUrl={require("../assets/fiveElements.jpg")} />
                <Card name="Dosha" navigator = {navigation} heading={"The Three Doshas in Ayurveda"} imgUrl={require('../assets/Dosha.jpg')} />
                
          </View> 
      </CardTemplate>
    );
}

const styles = StyleSheet.create({
    cardContainer:{
        marginTop:210,
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap'
    }
    ,
    headerStyle:{color:'white',fontFamily:'sans-serif-condensed',fontSize:18,fontWeight:'bold',textShadowColor:'black',
    textShadowOffset:{height:0,width:2},textShadowRadius:5},

  });