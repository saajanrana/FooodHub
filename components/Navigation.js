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
import { useSelector } from 'react-redux';
import ViewScreen from '../screen/ViewScreen';
import SplashScreen from '../screen/SplashScreen';
import { Carticon, HomeIcon, Usericon } from './AppIcons';
import AllItemScreen from '../screen/AllItemScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {

  const canbeinhome =useSelector(state => state.auth.canbeinhome);
  console.log("in navaigation",canbeinhome);
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
    return (
      <Tab.Navigator
        initialRouteName={'HomeScreen'}
        screenOptions={{
    
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreenDrawer}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: item => <HomeIcon item={item} />,
          }}
        />
        <Tab.Screen
          name="MyOrder"
          component={MyOrderScreen}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: item => <Carticon item={item} />,
          }}
        />
        <Tab.Screen
          name="MyProfile"
          component={MyProfile}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: item => <Usericon item={item} />,
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{gestureEnabled: true}} initialRouteName={SplashScreen}>
        <Stack.Screen 
         name='Splash'
         component={SplashScreen}
         options={{headerShown:false}}
        />
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
        <Stack.Screen name="ViewScreen" component={ViewScreen} options={{headerShown: false}} />
        <Stack.Screen name="AllItemScreen" component={AllItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Navigation;
