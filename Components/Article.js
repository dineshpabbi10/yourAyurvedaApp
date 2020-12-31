

import {Text,StyleSheet,View,ScrollView,Image} from 'react-native';
import React, { useEffect } from 'react';
import InfoHeader from './InfoHeader';
import BoldText from './BoldText';
import {
  AdMobInterstitial,
} from 'expo-ads-admob';
import { useLinkProps } from '@react-navigation/native';


export default function Article(props){
  var ads = async ()=>{
    try{
      await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ID, Replace with your-admob-unit-id
      await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: false});
      await AdMobInterstitial.showAdAsync();
    }catch{
      console.log("error");
    }
    
  }
  useEffect(()=>{
    ads();
  },[]);

    return (
        <View style={styles.container}>
          <InfoHeader text={props.heading}/>
          <Image style={{width:'100%',height:200}} source={props.imgUrl}/>
          <ScrollView style={styles.infoContainer}>
            <Text style={styles.bigFont}>
              {props.children}
            </Text>
          </ScrollView>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    infoContainer:{
      width:"90%",
    },
    bigFont:{
      height:'100%',
      fontFamily:'sans-serif-condensed',
      fontSize:20,
      overflow:'scroll'
    }
  });