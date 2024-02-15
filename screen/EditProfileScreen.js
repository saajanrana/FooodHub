import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';
import {useSelector} from 'react-redux';
import {url} from '../components/url';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const EditProfileScreen = ({navigation}) => {
  const [user, setUser] = useState({});
  const usertoken = useSelector(state => state.auth.usertoken);

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const isTablet = screenWidth >= 600;

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
      <View style={styles.headercontainer}>
       <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headertouchbtn}>
          <Icon
            name="arrow-back-ios"
            style={styles.backbtn}
            color="black"
          />
        </TouchableOpacity>

         <Text style={styles.headertxt}>Edit Page</Text>
      </View>

      <View style={{gap:responsiveWidth(3),marginTop:responsiveHeight(2)}}>
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
            editable={false}
            onChangeText={text => setUser({...user, email: text})}
          />
       
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Phone-No</Text>
        
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
      </View>
      <View style={styles.savebtncontainer}>
        <TouchableOpacity
          style={styles.savebtn}
          onPress={changedata}>
          <Text style={styles.savebtntxt}>
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
  headercontainer:{
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:responsiveWidth(5),
    marginTop:responsiveHeight(2)
  },
    headertouchbtn: {
      backgroundColor: '#FFFFFF',
      elevation: 5,
      shadowColor: 'light-brown',
      width: responsiveWidth(Dimensions.get('window').width >= 600 ? 10 : 13),
      height: responsiveHeight(6),
      borderRadius: responsiveWidth(2.5),
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    backbtn: {
      marginLeft:responsiveWidth(2),
      fontSize: responsiveFontSize(3),
    },
    headertxt:{ fontSize:responsiveFontSize(3),fontFamily:'Gilroy-Bold',color:'black',textAlign:"center",marginLeft:responsiveWidth(15)},
    optionlastbtn:{
     
    },
  inputContainer: {
    marginLeft: responsiveWidth(6),
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
    fontSize: responsiveFontSize(2.4),
    borderRadius: responsiveWidth(2),
    paddingLeft: responsiveWidth(5),
    fontFamily: 'Gilroy-Medium',
    color: 'black',
  },
  inputtxt: {
    color: '#111719',
    fontSize: responsiveFontSize(2.4),
  },
  savebtncontainer:{marginTop:responsiveHeight(2),marginBottom:responsiveHeight(1) ,alignItems: 'center'},
  savebtn:{
    width:responsiveWidth(60),
    height: responsiveHeight(8),
    backgroundColor: '#FE724C',
    borderRadius:responsiveWidth(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  savebtntxt:{color: '#FFF', fontSize:responsiveFontSize(2.6), fontWeight: '600'}
});

export default EditProfileScreen;
