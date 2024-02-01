import React,{useState,useEffect} from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity,Image,ScrollView } from 'react-native';
import { url } from '../components/url';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { loginUser, usertoken } from '../context/AuthSlice';
import { useDispatch } from 'react-redux';
import { LoginManager, AccessToken,GraphRequest,GraphRequestManager } from 'react-native-fbsdk-next';
import { responsiveFontSize, responsiveWidth,responsiveHeight } from 'react-native-responsive-dimensions';
import Signupwithbtn from '../components/Signupwithbtn';
import FormInput from '../components/FormInput';

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();


  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});


  
  const handleRegister = async () => {
    try {
      const response = await fetch(`${url}api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password }),
      });
      
      if (response.ok) {
        // Registration successful, handle accordingly (e.g., navigate to another screen)
        console.log('Registration successful');
        setErrors({});
        navigation.navigate('LoginScreen');

      } else {
        // Registration failed, parse and set validation errors
        const data = await response.json();
        setErrors(data.errors || { message: data.message });
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };


const signIn = async () => {
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

        const fullName = user?.name;
        const email = user?.email;
        const password =user?.email.charAt(0).toUpperCase()+email.slice(1,3)+'goo1';
        console.log('hueee>>>>',fullName,email,password);

        // setFullName(name);
        // setEmail(mail);
        // setPassword(userpass);
        if(emailverified){
          try {
            const response = await fetch(`${url}api/goregister`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({fullName , email , password}),
            });
            const data = await response.json();
            
            if (response.ok) {
              // Registration successful, handle accordingly (e.g., navigate to another screen)
              console.log('Registration successful');
              setErrors({});
              console.log('ress>>>>',data.token);
              dispatch(loginUser('usercanlogin'));
               dispatch(usertoken(data.token));
              navigation.navigate('HomeDrawer');
      
            } else {
              // Registration failed, parse and set validation errors
              const data = await response.json();
              setErrors(data.errors || { message: data.message });
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


// async function onFacebookButtonPress() {
//   // Attempt login with permissions
//   const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

//   if (result.isCancelled) {
//     throw 'User cancelled the login process';
//   }

//   // Once signed in, get the users AccessToken
//   const data = await AccessToken.getCurrentAccessToken();

//   if (!data) {
//     console.log('data>>>>',data);
//     throw 'Something went wrong obtaining access token';
//   }

//   // Create a Firebase credential with the AccessToken
//   const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

//   // Sign-in the user with the credential
//   auth().signInWithCredential(facebookCredential);

//    return facebookCredential;
// }

const getResponseInfo = async(error, result) => {
  if (error) {
    console.log('Error fetching data: ' + error.toString());
  } else {

    console.log('resutl>>>>>',result);
    
    // const userdata = JSON.stringify(result);
    // console.log("data>>>>>>>>>>>>>>>>>>>>>>>>>>>",userdata);
    // const UserData = JSON.parse(userdata);
    // console.log('userdata<>>>>>',UserData);
         const fullName = result?.name;
         const email = result?.email;
        const password =result?.email.charAt(0).toUpperCase()+email.slice(1,3)+'goo1';
        console.log('hueee>>>>',fullName,email,password);

    try {
      const response = await fetch(`${url}api/goregister`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({fullName , email , password}),
      });
      const data = await response.json();
      
      if (response.ok) {
        // Registration successful, handle accordingly (e.g., navigate to another screen)
        console.log('Registration successful');
        setErrors({});
        console.log('ress>>>>',data.token);
        dispatch(loginUser('usercanlogin'));
         dispatch(usertoken(data.token));
        navigation.navigate('HomeDrawer');

      } else {
        // Registration failed, parse and set validation errors
        const data = await response.json();
        setErrors(data.errors || { message: data.message });
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
    
    // setUserName('Welcome ' + result.name);
    // setToken('User Token: ' + result.id);
    // setProfilePic(result.picture.data.url);
    // setEmail('Email: ' + result.email);
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


  console.log('error>>>',errors);
  return (
    <ScrollView >
      <View style={styles.header}>
        <Text style={styles.headerText}>Sign Up</Text>
      </View>

      <View style={{marginBottom:responsiveHeight(5)}}>
        {/* <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Full name</Text>
          <TextInput style={styles.input} 
            onChangeText={(text)=>setFullName(text)}
            onFocus={() => setErrors({}) }
          />
     
        </View>
        <View style={{alignItems:'flex-start',marginLeft:'9%',width:'80%'}}>
        {errors.fullName && <Text style={styles.error}>{errors.fullName}</Text>}
        </View> */}

        <FormInput label={'Full Name'}
          onChangeText={text => setFullName(text)}
          value={fullName}
          placeholder={'Enter your name'}
          error={errors?.fullName}  />

          <FormInput label={'Email'}
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder={'Enter your email'}
          error={errors?.email || errors?.message}  />

          <FormInput label={'Password'}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder={'Enter your password'}
          error={errors?.password}  />

      {/* <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput style={styles.input}
          onChangeText={(text)=>setEmail(text)}
          onFocus={() => setErrors({}) }
           
          />
 
        </View>
        <View style={{alignItems:'flex-start',marginLeft:'9%',width:'80%'}}>
        {errors.email && <Text style={styles.error}>{errors.email}</Text>}
          {errors.message&& <Text style={styles.error}>{errors.message}</Text>}
        </View> */}
        {/* <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput style={styles.input}
           onChangeText={(text)=>setPassword(text)}
           onFocus={() => setErrors({}) }
          />
          
        </View>
        <View style={{alignItems:'flex-start',marginLeft:'9%',width:'80%'}}>
        {errors.password && <Text style={styles.error}>{errors.password}</Text>}
        </View> */}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.signupButton}
           onPress={handleRegister}
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={styles.signupLink}>
            <Text style={styles.signupLinkText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <Signupwithbtn onFacebookPress={onFacebookButtonPress} onGooglePress={signIn} txt={'sign in'}  />
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginLeft:'10%',
    marginTop: '4%',
    alignItems:'flex-start'
  },
  headerText: {
    fontSize: responsiveFontSize(3.6),
    fontFamily: 'Gilroy-Bold',
    color: '#000000',
  },
  buttonContainer: {
      marginTop:'6%',
      alignItems:"center",
      justifyContent:'center'
  },
  signupButton: {
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
  loginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: responsiveHeight(2),
  },
  loginText: {
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

export default RegisterScreen;
