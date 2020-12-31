import React from 'react';
import {Text,StyleSheet} from 'react-native';


export default function InfoHeader(props){
    return (
          <Text style={styles.headings}>{props.text}</Text>
      );
}

const styles = StyleSheet.create({
    headings:{
      width:'100%',
      color:'white',
      position:'absolute',
      zIndex:10,
      opacity:0.8,
      textShadowColor:'black',
      textShadowOffset:{height:5,width:5},
      textShadowRadius:30,
      fontFamily:'sans-serif-condensed',
      padding:12,
      fontSize:20,
      fontWeight:'bold',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      textAlign:'center'
    }
  });