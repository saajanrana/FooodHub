import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Log In</Text>
      </View>

      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.forgotPassword}>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.replace('HomeDrawer')}>
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
  },
  socialButtonText: {
    color: 'black',
  },
});

export default LoginScreen;
