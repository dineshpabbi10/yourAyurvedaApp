import React from 'react';
import {View,Text,StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function Card(props){

    const navigation = props.navigator;

    return(
        <TouchableOpacity onPress={()=>{
            navigation.navigate(props.name);
        }}  style={styles.container}>
            
            <Image style={{flex:1,height:100,borderRadius:10,opacity:0.8}}  source={props.imgUrl} />
                
                    <Text style={styles.headings}>
                        {props.heading}
                    </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    headings:{
    width:'100%',
      color:'white',
      position:'absolute',
      alignSelf:'center',
      zIndex:10,
      opacity:0.9,
      textShadowColor:'black',
      textShadowOffset:{height:5,width:5},
      textShadowRadius:14,
      fontFamily:'sans-serif-condensed',
      fontSize:20,
      fontWeight:'bold',
      textAlign:'center',
    },
    container:{
        width:'44%',
        alignItems:'flex-start',
        flexDirection:'row',
        justifyContent:'flex-start',
        height:100,
        margin:10,
        borderRadius:10,
        backgroundColor:'black'

    }
  });