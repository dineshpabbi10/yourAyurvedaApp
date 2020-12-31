import {Text,StyleSheet,View,ScrollView,Image} from 'react-native';
import React, { useEffect } from 'react';
import InfoHeader from './InfoHeader';
import {
  AdMobInterstitial,
} from 'expo-ads-admob';

export default function UniverseConnection(){
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
          <InfoHeader text={"The Human Connection"}/>
          <Image style={{width:'100%',height:200}} source={require('../assets/Connection.jpg')}/>
          <ScrollView style={styles.infoContainer}>
            <Text style={styles.bigFont}>
              Humans are a creation of cosmic conciousness and can be categorized into two main energy forms : {"\n"}
              {'\u2022'}
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
      textAlign:'justify',
      fontFamily:'sans-serif-condensed',
      fontSize:20,
      overflow:'scroll'
    }
  });