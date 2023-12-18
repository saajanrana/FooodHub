import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sign Up</Text>
      </View>

      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Full name</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.signupButton}>
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
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginLeft: 50,
    marginTop: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: 25,
    marginLeft: 30,
  },
  inputLabel: {
    marginLeft: 15,
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
  buttonContainer: {
    marginTop: 20,
    marginLeft: '15%',
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
    marginTop: 20,
    flexDirection: 'row',
  },
  loginText: {
    color: 'black',
    fontSize: 15,
  },
  signupLink: {
    color: '#FE724C',
    fontSize: 15,
    marginLeft: 10,
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
    marginLeft: 10,
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
  },
  socialButtonText: {
    color: 'black',
  },
});

export default RegisterScreen;
