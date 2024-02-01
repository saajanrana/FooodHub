import React from 'react';
import {View, StyleSheet,Text,TextInput} from 'react-native';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';

const FormInput = ({ label, value, onChangeText, placeholder, error }) => {
    return (
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>{label}</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            // onFocus={() => setErrors({})}
             value={value}
            
            placeholder={placeholder}
            placeholderTextColor={'#9796A1'}
            // value='saajan@gmail.com'
          />
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
        marginTop: responsiveHeight(6),
        marginLeft: responsiveWidth(6),
      },
      inputLabel: {
        fontSize: responsiveFontSize(2.2),
        marginLeft: responsiveWidth(0.5),
        fontFamily: 'Gilroy-Regular',

        color: '#9796A1',
      },
      input: {
        borderWidth: responsiveFontSize(0.11),
        borderColor: '#B3B3B3',
        width: responsiveWidth(90),
        height: responsiveHeight(9),
        marginTop: responsiveHeight(1),
        fontSize: responsiveFontSize(2.4),
        borderRadius: responsiveWidth(2),
        paddingLeft: responsiveWidth(5),
        fontFamily: 'Gilroy-Medium',
        color: 'black',
        
      },
      error: {
        marginLeft: responsiveWidth(1),
        marginTop: responsiveHeight(0.5),
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