import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {url} from '../components/url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {beinhome, loginUser, usertoken} from '../context/AuthSlice';

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

  console.log('eror>>>',errors);

  return (
    <View>
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
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/fbicon.png')}  style={{height: 40,width:40}}  />
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
        <Image source={require('../assets/googleicon.png')}  style={{height: 40,width:40}}  />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginLeft:'10%',
    marginTop: '5%',
  },
  headerText: {
    fontSize: 30,
    fontFamily:'NotoSans-ExtraBold',
  },
  inputContainer: {
    marginTop: '6%',
    marginLeft: '6%',
  },
  inputLabel: {
    marginLeft: 15,
    fontFamily:'Roboto-Medium'
  },
  input: {
    borderWidth: 2,
    borderColor: '#B3B3B3',
    width: '90%',
    height: 70,
    marginTop: 10,
    fontSize: 25,
    borderRadius: 20,
    paddingLeft: 20,
  },
  forgotPassword: {
    marginTop: 15,
    marginLeft: '30%',
  },
  forgotPasswordText: {
    color: '#FE724C',
    fontSize: 15,
  },
  buttonContainer: {
    marginTop: 20,
    marginLeft: '15%',
  },
  loginButton: {
    backgroundColor: '#FE724C',
    width: '80%',
    height: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  signupContainer: {
    marginLeft: '19%',
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    color: 'black',
    fontSize: 15,
  },
  signupLink: {
    marginLeft: 12,
  },
  signupLinkText: {
    color: '#FE724C',
    fontSize: 15,
  },
  divider: {
    marginTop: 20,
    marginLeft: '5%',
    flexDirection: 'row',
  },
  dividerLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: '30%',
    marginBottom: 8,
  },
  dividerText: {
    color: 'black',
    fontSize: 16,
    marginLeft: 14,
    marginRight: 10,
    justifyContent: 'space-between',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  socialButton: {
    backgroundColor: 'white',
    width: '40%',
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
   flexDirection:'row',
   gap:8
  
  },
  socialButtonText: {
    color: 'black',
  },
  error: {
    marginLeft: 40,
    color: 'red',
  },
});

export default LoginScreen;
