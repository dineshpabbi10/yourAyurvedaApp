import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    AdMobInterstitial,
  } from 'expo-ads-admob';

export default function About() {
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
      <Text>The sole purpose of this app is to provide information about the tradition of health care and ayurveda. This information is not intended for use in the diagnosis, treatment, cure or prevention of any disease. If you have any serious acute or chronic health concern, please consult a trained health professional who can fully assess your needs and address them effectively. Check with your doctor before taking herbs or using essential oils when pregnant or nursing.</Text>
      <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
