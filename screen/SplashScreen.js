import React, { useEffect, useState } from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {beinhome, loginUser, usertoken} from '../context/AuthSlice';
import { useDispatch } from 'react-redux';

const SplashScreen = ({navigation}) => {
    const dispatch = useDispatch();
    useEffect(()=>{
         console.log('slash screen render>>>>>>>');
        const refer = async () => {
            const newasy = await AsyncStorage.getItem('isLoggedIn');
            const token =  await AsyncStorage.getItem('token');
            // console.log('newassync>>>>', newasy);
            // console.log('token>>>>>',token);
            if (newasy === 'true') {
              dispatch(beinhome(newasy));
              dispatch(usertoken(token));
             setTimeout(() => {
                navigation.replace('HomeDrawer');
             }, 2000);
            } 
            else{
                setTimeout(() => {
                    // navigation.replace('LoginScreen');
                    navigation.replace('LoadingScreen');
                }, 2000);
                
            }
          };
    
          refer();

    },[])
    return (
        <ImageBackground source={require('../assets/SplashScreen.jpg')} style={{flex:1}}>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({})

export default SplashScreen;
