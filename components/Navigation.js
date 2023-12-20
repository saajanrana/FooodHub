import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartScreen from '../screen/StartScreen';
import RegisterScreen from '../screen/RegisterScreen';
import LoginScreen from '../screen/LoginScreen';
import HomeScreen from '../screen/HomeScreen';
import MyOrderScreen from '../screen/MyOrderScreen';
import MyLocationScreen from '../screen/MyLocationScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeDrawer from './HomeDrawer';
import FoodDetailScreen from '../screen/FoodDetailScreen';
import AddToCartScreen from '../screen/AddToCartScreen';
import MyProfile from '../screen/MyProfile'; 
import EditProfileScreen from '../screen/EditProfileScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  // Drawernavigator
  const Drawer = createDrawerNavigator();
  const HomeScreenDrawer = props => {
    return (
      <Drawer.Navigator drawerContent={props => <HomeDrawer {...props} />}>
        <Drawer.Screen
          name="HomeTabs"
          options={{headerShown: false}}
          component={HomeScreen}
        />
      </Drawer.Navigator>
    );
  };

  //tabStack

  const Tab = createBottomTabNavigator();
  const HomeTabNavigator = props => {
    const screen = props?.route?.params?.screen;

    console.log('screen>>>>', screen);
    return (
      <Tab.Navigator
        initialRouteName={screen || 'HomeScreen'}
        screenOptions={{
          keyboardHidesTabBar: true,
          activeTintColor: '#FF5722',
          inactiveTintColor: '#919191',
          labelStyle: {fontWeight: 'bold', marginBottom: '8%'},
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreenDrawer}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="MyOrder"
          component={MyOrderScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="MyProfile"
          component={MyProfile}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{gestureEnabled: true}} initialRouteName='LoginScreen'>
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeDrawer"
          component={HomeTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="FoodDetail" component={FoodDetailScreen} />
        <Stack.Screen name="AddToCartScreen" component={AddToCartScreen} />
        <Stack.Screen name="MyOrderScreen" component={MyOrderScreen} />
        <Stack.Screen name="MyProfileScreen" component={MyProfile} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Navigation;
