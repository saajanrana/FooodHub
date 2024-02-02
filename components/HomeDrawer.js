import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {memo, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {url} from './url';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const HomeDrawer = props => {
  console.log('homedrawerrender>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>1');

  const profiledata = useSelector(state => state.auth.profiledata);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  // console.log("profiledata>>>>>>>>>>>>>",profiledata);

  const logout = async () => {
    console.log('logout press>>>>>>>>>>>>>>>>>>>>>>>');
    await AsyncStorage.removeItem('isLoggedIn');
    await AsyncStorage.removeItem('token');
    props.navigation.navigate('LoginScreen');
  };

  const DrawerData = [
    {
      key: '1',
      name: 'MyOrderScreen',
      src: require('../assets/Document.png'),
      screen: 'MyOrder',
      icon: 'reader-outline',
    },
    {
      key: '2',
      name: 'My Profile',
      src: require('../assets/profileicon.png'),
      screen: 'MyProfileScreen',
      icon: 'person-circle-outline',
    },
    // {
    //   key: '3',
    //   name: 'Delivery Address',
    //   src: require('../assets/Location.png'),
    //   screen: 'DeliveryAddress',
    // },
    // {
    //   key: '4',
    //   name: 'Payment Methods',
    //   src: require('../assets/Wallet.png'),
    //   screen: 'PaymentMethods',
    // },
    // {
    //   key: '5',
    //   name: 'Contact Us',
    //   src: require('../assets/Message.png'),
    //   screen: 'ContactUs',
    // },
    // {
    //   key: '6',
    //   name: 'Settings',
    //   src: require('../assets/Setting.png'),
    //   screen: 'Settings',
    // },
    // {
    //   key: '7',
    //   name: 'Helps & FAQs',
    //   src: require('../assets/Helps.png'),
    //   screen: 'HelpandFaq',
    // },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      key={item?.key}
      style={styles.itemContainer}
      onPress={() => props.navigation.navigate(item?.screen)}>
      <Icon name={item?.icon} style={styles.iconsize} color="gray" />

      <Text style={styles?.itemText}>{item?.name}</Text>
    </TouchableOpacity>
  );

  console.log('homedrawerrender>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>2');

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={
            {uri: `${url}${profiledata?.imgurl}`}
              ? {uri: `${url}${profiledata?.imgurl}`}
              : require('../assets/profileiconhd.png')
          }
          style={styles.profileImage}
        />

        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>{profiledata?.fullName}</Text>
          <Text style={styles.profileEmail}>{profiledata?.email}</Text>
        </View>
      </View>

      <FlatList
        data={DrawerData}
        keyExtractor={item => item?.key}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />

      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <View style={styles.logoutIconContainer}>
          <Icon name="power-sharp" style={styles.iconsize} color="white" />
        </View>
        <View>
          <Text style={styles.logoutText}>Log Out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   

    backgroundColor: '#FFF',
  },
  profileContainer: {
    marginTop: responsiveHeight(6),
    marginLeft: responsiveWidth(4),
  },

  profileImage: {
    height: responsiveHeight(11.5),
    width: responsiveWidth(Dimensions.get('window').width >= 600 ? 16 : 23),
    borderRadius: responsiveWidth(12),
  },
  profileTextContainer: {
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(1),
  },
  profileName: {
    color: '#000',
    fontSize: responsiveFontSize(2.5),
    fontFamily: 'Gilroy-SemiBold',
  },
  profileEmail: {
    color: '#9EA1B1',
    fontSize: responsiveFontSize(
      Dimensions.get('window').width >= 600 ? 1.5 : 2.2,
    ),
    fontFamily: 'Gilroy-Regular',
    marginTop: responsiveHeight(1),
  },

  flatListContainer: {
    marginLeft: responsiveWidth(1),
    marginTop: responsiveHeight(5),
    gap: responsiveHeight(2),
  },
  itemContainer: {
    flexDirection: 'row',
    gap: responsiveWidth(2),
  },

  itemText: {
    color: '#000',
    fontSize: responsiveFontSize(
      Dimensions.get('window').width >= 600 ? 1.4 : 2,
    ),
  },

  logoutButton: {
    position: 'absolute',
    bottom: responsiveHeight(1),
    left: responsiveWidth(3),
    backgroundColor: '#FE724C',
    width: responsiveWidth(25),
    height: responsiveHeight(7),
    borderRadius: responsiveWidth(10),
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  logoutText: {
    fontSize: responsiveFontSize(1.8),
    color: 'white',
    fontFamily: 'Gilroy-Medium',
  },
  iconsize: {
    fontSize: responsiveFontSize(Dimensions.get('window').width >= 600 ? 3 : 4),
  },
});

export default memo(HomeDrawer);
