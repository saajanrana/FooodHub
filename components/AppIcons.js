import React from 'react';
import {View, StyleSheet,Image} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';


export const HomeIcon = ({item}) => {
    const {focused, size} = item;
    return (
      <View style={styles.homeiconcontainer}>
        { focused?<Icon name="home"  color="red" style={styles.homeicon} />:<Icon name="home"  color="#767F9D" style={styles.homeicon} />
        }
          </View>
    );
  };
  
  export const Carticon = ({item}) => {
    const {focused, size} = item;
    return (
      <View style={styles.homeiconcontainer}>
        { focused?<Icon name="shopping-bag" style={styles.homeicon} color="red" />
          :<Icon name="shopping-bag" style={styles.homeicon} color="#767F9D" />
        }
          </View>
      
    );
  };
 


  export const Usericon = ({item}) => {
    const {focused, size} = item;
    return (
      <View style={styles.homeiconcontainer}>
        {
         focused?<Icon name="account-circle" style={styles.homeicon} color="red" />:<Icon name="account-circle" style={styles.homeicon} color="#767F9D" />

        }
          </View>
    
    );
  };

  const styles = StyleSheet.create({
    homeiconcontainer:{
      width:responsiveWidth(12),
      height:responsiveHeight(7),
      alignItems:'center',
      justifyContent:'center'
    },
     homeicon:{
      fontSize:responsiveFontSize(3.8),  
     }
  });

