import React from 'react';
import {View, StyleSheet,Image} from 'react-native';


export const HomeIcon = ({item}) => {
    const {focused, size} = item;
    return (
      <View style={{width: 30, height: 30, marginTop: 0}}>
          <Image
            source={require('../assets/homeicon.png')}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />

      </View>
    );
  };



  export const Carticon = ({item}) => {
    const {focused, size} = item;
    return (
      <View style={{width: 30, height: 30, marginTop: 0}}>
          <Image
            source={require('../assets/carticonb.png')}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />

      </View>
    );
  };


  export const Usericon = ({item}) => {
    const {focused, size} = item;
    return (
      <View style={{width: 30, height: 30, marginTop: 0}}>
          <Image
            source={require('../assets/usericon.png')}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />

      </View>
    );
  };
