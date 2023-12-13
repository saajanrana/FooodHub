import React from 'react';
import {View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../screen/StartScreen';
import RegisterScreen from '../screen/RegisterScreen';
import LoginScreen from '../screen/LoginScreen';
import HomeScreen from '../screen/HomeScreen';
import DrawerNavigation from './DrawerNavigation';








const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
   
        <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled:true
          }}
        >
            <Stack.Screen name="Start" component={StartScreen} options={{headerShown:false}} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
            <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown:false}} />
        </Stack.Navigator>
    </NavigationContainer>

    );
}

const styles = StyleSheet.create({})

export default Navigation;
