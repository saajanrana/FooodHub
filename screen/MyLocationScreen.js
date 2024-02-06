import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  PermissionsAndroid,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';

const MyLocationScreen = () => {
  const mapViewRef = React.createRef();
  const [cord, setCord] = useState();
  const initial = {
    latitude: 30.7046,
    longitude: 76.7179,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  useEffect(() => {
    requestLocationPermission();
    getLocation();
  }, []);
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message:
            'This app need ur location permission' +
            'so you can track ur order',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        const {latitude, longitude, accuracy, altitude} = position.coords;
        mapViewRef.current.animateToRegion({
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        setCord({
          latitude: latitude,
          longitude: longitude,
        });
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 1500, maximumAge: 10000},
    );
  };

  return (
    <View style={{flex: 1}}>
      <MapView
        ref={mapViewRef}
        style={{height: '100%', width: '100%'}}
        initialRegion={initial}>
        <Marker coordinate={cord ? cord : initial} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MyLocationScreen;
