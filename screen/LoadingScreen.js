import React from 'react';
import {View, StyleSheet,Image,ActivityIndicator} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';



// const duration = 5000;
// const easing = Easing.bezier(0.25, -0.5, 0.25, 1);
const LoadingScreen = () => {
  // const sv = useSharedValue(0);

  // React.useEffect(() => {
  //   sv.value = withRepeat(withTiming(1, { duration, easing }), -1);
  // }, []);

  // const animatedStyle = useAnimatedStyle(() => ({
  //   transform: [{ rotate: `${sv.value * 360}deg` }],
  // }));
  return (
    // <View style={styles.loadcontainer}>
    //   <Animated.Image style={[styles.loadbox, animatedStyle]} source={require('../assets/FooodHub.png')} />
    // </View>
    <View style={styles.loadcontainer}>
      <ActivityIndicator size={responsiveFontSize(10)} color={'red'} />

    </View>
  );
}



export default LoadingScreen;


const styles = StyleSheet.create({
  loadcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height:responsiveHeight(100),
    width:responsiveScreenWidth(100),
   
  },
  // loadbox: {
  //   height: 120,
  //   width: 120,
  //   backgroundColor: '#b58df1',
  //   borderRadius: 20,
  // },
});

