import React from 'react';
import {View, StyleSheet,Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';


export const HomeIcon = ({item}) => {
    const {focused, size} = item;
    return (
      <View style={{width: 30, height: 30, marginTop: 0}}>
          <Icon name="home-outline" size={30} color="gray" />
      </View>
    );
  };



  export const Carticon = ({item}) => {
    const {focused, size} = item;
    return (
      <View style={{width: 30, height: 30, marginTop: 0}}>
          <Icon name="bag-outline" size={30} color="gray" />
      </View>
    );
  };


  export const Usericon = ({item}) => {
    const {focused, size} = item;
    return (
      <View style={{width: 30, height: 30, marginTop: 0}}>
          <Icon name="person-circle-outline" size={30} color="gray" />
      </View>
    );
  };
