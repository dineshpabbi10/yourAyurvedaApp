

import {Text,StyleSheet,View,ScrollView,Image} from 'react-native';
import React, { useEffect } from 'react';
import InfoHeader from './InfoHeader';
import BoldText from './BoldText';
import {
    AdMobBanner,
  AdMobInterstitial,
} from 'expo-ads-admob';
import { useLinkProps } from '@react-navigation/native';


export default function Article(props){
  var ads = async ()=>{
    try{
      await AdMobInterstitial.setAdUnitID('ca-app-pub-4805534927096696/5685296127'); // Test ID, Replace with your-admob-unit-id
      await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: false});
      await AdMobInterstitial.showAdAsync();
    }catch{
      console.log("error");
    }
    
  }
  useEffect(()=>{
    ads();
  },[]);

  let errorHandler = ()=>{
      console.log("error");
  }

    return (
        <View style={styles.container}>
          <InfoHeader text={props.heading}/>
          <Image style={{width:'100%',height:200,shadowColor:'black',shadowRadius:70,shadowOffset:{height:70,width:0}}} source={props.imgUrl}/>
          <ScrollView style={styles.infoContainer}>
            <Text style={styles.bigFont}>
              {props.children}
              
            </Text>      
          </ScrollView>
          <AdMobBanner
            bannerSize="banner"
            adUnitID="ca-app-pub-3940256099942544/6300978111"
            servePersonalizedAds // true or false
            onDidFailToReceiveAdWithError={errorHandler} />
          {/* "ca-app-pub-4805534927096696/4723035410" */}
          
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    infoContainer:{
      width:"95%",
    },
    bigFont:{
        
      height:'100%',
      fontFamily:'sans-serif-condensed',
      fontSize:20,
      textAlign:'justify',
      overflow:'scroll',
      backgroundColor:'white',
      borderRadius:5,
      padding:10,
      marginTop:5,
      marginBottom:5,
    }
  });