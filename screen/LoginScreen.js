import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          width: '100%',
          height: 150,
        }}></View>
      <View style={{marginLeft: 50, marginTop: 20}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Log In</Text>
      </View>

      <View>
        <View style={{marginTop: 25, marginLeft: 30}}>
          <Text style={{marginLeft: 15}}>Email</Text>
          <TextInput
            style={{
              borderWidth: 2,
              borderColor: '#B3B3B3',
              width: '90%',
              height: 70,
              marginTop: 10,
              fontSize: 25,
              borderRadius: 20,
              paddingLeft: 20,
            }}
          />
        </View>
        <View style={{marginTop: 25, marginLeft: 30}}>
          <Text style={{marginLeft: 15}}>Password</Text>
          <TextInput
            style={{
              borderWidth: 2,
              borderColor: '#B3B3B3',
              width: '90%',
              height: 70,
              marginTop: 10,
              fontSize: 25,
              borderRadius: 20,
              paddingLeft: 20,
            }}
          />
        </View>
        <View style={{marginLeft: '30%', marginTop: 15}}>
          <TouchableOpacity>
            <Text style={{color: '#FE724C', fontSize: 15}}>
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 20, marginLeft: '15%'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FE724C',
              width: '80%',
              height: 60,
              borderRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }} onPress={()=>{ navigation.navigate('HomeScreen')}} >
            <Text style={{color: 'white'}}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginLeft: '19%', flexDirection: 'row',marginTop:20}}>
        <Text style={{color: 'black', fontSize: 15}}>
          Already have an account
        </Text>
        <TouchableOpacity
          style={{marginLeft: 12}}
          onPress={()=>{navigation.navigate('Register')}}
          >
          <Text style={{color: '#FE724C', fontSize: 15}}>Sign In</Text>
        </TouchableOpacity>
      </View>
      </View>

      <View>
      <View style={{marginTop:10, marginLeft: '5%', flexDirection: 'row'}}>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 2,
            width: '30%',
            marginBottom: 8,
          }}></View>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              marginLeft: 14,
              marginRight: 10,
              justifyContent: 'space-between',
            }}>
            sign in with
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 2,
            width: '30%',
            marginBottom: 8,
          }}></View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: '40%',
            height: 60,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'black'}}>facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: '40%',
            height: 60,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'black'}}>Google</Text>
        </TouchableOpacity>
      </View>    
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
