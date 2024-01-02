import React,{useState,useEffect} from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity,Image,ScrollView } from 'react-native';
import { url } from '../components/url';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const RegisterScreen = ({ navigation }) => {


  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  ///AIzaSyDagmAH-J36EW33DXLZrIg2G45ErsX7wLA


//
// useEffect(() => {
//   GoogleSignin.configure({
//     webClientId: '384787010717-op8j2g5l5i1qnlbj641brt4mskgvcgn0.apps.googleusercontent.com',
//     offlineAccess: true
//   });
// }, []);
//

// GoogleSignin.configure({
//   webClientId:'384787010717-op8j2g5l5i1qnlbj641brt4mskgvcgn0.apps.googleusercontent.com',
// });




const signIn = async () => {
  try {
    console.log('Before checking Play Services');
    await GoogleSignin.hasPlayServices();
    console.log('After checking Play Services, before signIn');
    const userInfo = await GoogleSignin.signIn();
    console.log('User Info:', userInfo);
    // setState({ userInfo });
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
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


// google login
// const signIn = async () => {
//   try {
//     console.log('huee');
//     await GoogleSignin.hasPlayServices();
//     const {idToken} = await GoogleSignin.signIn();
//     console.log('userdata>>>>>',idToken);
 
//   } catch (error) {
//     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//       // user cancelled the login flow
//     } else if (error.code === statusCodes.IN_PROGRESS) {
//       // operation (e.g. sign in) is in progress already
//     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//       // play services not available or outdated
//     } else {
//       // some other error happened
//     }
//   }
// };

  console.log('error>>>',errors);
  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sign Up</Text>
      </View>

      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Full name</Text>
          <TextInput style={styles.input} 
            onChangeText={(text)=>setFullName(text)}
            onFocus={() => setErrors({}) }
          />
     
        </View>
        <View style={{alignItems:'flex-start',marginLeft:'9%',width:'80%'}}>
        {errors.fullName && <Text style={styles.error}>{errors.fullName}</Text>}
        </View>
                  <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput style={styles.input}
          onChangeText={(text)=>setEmail(text)}
          onFocus={() => setErrors({}) }
           
          />
 
        </View>
        <View style={{alignItems:'flex-start',marginLeft:'9%',width:'80%'}}>
        {errors.email && <Text style={styles.error}>{errors.email}</Text>}
          {errors.message&& <Text style={styles.error}>{errors.message}</Text>}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput style={styles.input}
           onChangeText={(text)=>setPassword(text)}
           onFocus={() => setErrors({}) }
          />
          
        </View>
        <View style={{alignItems:'flex-start',marginLeft:'9%',width:'80%'}}>
        {errors.password && <Text style={styles.error}>{errors.password}</Text>}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.signupButton}
           onPress={handleRegister}
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.signupLink}>Sign In</Text>
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
        <TouchableOpacity style={styles.socialButton} onPress={signIn}>
        <Image source={require('../assets/googleicon.png')}  style={{height: 40,width:40}}  />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
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
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop:'5%',
    marginLeft: '7%',
    alignItems:'flex-start'
    
  },
  inputLabel: {
     marginLeft:"5%"
  },
  input: {
    borderWidth: 2,
    borderColor: '#B3B3B3',
    width: '90%',
    height: 70,
    marginTop:'2%',
    fontSize: 25,
    borderRadius: 20,
    paddingLeft:'4%',
  },
  buttonContainer: {
      marginTop:'6%',
      alignItems:"center",
      justifyContent:'center'
  },
  signupButton: {
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
  loginContainer: {
    marginLeft: '18%',
    marginTop: '5%',
    flexDirection: 'row',
  },
  loginText: {
    color: 'black',
    fontSize: 15,
  },
  signupLink: {
    color: '#FE724C',
    fontSize: 15,
    marginLeft: '3%',
  },
  divider: {
    marginTop: '5%',
    marginLeft: '5%',
    flexDirection: 'row',
  },
  dividerLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: '30%',
    marginBottom:'2%',
  },
  dividerText: {
    color: 'black',
    fontSize: 16,
    marginLeft: '4%',
    marginRight: '4%',
    justifyContent: 'space-between',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:'4%'
    
    
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
    color: 'red',
  },
});

export default RegisterScreen;
