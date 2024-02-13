import {useRoute} from '@react-navigation/native';
import React, {useRef, useState,useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Modal
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { loginUser, usertoken } from '../context/AuthSlice';
import { useDispatch } from 'react-redux';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';



const duration = 5000;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);
const OtpScreen = ({navigation}) => {
  const route = useRoute();
  const {email,token} = route?.params;
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const [otp, setOtp] = useState(['', '', '', '']);
  const otpInputs = useRef([null, null, null, null]);
  const verifyotp = ['1', '1', '1', '1'];


  const sv = useSharedValue(0);
  useEffect(() => {
    sv.value = withRepeat(withTiming(1, { duration, easing }), -1);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${sv.value * 360}deg` }],
  }));



  const toggleModal = () => {
    setModalVisible(true);
  };
 

  const handleOtpInput = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);
    if (value !== '' && index < otpInputs.current.length - 1) {
      otpInputs.current[index + 1].focus();
    }
    if (index === otpInputs.current.length - 1) {
      const isOtpMatch = newOtp.join('') === verifyotp.join('');
      if (isOtpMatch) {
        // toggleModal();
        dispatch(loginUser('usercanlogin'));
        dispatch(usertoken(token));
        navigation.replace('HomeDrawer');
      } else {
        console.log('OTP did not match');
      }
    }
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          marginLeft: responsiveWidth(6),
          marginRight: responsiveWidth(6),
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headertouchbtn}>
          <Icon name="arrow-back-ios" style={styles.backbtn} color="black" />
        </TouchableOpacity>
        <View
          style={{marginTop: responsiveHeight(10), gap: responsiveHeight(1)}}>
          <Text
            style={{
              fontSize: responsiveFontSize(5),
              fontFamily: 'Gilroy-Bold',
              color: '#000',
            }}>
            Verification Code
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(2.5),
              fontFamily: 'Gilroy-Medium',
              color: '#9796A1',
            }}>
            Please type the verification code sent to {email}
          </Text>

        </View>
        {/* <Modal isVisible={modalVisible}>
        <View style={styles.loadcontainer}>
          <View  style={styles.loadcontainert}>
      <Animated.Image style={[styles.loadbox, animatedStyle]} source={require('../assets/FooodHub.png')} />
      </View>
    </View>
      </Modal> */}
        <View
          style={{
            flexDirection: 'row',
            gap: responsiveWidth(5),
            marginTop: responsiveHeight(3),
            justifyContent: 'space-around',
          }}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              value={digit}
              maxLength={1}
              keyboardType="numeric"
              style={{
                borderWidth: responsiveWidth(0.2),
                borderColor: '#9796A1',
                width: responsiveWidth(16),
                height: responsiveHeight(8),
                borderRadius: responsiveWidth(2),
                color: '#FE724C',
                fontSize: responsiveFontSize(4),
                fontFamily: 'Gilroy-Bold',
                textAlign: 'center',
              }}
              onChangeText={text => handleOtpInput(index, text)}
              ref={ref => (otpInputs.current[index] = ref)}
            />
          ))}
        </View>
        <View
          style={{
            marginTop: responsiveHeight(2),
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              fontFamily: 'Gilroy-SemiBold',
              color: 'black',
            }}>
            I don’t recevie a code!
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: '#FE724C',
                fontSize: responsiveFontSize(2),
                fontFamily: 'Gilroy-SemiBold',
              }}>
              {' '}
              Please resend
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headertouchbtn: {
    marginTop: responsiveHeight(5),
    backgroundColor: '#FFFFFF',
    elevation: 5,
    shadowColor: 'light-brown',
    width: responsiveWidth(Dimensions.get('window').width >= 600 ? 10 : 13),
    height: responsiveHeight(6),
    borderRadius: responsiveWidth(2.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  backbtn: {
    marginLeft: responsiveWidth(2),
    fontSize: responsiveFontSize(3),
  },
  headertxt: {
    fontSize: responsiveFontSize(3),
    fontFamily: 'Gilroy-Bold',
    color: 'black',
    textAlign: 'center',
    marginLeft: responsiveWidth(15),
  },
  loadcontainer: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  loadcontainert:{
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  loadbox: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
  },
});

export default OtpScreen;
