

import {Text,StyleSheet,View,ScrollView,ImageBackground,Animated} from 'react-native';
import React, { useEffect,useState } from 'react';
import InfoHeader from './InfoHeader';
import BoldText from './BoldText';
import {
    AdMobBanner,
  AdMobInterstitial,
} from 'expo-ads-admob';


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

  const a = useState(new Animated.Value(0))[0];
  const h = a.interpolate({
      inputRange:[0,140],
      outputRange:[0,-140],
      extrapolate:'clamp'
  })

  const sc = a.interpolate({
    inputRange:[0,140],
    outputRange:[1,0.7],
    extrapolate:'clamp'
  })

  const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);

    return (
        <View style={styles.container}>

          {/* Collapsible Header */}
          <Animated.View style={{position:'absolute',zIndex:999,height:200,transform:[
                {translateY:h}
            ],width:'100%',backgroundColor:'black'}}> 
                <AnimatedImageBackground resizeMode="cover" blurRadius={sc} style={{opacity:sc,display:'flex',alignItems:'flex-end',justifyContent:'flex-end',height:200,shadowColor:'black',shadowRadius:70,shadowOffset:{height:70,width:0}}} source={props.imgUrl}>
                    <InfoHeader text={props.heading}/>
                </AnimatedImageBackground>
          </Animated.View>

          {/* ScrollView */}
          <Animated.ScrollView 

          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: a}}}
           ],
           {useNativeDriver:true}
           )
          }
          
          style={styles.infoContainer}>
            <Text style={styles.bigFont}>
              {props.children}
              
            </Text>      
          </Animated.ScrollView>
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
      paddingTop:200
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