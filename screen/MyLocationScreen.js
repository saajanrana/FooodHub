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

const MyLocationScreen = () => {
  // const [long,setLong] = useState(0);
  // const [lat,setLat] = useState(0);
  // const [alt,setAlt] = useState(0);

  const [location, setLocation] = useState([]);
  const mapViewRef = React.createRef();

  const [cord, setCord] = useState({
    latitude: 19.076090,
    longitude: 72.877426,
  });

  useEffect(() => {
    requestLocationPermission();
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
        console.log('lat>>', latitude);

       
            mapViewRef.current.animateToRegion({
              latitude:latitude,
              longitude:longitude,
              latitudeDelta: 0.04,
              longitudeDelta: 0.04,
            });
      
            setCord({
              latitude:latitude,
              longitude:longitude,
            })
         
        
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 1500, maximumAge: 10000},
    );
  };

  

  console.log('hue>>>', location.length < 0);
  return (
    <View style={{flex: 1}}>
      <MapView
        ref={mapViewRef}
        style={{height: '80%', width: '100%'}}
        initialRegion={{
          latitude: 19.076090,
          longitude: 72.877426,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        }}>
        <Marker
          coordinate={cord}
          title="Your Location"
          description="You are here"
        />
      </MapView>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity
          style={{
            width: 100,
            height: 50,
            backgroundColor: 'red',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
          }}
          onPress={() => {
            getLocation();
          }}>
          <Text style={{color: 'white'}}>Get current location</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MyLocationScreen;
