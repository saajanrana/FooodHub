import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {url} from '../components/url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {beinhome, loginUser, usertoken} from '../context/AuthSlice';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk-next';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import Icon from 'react-native-vector-icons/dist/Ionicons';
import FormInput from '../components/FormInput';
import Signupwithbtn from '../components/Signupwithbtn';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState();

  const handleLogin = async () => {
    
    try {
      
      const response = await fetch(`${url}api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
      });

      const data = await response.json();

    
      if (response.ok) {
        // Registration successful, handle accordingly (e.g., navigate to another screen)
        console.log('Login successful');
        // await AsyncStorage.setItem('token',data.token);
        dispatch(loginUser('usercanlogin'));
        dispatch(usertoken(data.token));
        navigation.replace('HomeDrawer');
      } else {
        setErrors(data);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const signup = async () => {
    try {
      console.log('Before checking Play Services');
      await GoogleSignin.hasPlayServices();
      console.log('After checking Play Services, before signIn');
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info:>>>>>>>', userInfo);
      try {
        const idtoken = userInfo?.idToken;
        const user = userInfo?.user;
        const credential = auth.GoogleAuthProvider.credential(idtoken);
        const userverfiydata = await auth().signInWithCredential(credential);
        // The user is now signed in, and you can navigate to the main part of your app.
        console.log('User signed in with Firebase:>>>>>>>', userverfiydata);
        const emailverified =
          userverfiydata?.additionalUserInfo?.profile?.email_verified;
        console.log('user data after >>>>>>>>>>>>>>>>>>', user);
        console.log(user.name);
        console.log(user.email);
        const email = user?.email;
        const password =
          user?.email.charAt(0).toUpperCase() + email.slice(1, 3) + 'goo1';
        console.log('hueee>>>>', email, password);

        if (emailverified) {
          try {
            const response = await fetch(`${url}api/login`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({email, password}),
            });

            const data = await response.json();

            // console.log('data>>>>>', data);
            if (response.ok) {
              // Registration successful, handle accordingly (e.g., navigate to another screen)
              console.log('Login successful');
              // await AsyncStorage.setItem('token',data.token);
              dispatch(loginUser('usercanlogin'));
              dispatch(usertoken(data.token));
              navigation.replace('HomeDrawer');
            } else {
              setErrors(data);
            }
          } catch (error) {
            console.error('Error during registration:', error);
          }
        }
      } catch (error) {
        console.error('Error creating user in Firebase:', error);
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('user cancelled the login flow');
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('operation (e.g. sign in) is in progress already');
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('play services not available or outdated');
        // play services not available or outdated
      } else {
        // some other error happened
        console.log('error:>>', error);
      }
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '384787010717-41i5j0959vlm6foql2g1jh7gscchbt7v.apps.googleusercontent.com',
    });
  }, []);

  const getResponseInfo = async (error, result) => {
    if (error) {
      console.log('Error fetching data: ' + error.toString());
    } else {
      try {
        const response = await fetch(`${url}api/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email, password}),
        });

        const data = await response.json();

        // console.log('data>>>>>', data);
        if (response.ok) {
          // Registration successful, handle accordingly (e.g., navigate to another screen)
          console.log('Login successful');
          // await AsyncStorage.setItem('token',data.token);
          dispatch(loginUser('usercanlogin'));
          dispatch(usertoken(data.token));
          navigation.replace('HomeDrawer');
        } else {
          setErrors(data);
        }
      } catch (error) {
        console.error('Error during registration:', error);
      }
    }
  };
  const onFacebookButtonPress = async () => {
    console.log('login button clicked');
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        console.log('Login is cancelled.');
      } else {
        const data = await AccessToken.getCurrentAccessToken();
        console.log('data', data);
        console.log('data access token', data.accessToken.toString());

        const processRequest = new GraphRequest(
          '/me?fields=name,email,picture.type(large)',
          null,
          getResponseInfo,
        );

        new GraphRequestManager().addRequest(processRequest).start();
      }
    } catch (error) {
      console.log('Error during Facebook login: ' + error.message);
    }
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Log In</Text>
      </View>

      <View>
        <FormInput
          label={'Email'}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder={'Enter your email'}
          error={errors?.errors?.email || errors?.message1}
        />
        <FormInput
          label={'Password'}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder={'Enter your password'}
          error={errors?.errors?.password || errors?.message2}
        />
        <View style={styles.forgotPassword}>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity
            style={styles.signupLink}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.signupLinkText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Signupwithbtn
        onFacebookPress={onFacebookButtonPress}
        onGooglePress={signup}
        txt={'sign up'}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(5),
  },
  headerText: {
    fontSize: responsiveFontSize(3.6),
    fontFamily: 'Gilroy-Bold',
    color: '#000000',
  },
  forgotPassword: {
    marginTop: responsiveHeight(3),
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#FE724C',
    fontSize: responsiveFontSize(2),
    fontFamily: 'Gilroy-Medium',
  },
  buttonContainer: {
    marginTop: responsiveHeight(3),
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#FE724C',
    width: responsiveWidth(70),
    height: responsiveHeight(9),
    borderRadius: responsiveWidth(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Gilroy-SemiBold',
    fontSize: responsiveFontSize(2.2),
  },
  signupContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: responsiveHeight(2),
  },
  signupText: {
    color: '#5B5B5E',
    fontSize: responsiveFontSize(2),
    fontFamily: 'Gilroy-Medium',
  },
  signupLink: {
    marginLeft: responsiveWidth(1),
  },
  signupLinkText: {
    color: '#FE724C',
    fontSize: responsiveFontSize(2),
    fontFamily: 'Gilroy-Medium',
  },
});

export default LoginScreen;
