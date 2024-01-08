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


  const featurerestdata = [

    {
      id:1,
      foodname:'Ground Beef Tacos',
      price:'9.5',
      fooddetails:`Brown the beef better. Lean ground beef – I like to use 85% leanangus. Garlic – use fresh chopped. Spices – chili powder, cumin, onion powder.`,
      rating:'4.5',
      imgsrc :require('../assets/somemoredis.jpg'),
      taxandfee:'5.30',
      delivery:'1.00',
    },
    {
      id: 2,
      foodname: 'Margherita Pizza',
      price: '12.99',
      fooddetails: 'Classic pizza with tomato, mozzarella, and basil.',
      rating: '4.8',
      imgsrc: require('../assets/pizadis.jpg'),
      taxandfee: '6.50',
      delivery: '1.50',
    },
    {
      id: 3,
      foodname: 'Chicken Caesar Salad',
      price: '8.99',
      fooddetails: 'Fresh salad with grilled chicken, romaine lettuce, and Caesar dressing.',
      rating: '4.6',
      imgsrc: require('../assets/saladdis.jpg'),
      taxandfee: '4.00',
      delivery: '0.75',
    },
    {
      id: 4,
      foodname: 'Spaghetti Bolognese',
      price: '10.50',
      fooddetails: 'Classic Italian dish with ground beef, tomatoes, and pasta.',
      rating: '4.7',
      imgsrc: require('../assets/somedisss.jpg'),
      taxandfee: '5.75',
      delivery: '1.25',
    },
  ];

  const viewallitem = [

    {
      id: 1,
      foodname: 'Ground Beef Tacos',
      price: '9.5',
      fooddetails: 'Brown the beef better. Lean ground beef – I like to use 85% leanangus. Garlic – use fresh chopped. Spices – chili powder, cumin, onion powder.',
      rating: '4.5',
      imgsrc: require('../assets/somemoredis.jpg'),
      taxandfee: '5.30',
      delivery: '1.00',
      featured:true
    },
    {
      id: 2,
      foodname: 'Margherita Pizza',
      price: '12.99',
      fooddetails: 'Classic pizza with tomato, mozzarella, and basil.',
      rating: '4.8',
      imgsrc: require('../assets/pizadis.jpg'),
      taxandfee: '6.50',
      delivery: '1.50',
      featured:true
    },
    {
      id: 3,
      foodname: 'Chicken Caesar Salad',
      price: '8.99',
      fooddetails: 'Fresh salad with grilled chicken, romaine lettuce, and Caesar dressing.',
      rating: '4.6',
      imgsrc: require('../assets/saladdis.jpg'),
      taxandfee: '4.00',
      delivery: '0.75',
      featured:true
    },
    {
      id: 4,
      foodname: 'Spaghetti Bolognese',
      price: '10.50',
      fooddetails: 'Classic Italian dish with ground beef, tomatoes, and pasta.',
      rating: '4.7',
      imgsrc: require('../assets/somedisss.jpg'),
      taxandfee: '5.75',
      delivery: '1.25',
      featured:true
    },
    {
      id: 5,
      foodname: 'Grilled Salmon',
      price: '15.99',
      fooddetails: 'Freshly grilled salmon with lemon and herbs.',
      rating: '4.9',
      imgsrc: require('../assets/dissss1.jpg'),
      taxandfee: '7.00',
      delivery: '1.75',
      featured:true
    },
    {
      id: 6,
      foodname: 'Vegetarian Sushi Roll',
      price: '11.50',
      fooddetails: 'Delicious vegetarian sushi roll with avocado and cucumber.',
      rating: '4.6',
      imgsrc: require('../assets/dissss2.jpg'),
      taxandfee: '5.50',
      delivery: '1.20',
    },
    {
      id: 7,
      foodname: 'Cheeseburger',
      price: '8.99',
      fooddetails: 'Classic cheeseburger with beef patty, cheese, lettuce, and tomato.',
      rating: '4.5',
      imgsrc: require('../assets/dissss2.jpg'),
      taxandfee: '4.50',
      delivery: '0.80',
    },
    {
      id: 8,
      foodname: 'Caesar Wrap',
      price: '7.50',
      fooddetails: 'Caesar salad wrapped in a tortilla for a convenient and tasty meal.',
      rating: '4.3',
      imgsrc: require('../assets/dissss3.jpg'),
      taxandfee: '3.50',
      delivery: '0.60',
    },
    {
      id: 9,
      foodname: 'BBQ Chicken Wings',
      price: '11.99',
      fooddetails: 'Spicy and flavorful BBQ chicken wings, perfect for sharing.',
      rating: '4.7',
      imgsrc: require('../assets/dissss4.jpg'),
      taxandfee: '5.25',
      delivery: '1.10',
    },
    {
      id: 10,
      foodname: 'Mango Tango Smoothie',
      price: '5.99',
      fooddetails: 'Refreshing smoothie with mango, banana, and a hint of lime.',
      rating: '4.4',
      imgsrc: require('../assets/dissss5.jpg'),
      taxandfee: '2.50',
      delivery: '0.50',
    },

    {
      id: 11,
      foodname: 'Vegetable Stir-Fry',
      price: '9.99',
      fooddetails: 'Assorted vegetables stir-fried to perfection with a savory sauce.',
      rating: '4.5',
      imgsrc: require('../assets/dissss6.jpg'),
      taxandfee: '4.20',
      delivery: '0.90',
    },
    {
      id: 12,
      foodname: 'Caprese Salad',
      price: '8.50',
      fooddetails: 'Classic Caprese salad with fresh tomatoes, mozzarella, and basil.',
      rating: '4.8',
      imgsrc: require('../assets/dissss7.jpg'),
      taxandfee: '3.75',
      delivery: '0.70',
    },
    {
      id: 13,
      foodname: 'Shrimp Scampi Pasta',
      price: '14.75',
      fooddetails: 'Delicious pasta dish with garlic, white wine, and succulent shrimp.',
      rating: '4.7',
      imgsrc: require('../assets/dissss8.jpg'),
      taxandfee: '6.00',
      delivery: '1.20',
    },
    {
      id: 14,
      foodname: 'Avocado Toast',
      price: '6.99',
      fooddetails: 'Healthy and tasty avocado toast with a sprinkle of salt and pepper.',
      rating: '4.6',
      imgsrc: require('../assets/dissss9.jpg'),
      taxandfee: '3.00',
      delivery: '0.50',
    },
    {
      id: 15,
      foodname: 'Beef and Broccoli',
      price: '11.25',
      fooddetails: 'Savory beef and broccoli stir-fry served with steamed rice.',
      rating: '4.9',
      imgsrc: require('../assets/dissss10.jpg'),
      taxandfee: '5.50',
      delivery: '1.10',
    },
    {
      id: 16,
      foodname: 'Mediterranean Hummus Wrap',
      price: '10.50',
      fooddetails: 'Wrap filled with hummus, roasted vegetables, and feta cheese.',
      rating: '4.5',
      imgsrc: require('../assets/dissss1.jpg'),
      taxandfee: '4.80',
      delivery: '0.95',
    },
    {
      id: 17,
      foodname: 'Chocolate Lava Cake',
      price: '7.99',
      fooddetails: 'Indulgent chocolate lava cake with a gooey center.',
      rating: '4.8',
      imgsrc: require('../assets/dissss2.jpg'),
      taxandfee: '3.50',
      delivery: '0.60',
    },
    {
      id: 18,
      foodname: 'Greek Gyro',
      price: '12.50',
      fooddetails: 'Authentic Greek gyro with seasoned meat, tzatziki, and veggies.',
      rating: '4.6',
      imgsrc: require('../assets/dissss3.jpg'),
      taxandfee: '5.75',
      delivery: '1.25',
    },
    {
      id: 19,
      foodname: 'Berry Blast Smoothie Bowl',
      price: '8.25',
      fooddetails: 'Acai bowl with a blend of berries, granola, and coconut.',
      rating: '4.7',
      imgsrc: require('../assets/dissss4.jpg'),
      taxandfee: '3.80',
      delivery: '0.75',
    },
    {
      id: 20,
      foodname: 'Crispy Tofu Tacos',
      price: '10.99',
      fooddetails: 'Tacos filled with crispy tofu, salsa, and fresh toppings.',
      rating: '4.4',
      imgsrc: require('../assets/dissss5.jpg'),
      taxandfee: '4.50',
      delivery: '1.00',
    },

  ]






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
      onPress={() => props.navigation.navigate('FoodDetail',{foodId:item?.id})}>
      <Image source={item?.imgsrc} style={styles.featuredRestaurantImage} />

      <View style={styles.featuredRestaurantDetailsContainer}>
        <Text style={styles.featuredRestaurantName}>{item?.foodname}</Text>
        <View style={styles.featuredRestaurantInfoContainer}>
          <Text style={styles.featuredRestaurantInfoText}>${item?.delivery}</Text>
          <Text style={styles.featuredRestaurantInfoText}>10-15 mins</Text>
        </View>

        {/* <Text
          style={{
            color: '#8A8E9B',
            fontSize: 12,
            fontWeight: '400',
          }}>
          Burger
        </Text> */}
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
          keyExtractor={item => item.id}
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
      <View style={{height:30}}>
         
      </View>
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
