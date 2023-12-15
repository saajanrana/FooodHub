import React from 'react';
import {View, StyleSheet,TouchableOpacity,Image} from 'react-native';

const Header = (props) => {
    return (
        <View>
            {props?.isMenu && (
            <TouchableOpacity onPress={props?.onPressMenu}>
              <Image
                source={require('../assets/drawericon.png')}
                style={{width: 90, height: 90}}
              />
            </TouchableOpacity>
            )}
          </View>
    );
}

const styles = StyleSheet.create({})

export default Header;
