import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';

const MyProfile = (props,{naivgation}) => {
  return (
    <ScrollView>
      <View style={{alignItems: 'center'}}>
        <View>
          <Image source={require('../assets/profileiconhd.png')} />
        </View>
        <View>
          <Text style={{color: '#000', fontSize: 20, fontWeight: '600'}}>
            Eljad Eendaz
          </Text>
          <TouchableOpacity onPress={()=> props.navigation.navigate('EditProfileScreen')}>
            <Text
              style={{fontSize: 14, fontWeight: '400', textAlign: 'center'}}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Full name</Text>
          <TextInput style={styles.input} placeholder='Eljad Eendaz' />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>E-mail</Text>
          <TextInput style={styles.input} placeholder='Eljad@gmail.com' />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Phone Number</Text>
          <TextInput style={styles.input} placeholder='45984268' />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: '7%',
    flexDirection:'column',
    alignItems:'center'
  },
  inputLabel: {
    
  },
  input: {
    borderWidth: 2,
    borderColor: '#B3B3B3',
    width: '90%',
    height: 70,
    marginTop: '3%',
    fontSize: 20,
    borderRadius: 20,
    paddingLeft:'5%',
    
  },
});

export default MyProfile;
