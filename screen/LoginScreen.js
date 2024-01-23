import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import {url} from '../components/url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {beinhome, loginUser, usertoken} from '../context/AuthSlice';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken,GraphRequest,GraphRequestManager } from 'react-native-fbsdk-next';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState();
  // const refer = async () => {
  //   const newasy = await AsyncStorage.getItem('isLoggedIn');
  //   const token = await AsyncStorage.getItem('token');
  //   console.log('newassync>>>>', newasy);
  //   if (newasy === 'true') {
  //     dispatch(beinhome(newasy));
  //     dispatch(usertoken(token));
  //     navigation.replace('HomeDrawer');
  //   } else {
  //     navigation.navigate('LoginScreen');
  //   }
  // };

  // useEffect(() => {
  //   refer();
  // }, []);

  

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
          const userverfiydata =  await auth().signInWithCredential(credential);
          // The user is now signed in, and you can navigate to the main part of your app.
          console.log('User signed in with Firebase:>>>>>>>',userverfiydata);
          const emailverified = userverfiydata?.additionalUserInfo?.profile?.email_verified;
          console.log('user data after >>>>>>>>>>>>>>>>>>',user);
          console.log(user.name);
          console.log(user.email);
          const email = user?.email;
          const password =user?.email.charAt(0).toUpperCase()+email.slice(1,3)+'goo1';
          console.log('hueee>>>>',email,password);
  
          // setFullName(name);
          // setEmail(mail);
          // setPassword(userpass);
          if(emailverified){
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
        console.log("error:>>",error)
      }
    }
  };
  
  useEffect(() => {
    GoogleSignin.configure(
    {
    webClientId:'384787010717-41i5j0959vlm6foql2g1jh7gscchbt7v.apps.googleusercontent.com'
    }
    );
  }, []);








  const getResponseInfo = async(error, result) => {
    if (error) {
      console.log('Error fetching data: ' + error.toString());
    } else {
  
      // console.log('resutl>>>>>',result);
      //      const email = result?.email;
      //     const password =result?.email.charAt(0).toUpperCase()+email.slice(1,3)+'goo1';
      //     console.log('hueee>>>>',email,password);
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
    console.log("login button clicked")
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile','email']);
  
      if (result.isCancelled) {
        console.log('Login is cancelled.');
      } else {
        const data = await AccessToken.getCurrentAccessToken();
        console.log("data",data);
        console.log("data access token",data.accessToken.toString());
  
        const processRequest = new GraphRequest('/me?fields=name,email,picture.type(large)', null, getResponseInfo);
  
        new GraphRequestManager().addRequest(processRequest).start();
      }
    } catch (error) {
      console.log('Error during Facebook login: ' + error.message);
    }
  };
















  // console.log('eror>>>',errors);

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Log In</Text>
      </View>

      <View>
        <View style={styles.inputContainer}>
        
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setEmail(text)}
            onFocus={() => setErrors({}) }
            // value='saajan@gmail.com'
          />
        </View>
        {(errors?.errors?.email ||errors?.message1 ) && <Text style={styles.error}>{(errors?.errors?.email||errors?.message1)}</Text>}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setPassword(text)}
            onFocus={() => setErrors({}) }
            // value='Saajan1'
          />
        </View>
        {(errors?.errors?.password ||errors?.message2 ) && <Text style={styles.error}>{(errors?.errors?.password||errors?.message2)}</Text>}
        <View style={{marginTop:'2%'}}>
        </View>
        
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
          <Text style={styles.signupText}>Already have an account?</Text>
          <TouchableOpacity
            style={styles.signupLink}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.signupLinkText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divider}>
        <View style={styles.dividerLine}></View>
        <Text style={styles.dividerText}>sign in with</Text>
        <View style={styles.dividerLine}></View>
      </View>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton} onPress={onFacebookButtonPress}>
          <Image source={require('../assets/fbicon.png')}  style={{height: 40,width:40}}  />
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={signup}>
        <Image source={require('../assets/googleicon.png')}  style={{height: 40,width:40}}  />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginLeft:responsiveWidth(10),
    marginTop: responsiveHeight(5),
  },
  headerText: {
    fontSize:responsiveFontSize(3.5),
    fontFamily:'NotoSans-ExtraBold',
  },
  inputContainer: {
    marginTop:responsiveHeight(6),
    marginLeft: responsiveWidth(6),
  },
  inputLabel: {
    marginLeft:responsiveWidth(2),
    fontFamily:'Roboto-Medium'
  },
  input: {
    borderWidth:responsiveFontSize(.11),
    borderColor: '#B3B3B3',
    width:responsiveWidth(90),
    height:responsiveHeight(9),
    marginTop:responsiveHeight(1),
    fontSize:responsiveFontSize(2.6),
    borderRadius: responsiveWidth(2),
    paddingLeft:responsiveWidth(2),
    fontFamily:'Roboto-Medium'
  },
  forgotPassword: {
    marginTop:responsiveHeight(1.2),
    alignItems:'center',
   
  },
  forgotPasswordText: {
    color: '#FE724C',
    fontSize:responsiveFontSize(1.5),
  },
  buttonContainer: {
    marginTop:responsiveHeight(2),
    alignItems:'center'
  },
  loginButton: {
    backgroundColor: '#FE724C',
    width:responsiveWidth(80),
    height:responsiveHeight(9),
    borderRadius:responsiveWidth(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  signupContainer: {
    // marginLeft: '19%',
    alignItems:'center',
    justifyContent:"center",
    flexDirection: 'row',
    marginTop: responsiveHeight(2),
  },
  signupText: {
    color: 'black',
    fontSize:responsiveFontSize(1.4),
  },
  signupLink: {
    marginLeft:responsiveWidth(1)
  },
  signupLinkText: {
    color: '#FE724C',
    fontSize:responsiveFontSize(1.8),
  },
  divider: {
    marginTop:responsiveHeight(2),
    // marginLeft: '5%',
    justifyContent:"center",
    flexDirection: 'row',
  },
  dividerLine: {
    borderBottomColor: 'black',
    borderBottomWidth:responsiveWidth(.2),
    width:responsiveWidth(30),
    marginBottom:responsiveHeight(1),
  },
  dividerText: {
    color: 'black',
    fontSize:responsiveFontSize(1.5),
    marginLeft: responsiveHeight(1),
    marginRight:responsiveHeight(1),
    justifyContent: 'space-between',
  }, 
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding:responsiveWidth(2),
  },
  socialButton: {
    backgroundColor: 'white',
    width: responsiveWidth(35),
    height:responsiveHeight(8),
    borderRadius:responsiveWidth(15),
    justifyContent: 'center',
    alignItems: 'center',
   flexDirection:'row',
   gap:responsiveWidth(1)
  
  },
  socialButtonText: {
    color: 'black',
  },
  error: {
    marginLeft:responsiveWidth(3),
    color: 'red',
  },
});

export default LoginScreen;
