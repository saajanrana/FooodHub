import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
} from 'react-native';

import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);
const LoadingScreen = () => {
    const spinValue = useSharedValue(0);

    const startSpinning = () => {
      spinValue.value = withSpring(360, {}, (isFinished) => {
        if (isFinished) {
          spinValue.value = 0; // Reset the rotation to 0 after a complete rotation
        }
      });
    };
  
    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [{ rotate: `${spinValue.value}deg` }],
      };
    });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.spinningView, animatedStyle]} />
      <TouchableOpacity onPress={startSpinning}>
        <View style={styles.button}>
          <Text>Start Spinning</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      spinningView: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        borderRadius: 50,
      },
      button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 5,
      },
});

export default LoadingScreen;
