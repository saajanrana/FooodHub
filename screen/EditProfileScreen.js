import React,{useState} from 'react';
import {View, StyleSheet,Text,TextInput,TouchableOpacity} from 'react-native';


const EditProfileScreen = () => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        <View>
        <View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Full name</Text>
            <TextInput style={styles.input} placeholder='Eljad Eendaz' />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>E-mail</Text>
            <TextInput style={styles.input} placeholder='Eljad@gmail.com' />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <TextInput style={styles.input} placeholder='45984268' />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>City</Text>
            <TextInput style={styles.input} placeholder='Dehradun' />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Strit</Text>
            <TextInput style={styles.input} placeholder='Kargi Chowk' />
          </View>
        </View>
        <View style={{marginTop:20,marginLeft:80}}>
            <TouchableOpacity style={{width:248,height:60,backgroundColor:"#FE724C",borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{color:'#FFF',fontSize:15,fontWeight:'600'}}>Save</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
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
      fontSize: 20,
      borderRadius: 20,
      paddingLeft: 20,
      
    },
  });

export default EditProfileScreen;
