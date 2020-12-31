import {Text,StyleSheet,View,ScrollView,Image} from 'react-native';
import React, { useEffect } from 'react';
import InfoHeader from './InfoHeader';
import {
  AdMobInterstitial,
} from 'expo-ads-admob';
import { useLinkProps } from '@react-navigation/native';


function BoldText(props){
  return(
    <Text style={{fontWeight:'bold'}}>{props.children}</Text>
  );
}


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
          <InfoHeader text={"The Human-Cosmic Connection"}/>
          <Image style={{width:'100%',height:200}} source={require('../assets/Connection.jpg')}/>
          <ScrollView style={styles.infoContainer}>
            <Text style={styles.bigFont}>
              Humans are a creation of cosmic conciousness and can be categorized into two main energy forms : {"\n\n"}
              {'\u2022'} <BoldText>Purusha : </BoldText>This form of energy is related to existence. It does not create but witnesses the creations and happenings.  {'\n\n'}
              {'\u2022'} <BoldText>Prakruti : </BoldText>This energy has a form and has divine creative attributes. Creation of the universe happens when Purusha and Prakruti become one. Hence Prakruti is the Divine Mother. {'\n\n'}
              <BoldText>The Nature</BoldText> {'\n'}
              The manifestation of nature leads to developement of two expressions- Buddhi (Intelligence ) and Ahamkar (Ego). Ego is the sense of self-identity which helps us in acting and reacting. {'\n\n'}
              Ego expresses itself in three qualities : {'\n\n'}
              <BoldText>Sattva:</BoldText>{'\n\n'}Sattva refers to purity and clarity. The mind, the motor organs and the sensing organs are born due to Sattva. {'\n\n'}
              <BoldText>Rajas:</BoldText>{'\n\n'}Rajas relates to dynamic movements. Feeling and emotions are a result of Rajas gun. It is the force behind movement of organs. {'\n\n'}
              <BoldText>Tamas:</BoldText>{'\n\n'}Tamas leads to ignorance,confusion, inertia and heaviness. It also leads to creation of matter. It gives rise to five elements which lay the foundation of material creation. Those elements are space, air, fire, water and earth. {'\n\n'}

              Man is considered as a miniature cosmos ,that is, whatever is present in the universe is also present in human beings.
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