import React from 'react';
import {View, StyleSheet,TouchableOpacity,Image} from 'react-native';
import { responsiveWidth, responsiveHeight} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const Header = (props) => {
    return (
        <>
            {props?.isMenu && (
            <TouchableOpacity onPress={props?.onPressMenu} style={{
              marginTop:10,
              backgroundColor: '#FFFFFF',
              elevation: 5,
              shadowColor: 'light-brown',
              borderRadius:responsiveWidth(4),
              marginLeft:responsiveWidth(3),
              padding:responsiveWidth(2)
            }}>
              <Icon name="sort" size={35} color="black" />
            </TouchableOpacity>
            )}
          </>
    );
}

const styles = StyleSheet.create({})

export default Header;
