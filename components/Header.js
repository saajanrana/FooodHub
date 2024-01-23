import React from 'react';
import {View, StyleSheet,TouchableOpacity,Image} from 'react-native';
import { responsiveWidth, responsiveHeight} from 'react-native-responsive-dimensions';

const Header = (props) => {
    return (
        <>
            {props?.isMenu && (
            <TouchableOpacity onPress={props?.onPressMenu}>
              <Image
                source={require('../assets/drawericon.png')}
                style={{width:responsiveWidth(22),height:responsiveHeight(12),marginTop:responsiveHeight(1.7), }}
              />
            </TouchableOpacity>
            )}
          </>
    );
}

const styles = StyleSheet.create({})

export default Header;
