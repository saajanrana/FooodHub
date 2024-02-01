import React from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity,} from 'react-native';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  
  import Icon from 'react-native-vector-icons/dist/Ionicons';

const Signupwithbtn = ({ onFacebookPress, onGooglePress,txt }) => {
    return (
       <>
       <View style={styles.divider}>
        <View style={styles.dividerLine}></View>
        <Text style={styles.dividerText}>{txt} with</Text>
        <View style={styles.dividerLine}></View>
      </View>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={onFacebookPress}>
          <Icon name="logo-facebook" color="#4267b2" style={styles.smbtn} />
          <Text style={styles.socialButtonText}>FACEBOOK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={onGooglePress}>
          <Image source={require('../assets/googleicon.png')}  style={{height:responsiveHeight(5),width:responsiveWidth(8)}}  />
          {/* <Icon name="logo-google" color="gray" style={styles.smbtn} /> */}
          <Text style={styles.socialButtonText}>GOOGLE</Text>
        </TouchableOpacity>
      </View>
       </>
    );
}

const styles = StyleSheet.create({
    divider: {
        marginTop: responsiveHeight(3),
        // marginLeft: '5%',
        justifyContent: 'center',
        flexDirection: 'row',
      },
      dividerLine: {

        borderBottomColor: '#B3B3B3',
        borderBottomWidth: responsiveWidth(0.3),
        width: responsiveWidth(30),
        marginBottom: responsiveHeight(1),
      },
      dividerText: {
        color: '#5B5B5E',
        fontSize: responsiveFontSize(2),
        marginLeft: responsiveHeight(1),
        marginRight: responsiveHeight(1),
        justifyContent: 'space-between',
      },
      socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: responsiveHeight(2),
      },
      socialButton: {
        backgroundColor: 'white',
        width: responsiveWidth(40),
        height: responsiveHeight(9),
        borderRadius: responsiveWidth(15),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: responsiveWidth(1),
      },
      socialButtonText: {
        color: 'black',
        fontSize: responsiveFontSize(2),
        fontFamily: 'Gilroy-Medium',
      },
      smbtn: {
        fontSize: responsiveFontSize(4),
      },
})

export default Signupwithbtn;
