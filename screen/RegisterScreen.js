import React, {useState, useEffect} from 'react';
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
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {loginUser, usertoken} from '../context/AuthSlice';
import {useDispatch} from 'react-redux';
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk-next';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import Signupwithbtn from '../components/Signupwithbtn';
import FormInput from '../components/FormInput';


const RegisterScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword,setConpassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showpass,setShowpass] = useState(true);
  const [showcpass,setShowcpass] = useState(true);




   const nameblur = () =>{
    let errors = {};
     fullName.trim();
    if (!fullName) {
      errors.fullName = "Please enter your full name.";
    } else if (!fullName.match(/^[^\d]+$/)) {
      errors.fullName = "fullname cannot contain numbers.";
    } else if (fullName.match(/^[^\w]|[^\w\s]|[^\w]$/g)) {
      errors.fullName = "fullname cannot contain special characters.";
    }
    setErrors(errors);
   }

   const emailblur = () =>{
    let errors = {};
    if (!email) {
      errors.email = "Please enter your email.";
    } else if (!email.match(/^\S+@\S+\.\S+$/)) {
      errors.email = "Invalid email format.";
    }
    setErrors(errors);
   }

   const phoneblur = () =>{
    let errors = {};
    if(!phone){
      errors.phone = "Please enter phone no.";
    }
    else if (!phone.match(/^[0-9]+$/)) {
      errors.phone = "Invalid phone no.";
    }

    setErrors(errors);
   }


   const passblur = () =>{
    let errors = {};
    if (!password) {
      errors.password = "Please enter your password";
    } else if (
      !password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,100}$/)
    ) {
      errors.password =
        "Password: 6+ characters, mix of uppercase/lowercase letters, and at least one digit.";
    }

    setErrors(errors);
   }

   const cpassblur = () =>{
    let errors = {};
    if(!conpassword){
      errors.conpassword = "Please re-enter you password";
    }
    else if(!(password === conpassword)){
      errors.conpassword = "Your confirm password and password did not match";
    }

    setErrors(errors);
   }


 







  const handleRegister = async () => {

  
    try {
      const response = await fetch(`${url}api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({fullName, email,phone,password,conpassword}),
      });
      const data = await response.json();
      if (response.ok) {
        // Registration successful, handle accordingly (e.g., navigate to another screen)
        setErrors({});
        navigation.navigate('OtpScreen',{email:email,token:data?.token});
      } else if(data?.message==="Email already registered."){
        navigation.navigate('OtpScreen',{email:email,token:data?.token});
      }
      
      else {
        // Registration failed,parse and set validation errors
        // const data = await response.json();
        setErrors(data?.errors || {message: data?.message});
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
        const userverfiydata = await auth().signInWithCredential(credential);
        // The user is now signed in, and you can navigate to the main part of your app.
        console.log('User signed in with Firebase:>>>>>>>', userverfiydata);
        const emailverified =
          userverfiydata?.additionalUserInfo?.profile?.email_verified;

        console.log(user.name);
        console.log(user.email);

        const fullName = user?.name;
        const email = user?.email;
        const password =
          user?.email.charAt(0).toUpperCase() + email.slice(1, 3) + 'goo1';


        // setFullName(name);
        // setEmail(mail);
        // setPassword(userpass);
        if (emailverified) {
          try {
            const response = await fetch(`${url}api/goregister`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({fullName, email, password}),
            });
            const data = await response.json();

            if (response.ok) {
              // Registration successful, handle accordingly (e.g., navigate to another screen)
              console.log('Registration successful');
              setErrors({});
              console.log('ress>>>>', data.token);
              dispatch(loginUser('usercanlogin'));
              dispatch(usertoken(data.token));
              navigation.navigate('HomeDrawer');
            } else {
              // Registration failed, parse and set validation errors
              const data = await response.json();
              setErrors(data.errors || {message: data.message});
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

  const getResponseInfo = async (error, result) => {
    if (error) {
      console.log('Error fetching data: ' + error.toString());
    } else {
      console.log('resutl>>>>>', result);

      // const userdata = JSON.stringify(result);
      // console.log("data>>>>>>>>>>>>>>>>>>>>>>>>>>>",userdata);
      // const UserData = JSON.parse(userdata);
      // console.log('userdata<>>>>>',UserData);
      const fullName = result?.name;
      const email = result?.email;
      const password =
        result?.email.charAt(0).toUpperCase() + email.slice(1, 3) + 'goo1';
      console.log('hueee>>>>', fullName, email, password);

      try {
        const response = await fetch(`${url}api/goregister`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({fullName, email, password}),
        });
        const data = await response.json();

        if (response.ok) {
          // Registration successful, handle accordingly (e.g., navigate to another screen)
          console.log('Registration successful');
          setErrors({});
          console.log('ress>>>>', data.token);
          dispatch(loginUser('usercanlogin'));
          dispatch(usertoken(data.token));
          navigation.navigate('HomeDrawer');
        } else {
          // Registration failed, parse and set validation errors
          const data = await response.json();
          console.log('data>>>>',data);
          setErrors(data.errors || {message: data.message});
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

  const showhide =() =>{
    console.log('hinden');
    setShowpass(!showpass);
  }
  const showhidet =() =>{
    console.log('hinden');
    setShowcpass(!showcpass);
  }


  return (
    <ScrollView style={styles.maincontainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sign Up</Text>
      </View>

      <View style={styles.secondcontainer}>
        <View style={styles.formcontainer}>
          <FormInput
            label={'Full Name'}
            onChangeText={(text) => {setFullName(text),nameblur()}}
            value={fullName}
            placeholder={'Enter your name'}
            error={errors?.fullName}
            // clearerrors={ ()=>setErrors('')}
            blur={nameblur}


          />

          <FormInput
            label={'Email'}
            onChangeText={text => {setEmail(text),emailblur()}}
            value={email}
            placeholder={'Enter your email'}
            error={errors?.email || errors?.message}
            // clearerrors={ ()=>setErrors('')}
            blur={emailblur}
          />

          <FormInput
            label={'Phone no'}
            value={phone}
            onChangeText={text => {setPhone(text),phoneblur()}}
            placeholder={'Enter your phone no.'}
            error={errors?.phone}
            // clearerrors={ ()=>setErrors('')}
            blur={phoneblur}
          />

          <FormInput
            label={'Password'}
            value={password}
            onChangeText={text => {setPassword(text),passblur()}}
            placeholder={'Enter your password'}
            error={errors?.Password || errors?.password}
            // clearerrors={ ()=>setErrors('')}
            showtxt={showpass}
            showtxtfn={showhide}
            blur={passblur}
          />
          <FormInput
            label={'Confirm password'}
            value={conpassword}
            onChangeText={text => {setConpassword(text),cpassblur()}}
            placeholder={'Re-enter your password'}
            error={errors?.ConPassword || errors?.conpassword}
            // clearerrors={ ()=>setErrors('')}
            showtxt={showcpass}
            showtxtfn={showhidet}
            blur={cpassblur}
            
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={handleRegister}>
            <Text style={styles.buttonText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            style={styles.signupLink}>
            <Text style={styles.signupLinkText}>Login</Text>
          </TouchableOpacity>
        </View>
        <Signupwithbtn
          onFacebookPress={onFacebookButtonPress}
          onGooglePress={signIn}
          txt={'sign in'}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  header: {
    marginLeft: responsiveWidth(6),
    marginTop: responsiveHeight(5),
  },
  headerText: {
    fontSize: responsiveFontSize(5),
    fontFamily: 'Gilroy-ExtraBold',
    color: '#000000',
  },
  secondcontainer: {
    marginTop: responsiveHeight(5),
  },
  formcontainer: {
    gap: responsiveHeight(2.5),
  },
  buttonContainer: {
    marginTop:responsiveHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: responsiveFontSize(3),
  },
  loginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: responsiveHeight(2),
  },
  loginText: {
    color: '#5B5B5E',
    fontSize: responsiveFontSize(2.5),
    fontFamily: 'Gilroy-Medium',
  },
  signupLink: {
    marginLeft: responsiveWidth(1),
  },
  signupLinkText: {
    color: '#FE724C',
    fontSize: responsiveFontSize(2.5),
    fontFamily: 'Gilroy-Medium',
  },
});

export default RegisterScreen;
