import React from 'react';
import {ImageBackground, View, Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';


const StartScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.BackImg}
      source={require('../assets/startscreen1.jpg')}>
      <View style={{marginTop: '40%', marginLeft: '10%'}}>
        <View>
          <Text style={{color: 'black', fontSize: 50}}>Welcome to</Text>
        </View>
        <View>
          <Text style={{color: '#FE724C', fontSize: 35}}>FoodHub</Text>
        </View>
        <View>
          <Text style={{color: 'black', fontSize: 17}}>
            Your favourite foods delivered fast at your door.
          </Text>
        </View>
      </View>

      <View style={{marginTop: '25%', marginLeft: '5%', flexDirection: 'row'}}>
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
              marginLeft: 10,
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

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 30,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderColor: 'white',
            borderWidth: 2,
            width: '95%',
            height: 60,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>Start with email or phone</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginLeft: '10%', marginTop: '10%', flexDirection: 'row'}}>
        <Text style={{color: 'black', fontSize: 15}}>
          Already have an account?
        </Text>
        <TouchableOpacity
          style={{marginLeft: 10}}
          onPress={()=>{
             console.log('click');
             navigation.navigate('Register')}}>
          <Text style={{color: 'black', fontSize: 15}}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  BackImg: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default StartScreen;
