import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{memo, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { url } from './url';



const HomeDrawer = (props) => {


  console.log('homedrawerrender>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>1');

  const profiledata = useSelector(state => state.auth.profiledata);

  // console.log("profiledata>>>>>>>>>>>>>",profiledata);


  const logout = async()=>{

    console.log('logout press>>>>>>>>>>>>>>>>>>>>>>>');
    await AsyncStorage.removeItem('isLoggedIn');
    await AsyncStorage.removeItem('token');
    props.navigation.navigate('LoginScreen');
  }

  
  
  

  const DrawerData = [
    {
      key: '1',
      name: 'MyOrderScreen',
      src: require('../assets/Document.png'),
      screen: 'MyOrder',
    },
    {
      key: '2',
      name: 'My Profile',
      src: require('../assets/profileicon.png'),
      screen: 'MyProfileScreen',
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

  const renderItem = ({ item }) => (
    <TouchableOpacity
      key={item?.key}
      style={styles.itemContainer}
      onPress={() => props.navigation.navigate(item?.screen)}>
      <View style={styles.iconContainer}>
        <Image source={item?.src} style={styles?.icon} />
      </View>
      <View>
        <Text style={styles?.itemText}>{item?.name}</Text>
      </View>
    </TouchableOpacity>
  );


  console.log('homedrawerrender>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>2');

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
            <Image source={({uri:`${url}${profiledata?.imgurl}`})?({uri:`${url}${profiledata?.imgurl}`}):(require('../assets/profileiconhd.png'))} style={styles.profileImage} />
          </View>
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>{profiledata?.fullName}</Text>
            <Text style={styles.profileEmail}>{profiledata?.email}</Text>
          </View>
        </View>

        <View style={styles.menuContainer}>
          <FlatList
            data={DrawerData}
            keyExtractor={(item) => item?.key}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
          />
        </View>
      </View>

      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutButton} 
         onPress={logout}
        >
          <View style={styles.logoutIconContainer}>
            <Image source={require('../assets/logoutbutton.png')} style={styles.logoutIcon} />
          </View>
          <View>
            <Text style={styles.logoutText}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor:'#FFF'
  },
  profileContainer: {
    marginTop: 30,
    marginLeft: 30,
  },
  profileImageContainer: {},
  profileImage: {
    height: 80,
    width: 80,
    borderRadius:50
  },
  profileTextContainer: {
    marginTop: 20,
  },
  profileName: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
  },
  profileEmail: {
    color: '#9EA1B1',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 10,
  },
  menuContainer: {
    marginTop: 50,
    marginLeft:30,
  },
  flatListContainer: {
    gap: 30,
  },
  itemContainer: {
    flexDirection: 'row',
    gap: 30,
  },
  iconContainer: {},
  icon: {
    height: 30,
    width: 30,
  },
  itemText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '400',
  },
  logoutContainer: {
    position: 'absolute',
    bottom: '1%',
    left: '10%',
  },
  logoutButton: {
    backgroundColor: '#FE724C',
    width:'80%',
    height:50,
    borderRadius: 28,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    alignItems: 'center',
  },
  logoutIconContainer: {},
  logoutIcon: {},
  logoutText: {
    color: 'white',
  },
});

export default memo(HomeDrawer);
