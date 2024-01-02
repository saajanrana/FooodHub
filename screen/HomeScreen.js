import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Header from '../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {url} from '../components/url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { profile } from '../context/AuthSlice';


const HomeScreen = props => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const usertoken = useSelector(state => state.auth.usertoken);
  const dispatch = useDispatch();

  const setasync = () => {
    AsyncStorage.setItem('isLoggedIn', 'true');
    AsyncStorage.setItem('token', usertoken);
  };
  useEffect(() => {
    if (isLoggedIn) {
      setasync();
      console.log("render home>>>>>");
    }
  }, []);






  useEffect(() => {


    const fetchdata = async () =>{
      console.log('ueeee>>>.',token);
      try {
        const response = await fetch(`${url}api/profile`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token||usertoken,
          },
        });

        console.log('token inside>>>>>>>>>>', token);
        console.log('token of usertoken>>>>', usertoken);

        console.log('hiiting the route>>>>');

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
    }

    fetchdata();
     
   
  }, []);

  console.log('userdata>>>>>',user);
  dispatch(profile(user));
  const fliterdata = [
    {
      key: '1',
      name: 'Assian',
      src: require('../assets/foodiconhd1.png'),
    },
    {
      key: '2',
      name: 'Burger',
      src: require('../assets/burgericonhd.png'),
    },
    {
      key: '3',
      name: 'Donat',
      src: require('../assets/foodiconhd2.png'),
    },
    {
      key: '4',
      name: 'Maxican',
      src: require('../assets/foodiconhd3.png'),
    },
    {
      key: '5',
      name: 'Pizaa',
      src: require('../assets/pizaiconhd.png'),
    },
  ];

  const featurerestdata = [
    {
      key: '1',
      name: 'McDonald’s',
      src: require('../assets/diss1.jpg'),
    },
    {
      key: '2',
      name: 'McDonald’s',
      src: require('../assets/diss1.jpg'),
    },
    {
      key: '3',
      name: 'McDonald’s',
      src: require('../assets/diss1.jpg'),
    },
    {
      key: '4',
      name: 'McDonald’s',
      src: require('../assets/diss1.jpg'),
    },
    {
      key: '5',
      name: 'McDonald’s',
      src: require('../assets/diss1.jpg'),
    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{
        backgroundColor: '#FFFFFF',
        shadowOpacity: 10,
        elevation: 6,
        shadowColor: 'light-brown',
        borderRadius: 40,
        height: '90%',
        width: 70,
        justifyContent: 'center',
      }}>
      <View style={{alignItems: 'center'}}>
        <Image source={item.src} style={{width: 40, height: 40}} />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.filtername}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
  const renderfeaturerest = ({item}) => (
    <TouchableOpacity
      style={styles.featuredRestaurantContainerr}
      onPress={() => props.navigation.navigate('FoodDetail')}>
      <Image source={item.src} style={styles.featuredRestaurantImage} />

      <View style={styles.featuredRestaurantDetailsContainer}>
        <Text style={styles.featuredRestaurantName}>{item.name}</Text>
        <View style={styles.featuredRestaurantInfoContainer}>
          <Text style={styles.featuredRestaurantInfoText}>Free delivery</Text>
          <Text style={styles.featuredRestaurantInfoText}>10-15 mins</Text>
        </View>

        <Text
          style={{
            color: '#8A8E9B',
            fontSize: 12,
            fontWeight: '400',
          }}>
          Burger
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header
          onPressMenu={() => props.navigation.openDrawer()}
          isMenu={true}
        />
        {/* <View style={styles.deliveryInfoContainer}>
            <Text>Delivery To --</Text>
            <Text>4102 Pretty View Lane</Text>
          </View> */}
        <View style={styles.profileImageContainer}>
          <TouchableOpacity onPress={()=>props.navigation.navigate('MyProfileScreen')}>
            <Image
              style={styles.profileImage}
              source={require('../assets/usericon.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>What would you like to order</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Find for food or restaurant..."
            style={styles.inputText}
          />
        </View>

        <TouchableOpacity style={styles.filterIconContainer}>
          <Image
            source={require('../assets/filtericonhd.png')}
            style={styles.filterIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.filterContainer}>
        <FlatList
          data={fliterdata}
          keyExtractor={item => item.key}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainerone}
        />
      </View>

      <View style={styles.featuredRestaurantsContainer}>
        <View style={styles.featuredRestaurantsHeader}>
          <Text style={styles.featuredRestaurantsHeaderText}>
            Featured Restaurants
          </Text>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('ViewScreen')}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={featurerestdata}
        keyExtractor={item => item.key}
        renderItem={renderfeaturerest}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCFCFD',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding:'5%',
  },
  deliveryInfoContainer: {},
  profileImageContainer: {
    marginTop: '5%',
    marginRight: '7%',
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 10,
  },
  titleContainer: {
    marginLeft: '7%',
  },
  titleText: {
    color: '#323643',
    fontWeight: '800',
    fontSize: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '7%',
    marginRight: '7%',
    marginTop: '3%',
    height: '8%',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#EFEFEF',
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    borderRadius: 10,
  },
  inputText: {
    color: '#9AA0B4',
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 10,
  },
  filterIconContainer: {
    height: '100%',
    width: '20%',
  },
  filterIcon: {
    // width: '100%',
    // height: '100%',
  },
  filterContainer: {
    // marginLeft: 20,
    marginTop: '5%',
    width: '100%',
    height: '18%',
  },

  flatListContainerone: {
    paddingLeft: '7%',
    paddingRight: '7%',
    gap: 12,
    flexGrow:1
  },
  flatListContainer: {
    paddingLeft: '7%',
    paddingRight: '7%',
    gap: 12,
    flexGrow: 1,
  },
  featuredRestaurantsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '7%',
    marginRight: '7%',
  },
  featuredRestaurantsHeader: {},
  featuredRestaurantsHeaderText: {
    color: '#323643',
    fontSize: 18,
    fontWeight: '600',
  },
  viewAllText: {
    color: '#F56844',
    fontWeight: '400',
    fontSize: 14,
    marginTop: '3%',
  },
  featuredRestaurantContainerr: {
    width: 300,
    height: 300,
    borderRadius: 20,
    marginTop: 20,
  },
  featuredRestaurantImageContainer: {
    width: 500,
    height: '45%',
  },
  featuredRestaurantImage: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  featuredRestaurantDetailsContainer: {
    backgroundColor: '#FFF',
    padding: 10,
    paddingBottom: 0,
    width: '100%',
    height: '40%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  featuredRestaurantName: {
    color: '#000',
    fontSize: 15,
    fontWeight: '600',
  },
  featuredRestaurantInfoContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  featuredRestaurantInfoText: {
    color: '#7E8392',
    fontSize: 12,
    fontWeight: '400',
  },
  featuredRestaurantCategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  featuredRestaurantCategoryText: {
    width: 70,
    flexWrap: 'wrap',
    borderRadius: 5,
    marginLeft: 10,
    fontSize: 12,
    fontWeight: 400,
    textAlign: 'center',
  },
});

export default HomeScreen;
