import React from 'react';
import {View, StyleSheet,Text,TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const FormInput = ({ label, value, onChangeText, placeholder, error,clearerrors,showtxt,showtxtfn,blur }) => {
    return (
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>{label}</Text>
          <View style={styles.scontainer}>

          
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={'#9796A1'}
            // onPress={blur}
            // onFocus={blur}
            secureTextEntry={showtxt}
            onBlur={blur}
    
          />
          {showtxt !== undefined &&((showtxt)?<TouchableOpacity style={styles.hideshow} onPress={showtxtfn}>
              <Icon name='visibility' style={styles.icons} />
            </TouchableOpacity>:<TouchableOpacity  style={styles.hideshow} onPress={showtxtfn}>
            <Icon name='visibility-off' style={styles.icons} />
            </TouchableOpacity>)
          }
         </View>
       
          {error && (
            <Text style={styles.error}>
                {error}
            </Text>
          )}
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
   
        marginLeft: responsiveWidth(6),
        flexDirection:'column'
            },
            scontainer:{
              width: responsiveWidth(90),
              height: responsiveHeight(9),
              borderWidth: responsiveFontSize(0.11),
              borderColor: '#B3B3B3',
              marginTop: responsiveHeight(1),
              borderRadius: responsiveWidth(2),
            },
      inputLabel: {
        fontSize: responsiveFontSize(2.2),
        marginLeft: responsiveWidth(0.5),
        fontFamily: 'Gilroy-Regular',
        color: '#9796A1',
        
      },
      input: {
       
        width: responsiveWidth(80),
        height: responsiveHeight(9),
       
        fontSize: responsiveFontSize(2.4),
      
        paddingLeft: responsiveWidth(5),
        fontFamily: 'Gilroy-Medium',
        color: 'black',
   
      },
      hideshow:{
        position:'absolute',
        right:responsiveWidth(2),
        top:responsiveHeight(-6.5)       

        
      },
      icons:{
   
         fontSize:responsiveFontSize(3),
        
      },
      error: {
        marginLeft: responsiveWidth(1),
        marginTop:responsiveHeight(0.5),
        color: 'red',
        fontSize: responsiveFontSize(2),
        fontFamily: 'Gilroy-Medium',
      },
})

export default FormInput;


























// old input field
// {/* <View style={styles.inputContainer}>
//           <Text style={styles.inputLabel}>Password</Text>
//           <TextInput
//             style={styles.input}
//             onChangeText={text => setPassword(text)}
//             onFocus={() => setErrors({})}
//             placeholder="Password"
//             placeholderTextColor={'#9796A1'}
//             // value='Saajan1'
//           />
//           {(errors?.errors?.password || errors?.message2) && (
//             <Text style={styles.error}>
//               {errors?.errors?.password || errors?.message2}
//             </Text>
//           )}
//         </View> */}


//         {/* <View style={styles.inputContainer}>
//           <Text style={styles.inputLabel}>Email</Text>
//           <TextInput
//             style={styles.input}
//             onChangeText={text => setEmail(text)}
//             onFocus={() => setErrors({})}
//             placeholder="Your email"
//             placeholderTextColor={'#9796A1'}
//             // value='saajan@gmail.com'
//           />
//           {(errors?.errors?.email || errors?.message1) && (
//             <Text style={styles.error}>
//               {errors?.errors?.email || errors?.message1}
//             </Text>
//           )}
//         </View> */}