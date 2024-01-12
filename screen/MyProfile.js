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
import { useSelector } from 'react-redux';

const MyProfile = (props) => {
  const profiledata = useSelector(state => state.auth.profiledata);
  

  return (
    <ScrollView style={{flex:1,backgroundColor:'#FFFFFF'}}>
      <View style={{alignItems: 'center',marginTop:"4%",gap:10}}>
        <View style={{borderRadius:50,borderWidth:5,borderColor:'#FFFFFF',position:'relative'}}>
          <Image source={require('../assets/profile.png')} style={{width:100,height:100,borderRadius:50}} />
          <TouchableOpacity style={{position:'absolute',bottom:'-15%',right:'-4%'}}>
                    <Image source={require('../assets/cameraicon1.png')}  />
          </TouchableOpacity>
          

         
        </View>
        <View style={{gap:8}}>
          <Text style={{color: '#000', fontSize: 20, fontWeight: '600',textAlign: 'center'}}>
          {profiledata?.fullName}
          </Text>
          <TouchableOpacity onPress={()=> props.navigation.navigate('EditProfileScreen')}>
            <Text
              style={{fontSize: 16, fontWeight: '400', textAlign: 'center',color:'#9796A1'}}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Full name</Text>
          <TextInput style={styles.input} placeholder={profiledata?.fullName} placeholderTextColor={"#111719"}/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>E-mail</Text>
          <TextInput style={styles.input} placeholder={profiledata?.email} placeholderTextColor={"#111719"} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Phone Number</Text>
          <TextInput style={styles.input} placeholder={profiledata?.phone}  placeholderTextColor={"#111719"} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: '4%',
    flexDirection:'column',
    marginLeft:'8%'
  },
  inputLabel: {
    fontSize:16,
    fontWeight:"400",
     textAlign:'left',
     marginLeft:'4%'
  },
  input: {
    borderWidth: 2,
    borderColor: '#B3B3B3',
    width: '90%',
    height: 70,
    marginTop: '3%',
    fontSize: 20,
    borderRadius: 15,
    paddingLeft:'5%',
    
    
  },
});

export default MyProfile;
