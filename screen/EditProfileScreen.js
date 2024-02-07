import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';
import {url} from '../components/url';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const EditProfileScreen = ({navigation}) => {
  const [user, setUser] = useState({});
  const usertoken = useSelector(state => state.auth.usertoken);

  useEffect(() => {
    const fetchdata = async () => {
      console.log('ueeee>>>.', usertoken);
      try {
        const response = await fetch(`${url}api/profile`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: usertoken,
          },
        });

        console.log('token inside>>>>>>>>>>', usertoken);
        console.log('res>>>>>>>>>>>>>>', response);

        if (response.ok) {
          const userData = await response.json();
          console.log('userdatrainside>>>>>>>', userData);
          setUser(userData);
        } else {
          console.error('Error fetching user profile:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error.message);
      }
    };

    fetchdata();
  }, [navigation]);

  const changedata = async () => {
    console.log('userdataafterupdate>>>>>>>>>', user);

    try {
      const response = await fetch(`${url}api/edit`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: usertoken,
        },
        body: JSON.stringify({
          fullName: user?.fullName,
          email: user?.email,
          password: user?.password,
          phone: user?.phone,
          city: user?.city,
          state: user?.state,
        }),
      });

      if (response.ok) {
        console.log('(including image) updated successfully');
      } else {
        console.error('Error fetching user profile:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error.message);
    }
  };

  console.log('user>>>>', user);

  return (
    <ScrollView style={styles.maincontainer}>
      <View
        style={{
          height: responsiveHeight(8),
          flexDirection: 'row',
          alignItems: 'center',
          gap: responsiveWidth(15),
          paddingLeft: responsiveHeight(2),
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{marginTop: responsiveHeight(3)}}>
          <Image
            resizeMode="contain"
            source={require('../assets/goback.png')}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 20, color: 'black', fontWeight: '700'}}>
          Edit Profile
        </Text>
      </View>

      <View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Full name</Text>
        
        <TextInput
            style={styles.input}
            value={user?.fullName}
            onChangeText={text => setUser({...user, fullName: text})}
          />
       
      </View>
      </View>
      {/* <View style={{justifyContent: 'center'}}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Full name</Text>
          <TextInput
            style={styles.input}
            value={user?.fullName}
            onChangeText={text => setUser({...user, fullName: text})}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>E-mail</Text>
          <TextInput
            style={styles.input}
            value={user?.email}
            onChangeText={text => setUser({...user, email: text})}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Phone Number</Text>
          <TextInput
            style={styles.input}
            value={user?.phone}
            onChangeText={text => setUser({...user, phone: text})}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>City</Text>
          <TextInput
            style={styles.input}
            value={user?.city}
            onChangeText={text => setUser({...user, city: text})}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>State</Text>
          <TextInput
            style={styles.input}
            value={user?.state}
            onChangeText={text => setUser({...user, state: text})}
          />
        </View>
      </View> */}
      <View style={{marginTop: '5%', alignItems: 'center', marginBottom: '5%'}}>
        <TouchableOpacity
          style={{
            width: '70%',
            height: 60,
            backgroundColor: '#FE724C',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={changedata}>
          <Text style={{color: '#FFF', fontSize: 15, fontWeight: '600'}}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    color: '#FFFFFF',
  },
  // inputContainer: {
  //   marginTop: '4%',
  //   marginLeft: '6%',
  // },
  // inputLabel: {
  //   marginLeft: '3%',
  // },
  // input: {
  //   borderWidth: 1,
  //   borderColor: '#B3B3B3',
  //   width: '90%',
  //   height: 70,
  //   marginTop: 10,
  //   fontSize: 20,
  //   borderRadius: 20,
  //   paddingLeft: 20,
  // },
  inputContainer: {
    marginTop: responsiveHeight(3),
    flexDirection: 'column',
    marginLeft: responsiveWidth(5),
    marginRight: responsiveWidth(5),
  },
  inputLabel: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: 'Gilroy-SemiBold',
    marginLeft: responsiveWidth(1),
  },
  input: {
    borderWidth: responsiveFontSize(0.11),
    borderColor: '#B3B3B3',
    width: responsiveWidth(90),
    height: responsiveHeight(9),
    marginTop: responsiveHeight(1),
    borderRadius: responsiveWidth(2),
    paddingLeft: responsiveWidth(3),
    fontFamily: 'Gilroy-Medium',
    color: 'black',
    justifyContent: 'center',
  },
  inputtxt: {
    color: '#111719',
    fontSize: responsiveFontSize(2.4),
  },
});

export default EditProfileScreen;
