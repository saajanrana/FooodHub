import React,{useEffect, useState}from 'react';
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
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import { url } from '../components/url';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = (props) => {

  const [token,setToken] = useState();
  const [user,setUser] = useState();

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const usertoken = useSelector(state => state.auth.usertoken);

  
  const setasync = ()=> {
     AsyncStorage.setItem('isLoggedIn','true');
     AsyncStorage.setItem('token',usertoken);
    //  e.preventDefault(); 

  } 
  useEffect(()=>{
    if(isLoggedIn) {
      setasync();

 }

},[]);

 const gettoke= async () =>{
        const usertok =   await AsyncStorage.getItem('token');
        setToken(usertok);
 }


gettoke();

 console.log('tokeen>>>>>>>>>>>>>>>>>',token);


useEffect(()=>{
const profiledata = async() =>{
  // const userToken = token; // Replace with the actual token
      console.log('ueeee>>>.',token);
  try {
    const response = await fetch(`${url}api/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token?token:usertoken
      },
    });

    console.log("token inside>>>>>>>>>>",token);
    console.log("token of usertoken>>>>",usertoken);

    console.log("hiiting the route>>>>");

    console.log("res>>>>>>>>>>>>>>",response);

    if (response.ok) {
      const userData = await response.json();
      console.log('userdatrainside>>>>>>>',userData);
      setUser(userData);
    } else {
      console.error('Error fetching user profile:', response.statusText);
    }
  } catch (error) {
    console.error('Error fetching user profile:', error.message);
  }
}
    profiledata();
},[]);


console.log('userdata>>>>>',user);



    


  const fliterdata = [
    {
      key: '1',
      name: 'Assian',
      src: require('../assets/asian.jpg'),
    },
    {
      key: '2',
      name: 'Burger',
      src: require('../assets/burger.png'),
    },
    {
      key: '3',
      name: 'Donat',
      src: require('../assets/donat.png'),
    },
    {
      key: '4',
      name: 'Maxican',
      src: require('../assets/mexican.png'),
    },
    {
      key: '5',
      name: 'Pizaa',
      src: require('../assets/pizaa.jpg'),
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

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <View>
        <Image source={item.src} style={styles.filterimgae} />
      </View>
      <View>
        <Text style={styles.filtername}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
  const renderfeaturerest = ({ item }) => (
    <TouchableOpacity
      style={styles.featuredRestaurantContainer}
      onPress={() => props.navigation.navigate('FoodDetail')}
    >
      <View style={styles.featuredRestaurantImageContainer}>
        <Image
          source={item.src}
          style={styles.featuredRestaurantImage}
        />
      </View>
      <View style={styles.featuredRestaurantDetailsContainer}>
        <Text style={styles.featuredRestaurantName}>{item.name}</Text>
        <View style={styles.featuredRestaurantInfoContainer}>
          <Text style={styles.featuredRestaurantInfoText}>Free delivery</Text>
          <Text style={styles.featuredRestaurantInfoText}>10-15 mins</Text>
        </View>
        <View style={styles.featuredRestaurantCategoryContainer}>
        
          <View
            style={{
              width: 70,
              flexWrap: 'wrap',
              backgroundColor: 'lightgray', 
              borderRadius: 5,
              marginLeft: 10,
            }}
          >
            <Text
              style={{
                color: '#8A8E9B',
                fontSize: 12,
                fontWeight: '400',
                textAlign: 'center',
              }}
            >
              Burger
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Header
            onPressMenu={() => props.navigation.openDrawer()}
            isMenu={true}
          />
          <View style={styles.deliveryInfoContainer}>
            <Text>Delivery To --</Text>
            <Text>4102 Pretty View Lane</Text>
          </View>
          <View style={styles.profileImageContainer}>
            <TouchableOpacity>  
            <Image
              style={styles.profileImage}
              source={require('../assets/food.png')}
            />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            What would you like to order
          </Text>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Find for food or restaurant..."
              style={styles.inputText}
            />
          </View>
          <View style={styles.filterIconContainer}>
            <TouchableOpacity>
              <Image
                source={require('../assets/fliter.png')}
                style={styles.filterIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.filterContainer}>
          <FlatList
            data={fliterdata}
            keyExtractor={(item) => item.key}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
          />
        </View>
        <View style={styles.featuredRestaurantsContainer}>
          <View style={styles.featuredRestaurantsHeader}>
            <Text style={styles.featuredRestaurantsHeaderText}>
              Featured Restaurants
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={featurerestdata}
            keyExtractor={(item) => item.key}
            renderItem={renderfeaturerest}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCFCFD',
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  deliveryInfoContainer: {
    marginLeft: 10,
  },
  profileImageContainer: {
    marginLeft: 10,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 20,
  },
  titleContainer: {
    marginLeft: 30,
    marginRight: 40,
  },
  titleText: {
    color: '#323643',
    fontWeight: '700',
    fontSize: 30,
  },
  searchContainer: {
    flexDirection: 'row',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#EFEFEF',
    width: 300,
    height: 71,
    marginLeft: 30,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 15,
  },
  inputText: {
    color: '#9AA0B4',
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 10,
  },
  filterIconContainer: {
    height: '100%',
    width: '100%',
  },
  filterIcon: {
    width: 110,
    height: 110,
  },
  filterContainer: {
    marginLeft: 20,
  },
  flatListContainer: {
    padding: 30,
    gap: 20,
    flexGrow: 1,
  },
  featuredRestaurantsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 25,
    paddingRight: 25,
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
    marginTop: 5,
  },
  featuredRestaurantContainer: {
    width: 290,
    height: 240,
    borderRadius: 20,
    marginTop: 20,
  },
  featuredRestaurantImageContainer: {
    width: '100%',
    height: '60%',
  },
  featuredRestaurantImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  featuredRestaurantDetailsContainer: {
    backgroundColor: '#FFF',
    padding: 10,
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
    backgroundColor: 'light-gray',
    borderRadius: 5,
    marginLeft: 10,
    color: '#8A8E9B',
    fontSize: 12,
    fontWeight: 400,
    textAlign: 'center',
  },
});

export default HomeScreen;
