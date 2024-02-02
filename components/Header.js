import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const Header = props => {
  return (
    <>
      {props?.isMenu && (
        <TouchableOpacity
          onPress={props?.onPressMenu}
          style={{
            backgroundColor: '#FFFFFF',
            elevation: 5,
            shadowColor: 'light-brown',
            width:responsiveWidth(12),
            height:responsiveHeight(7),
            borderRadius: responsiveWidth(2.5),
            alignItems:'center',
            justifyContent:'center',
           
          }}>
          <Icon name="sort" style={styles.iconstyl} color="black" />
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  iconstyl:{
   fontSize:responsiveFontSize(4)
  }
});

export default Header;
