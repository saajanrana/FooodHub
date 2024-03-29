import React, {useEffect, useMemo, useState, memo} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  FlatList,
  ScrollView,
  Dimensions,
  Modal,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';


import Header from '../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {url} from '../components/url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {profile} from '../context/AuthSlice';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Animated from 'react-native-reanimated';

import Carousel from '../components/Carousel';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import LoadingScreen from './LoadingScreen';

const HomeScreen = props => {
  const [loadingg, setLoadingg] = useState(true);
  const [user, setUser] = useState();

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const usertoken = useSelector(state => state.auth.usertoken);

  const dispatch = useDispatch();
  const profiledata = useSelector(state => state.auth.profiledata);
  const [FilterModalVisible, setFilterModalVisible] = useState(false);

  const openFilterModal = () => {
    setFilterModalVisible(true);
  };

  const closeFilterModal = () => {
    setFilterModalVisible(false);
  };

  const handleFilterOptionSelected = option => {
    // Handle the selected filter option
    console.log('Selected Filter Option:', option);

    // Close the modal after selecting an option
    closeFilterModal();
  };

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const isTablet = screenWidth >= 600;
  const profileimge = require('../assets/profile.png');

  const loading = () => {
    setInterval(() => {
      setLoadingg(false);
    }, 1000);
  };
  loading();

  const setasync = () => {
    AsyncStorage.setItem('isLoggedIn', 'true');
    AsyncStorage.setItem('token', usertoken);
  };
  useEffect(() => {
    if (isLoggedIn) {
      setasync();
      console.log('render inside useeffect for login>>>>>');
    }
  }, []);

  const viewallitem = [
    {
      id: 1,
      foodname: 'Ground Beef Tacos',
      price: '9.5',
      fooddetails:
        'Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh chopped. Spices – chili powder, cumin, onion powder.',
      rating: '4.5',
      imgsrc: require('../assets/somemoredis.jpg'),
      taxandfee: '5.30',
      delivery: '1.00',
      featured: false,
      tag: 'pizza',
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
      featured: false,
      tag: 'pizza',
    },
    {
      id: 3,
      foodname: 'Chicken Caesar Salad',
      price: '8.99',
      fooddetails:
        'Fresh salad with grilled chicken, romaine lettuce, and Caesar dressing.',
      rating: '4.6',
      imgsrc: require('../assets/saladdis.jpg'),
      taxandfee: '4.00',
      delivery: '0.75',
      featured: false,
      tag: 'salad',
    },
    {
      id: 4,
      foodname: 'Spaghetti Bolognese',
      price: '10.50',
      fooddetails:
        'Classic Italian dish with ground beef, tomatoes, and pasta.',
      rating: '4.7',
      imgsrc: require('../assets/somedisss.jpg'),
      taxandfee: '5.75',
      delivery: '1.25',
      featured: false,
      tag: 'pasta',
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
      featured: false,
      tag: 'sushi',
    },
    {
      id: 7,
      foodname: 'Cheeseburger',
      price: '8.99',
      fooddetails:
        'Classic cheeseburger with beef patty, cheese, lettuce, and tomato.',
      rating: '4.5',
      imgsrc: require('../assets/dissss2.jpg'),
      taxandfee: '4.50',
      delivery: '0.80',
      featured: false,
      tag: 'burger',
    },
    {
      id: 8,
      foodname: 'Caesar Wrap',
      price: '7.50',
      fooddetails:
        'Caesar salad wrapped in a tortilla for a convenient and tasty meal.',
      rating: '4.3',
      imgsrc: require('../assets/dissss3.jpg'),
      taxandfee: '3.50',
      delivery: '0.60',
      featured: false,
      tag: 'wrap',
    },
    {
      id: 9,
      foodname: 'BBQ Chicken Wings',
      price: '11.99',
      fooddetails:
        'Spicy and flavorful BBQ chicken wings, perfect for sharing.',
      rating: '4.7',
      imgsrc: require('../assets/dissss4.jpg'),
      taxandfee: '5.25',
      delivery: '1.10',
      featured: false,
      tag: 'wings',
    },
    {
      id: 10,
      foodname: 'Mango Tango Smoothie',
      price: '5.99',
      fooddetails:
        'Refreshing smoothie with mango, banana, and a hint of lime.',
      rating: '4.4',
      imgsrc: require('../assets/dissss5.jpg'),
      taxandfee: '2.50',
      delivery: '0.50',
      featured: false,
      tag: 'smoothie',
    },

    {
      id: 11,
      foodname: 'Vegetable Stir-Fry',
      price: '9.99',
      fooddetails:
        'Assorted vegetables stir-fried to perfection with a savory sauce.',
      rating: '4.5',
      imgsrc: require('../assets/dissss6.jpg'),
      taxandfee: '4.20',
      delivery: '0.90',
      featured: false,
      tag: 'smoothie',
    },
    {
      id: 12,
      foodname: 'Caprese Salad',
      price: '8.50',
      fooddetails:
        'Classic Caprese salad with fresh tomatoes, mozzarella, and basil.',
      rating: '4.8',
      imgsrc: require('../assets/dissss7.jpg'),
      taxandfee: '3.75',
      delivery: '0.70',
      featured: false,
      tag: 'smoothie',
    },
    {
      id: 13,
      foodname: 'Shrimp Scampi Pasta',
      price: '14.75',
      fooddetails:
        'Delicious pasta dish with garlic, white wine, and succulent shrimp.',
      rating: '4.7',
      imgsrc: require('../assets/dissss8.jpg'),
      taxandfee: '6.00',
      delivery: '1.20',
      featured: false,
      tag: 'smoothie',
    },
    {
      id: 14,
      foodname: 'Avocado Toast',
      price: '6.99',
      fooddetails:
        'Healthy and tasty avocado toast with a sprinkle of salt and pepper.',
      rating: '4.6',
      imgsrc: require('../assets/dissss9.jpg'),
      taxandfee: '3.00',
      delivery: '0.50',
      featured: false,
      tag: 'smoothie',
    },
    {
      id: 15,
      foodname: 'Beef and Broccoli',
      price: '11.25',
      fooddetails:
        'Savory beef and broccoli stir-fry served with steamed rice.',
      rating: '4.9',
      imgsrc: require('../assets/dissss10.jpg'),
      taxandfee: '5.50',
      delivery: '1.10',
      featured: false,
      tag: 'smoothie',
    },
    {
      id: 21,
      foodname: 'Classic Margherita Pizza',
      price: '12.99',
      fooddetails:
        'A timeless favorite topped with fresh tomato, mozzarella, and basil.',
      rating: '4.8',
      imgsrc: require('../assets/pizaa1.jpg'),
      taxandfee: '6.50',
      delivery: '1.50',
      featured: false,
      tag: 'pizza',
    },
    {
      id: 22,
      foodname: 'Pepperoni Passion Pizza',
      price: '11.50',
      fooddetails:
        'Loaded with zesty pepperoni slices for a flavorful experience.',
      rating: '4.7',
      imgsrc: require('../assets/pizaa2.jpg'),
      taxandfee: '5.75',
      delivery: '1.25',
      featured: false,
      tag: 'pizza',
    },
    {
      id: 23,
      foodname: 'Vegetarian Supreme Pizza',
      price: '13.99',
      fooddetails:
        'An assortment of fresh vegetables and olives on a bed of cheesy goodness.',
      rating: '4.6',
      imgsrc: require('../assets/pizaa3.jpg'),
      taxandfee: '6.75',
      delivery: '1.50',
      featured: false,
      tag: 'pizza',
    },
    {
      id: 24,
      foodname: 'BBQ Chicken Delight Pizza',
      price: '14.50',
      fooddetails:
        'Succulent BBQ chicken, red onions, and cilantro make this pizza a hit.',
      rating: '4.9',
      imgsrc: require('../assets/pizaa4.jpg'),
      taxandfee: '7.00',
      delivery: '1.75',
      featured: false,
      tag: 'pizza',
    },
    {
      id: 25,
      foodname: 'Hawaiian Luau Pizza',
      price: '10.99',
      fooddetails:
        'A tropical delight with ham, pineapple, and a sprinkle of sunshine.',
      rating: '4.5',
      imgsrc: require('../assets/pizaa5.jpg'),
      taxandfee: '5.25',
      delivery: '1.00',
      featured: false,
      tag: 'pizza',
    },
    {
      id: 26,
      foodname: "Meat Lover's Feast Pizza",
      price: '15.99',
      fooddetails:
        "A carnivore's dream featuring a medley of savory meats and sausage.",
      rating: '4.8',
      imgsrc: require('../assets/pizaa6.jpg'),
      taxandfee: '7.50',
      delivery: '1.80',
      featured: false,
      tag: 'pizza',
    },
    {
      id: 27,
      foodname: 'White Garlic Parmesan Pizza',
      price: '12.75',
      fooddetails:
        "A garlic lover's paradise with creamy white sauce and parmesan.",
      rating: '4.7',
      imgsrc: require('../assets/pizaa7.jpg'),
      taxandfee: '6.25',
      delivery: '1.30',
      featured: false,
      tag: 'pizza',
    },
    {
      id: 28,
      foodname: 'Mushroom Madness Pizza',
      price: '11.99',
      fooddetails:
        'A fungi-filled delight with assorted mushrooms and truffle oil.',
      rating: '4.6',
      imgsrc: require('../assets/pizaa8.jpg'),
      taxandfee: '5.80',
      delivery: '1.10',
      featured: false,
      tag: 'pizza',
    },
    {
      id: 29,
      foodname: 'Supreme Seafood Pizza',
      price: '16.50',
      fooddetails:
        'A seafood extravaganza featuring shrimp, clams, and calamari.',
      rating: '4.9',
      imgsrc: require('../assets/pizaa9.jpg'),
      taxandfee: '7.80',
      delivery: '1.90',
      featured: false,
      tag: 'pizza',
    },

    {
      id: 31,
      foodname: 'Classic Cheeseburger',
      price: '8.99',
      fooddetails:
        'A timeless favorite featuring a juicy beef patty and melted cheese.',
      rating: '4.5',
      imgsrc: require('../assets/burger1.jpg'),
      taxandfee: '4.50',
      delivery: '1.00',
      featured: false,
      tag: 'burger',
    },
    {
      id: 32,
      foodname: 'Bacon BBQ Burger',
      price: '10.50',
      fooddetails:
        'Savory bacon, tangy BBQ sauce, and a perfectly grilled burger patty.',
      rating: '4.7',
      imgsrc: require('../assets/burger2.jpg'),
      taxandfee: '5.25',
      delivery: '1.25',
      featured: false,
      tag: 'burger',
    },
    {
      id: 33,
      foodname: 'Veggie Delight Burger',
      price: '9.75',
      fooddetails:
        'A flavorful vegetarian option with a plant-based patty and fresh veggies.',
      rating: '4.6',
      imgsrc: require('../assets/burger3.jpg'),
      taxandfee: '4.75',
      delivery: '1.10',
      featured: false,
      tag: 'burger',
    },
    {
      id: 34,
      foodname: 'Spicy Jalapeno Burger',
      price: '11.99',
      fooddetails:
        'Kick up the heat with sliced jalapenos and spicy mayo on a beef patty.',
      rating: '4.8',
      imgsrc: require('../assets/burger4.jpg'),
      taxandfee: '6.00',
      delivery: '1.30',
      featured: false,
      tag: 'burger',
    },
    {
      id: 35,
      foodname: 'Mushroom Swiss Burger',
      price: '10.25',
      fooddetails:
        'A savory combination of sautéed mushrooms and melted Swiss cheese.',
      rating: '4.5',
      imgsrc: require('../assets/burger5.jpg'),
      taxandfee: '5.00',
      delivery: '1.20',
      featured: false,
      tag: 'burger',
    },
    {
      id: 36,
      foodname: 'Avocado Turkey Burger',
      price: '12.50',
      fooddetails:
        'A healthier option with a turkey patty, avocado, and fresh toppings.',
      rating: '4.6',
      imgsrc: require('../assets/burger6.jpg'),
      taxandfee: '6.25',
      delivery: '1.40',
      featured: false,
      tag: 'burger',
    },
    {
      id: 37,
      foodname: 'Double Bacon Cheeseburger',
      price: '13.99',
      fooddetails:
        'Double the bacon, double the cheese – a hearty burger for meat lovers.',
      rating: '4.9',
      imgsrc: require('../assets/bburger7.jpg'),
      taxandfee: '7.00',
      delivery: '1.50',
      featured: false,
      tag: 'burger',
    },
    {
      id: 38,
      foodname: 'Teriyaki Chicken Burger',
      price: '11.25',
      fooddetails:
        'Grilled chicken glazed with teriyaki sauce and topped with pineapple.',
      rating: '4.7',
      imgsrc: require('../assets/burger8.jpg'),
      taxandfee: '5.50',
      delivery: '1.20',
      featured: false,
      tag: 'burger',
    },
    {
      id: 41,
      foodname: 'Butter Chicken',
      price: '12.99',
      fooddetails:
        'Tender chicken cooked in a rich and creamy tomato-based sauce with butter and spices.',
      rating: '4.7',
      imgsrc: require('../assets/indfood1.jpg'),
      taxandfee: '6.50',
      delivery: '1.50',
      featured: true,
      tag: 'indian',
    },
    {
      id: 42,
      foodname: 'Paneer Tikka Masala',
      price: '11.75',
      fooddetails:
        'Marinated and grilled paneer (Indian cottage cheese) served in a flavorful tomato-based curry.',
      rating: '4.8',
      imgsrc: require('../assets/indfood2.jpg'),
      taxandfee: '5.80',
      delivery: '1.25',
      featured: true,
      tag: 'indian',
    },
    {
      id: 43,
      foodname: 'Chicken Biryani',
      price: '13.50',
      fooddetails:
        'Fragrant basmati rice cooked with tender chicken, aromatic spices, and herbs.',
      rating: '4.6',
      imgsrc: require('../assets/indfood3.jpg'),
      taxandfee: '6.75',
      delivery: '1.60',
      featured: true,
      tag: 'indian',
    },
    {
      id: 44,
      foodname: 'Aloo Gobi',
      price: '9.99',
      fooddetails:
        'A vegetarian dish featuring potatoes (aloo) and cauliflower (gobi) cooked with spices and herbs.',
      rating: '4.5',
      imgsrc: require('../assets/indfood4.jpg'),
      taxandfee: '4.80',
      delivery: '1.00',
      featured: true,
      tag: 'indian',
    },
    {
      id: 45,
      foodname: 'Palak Paneer',
      price: '10.25',
      fooddetails:
        'Paneer cubes cooked in a creamy spinach (palak) gravy with Indian spices.',
      rating: '4.7',
      imgsrc: require('../assets/indfood5.jpg'),
      taxandfee: '5.20',
      delivery: '1.10',
      featured: true,
      tag: 'indian',
    },
    {
      id: 46,
      foodname: 'Chicken Korma',
      price: '14.25',
      fooddetails:
        'Chicken pieces simmered in a rich and flavorful korma sauce made with yogurt, nuts, and spices.',
      rating: '4.9',
      imgsrc: require('../assets/indfood6.jpg'),
      taxandfee: '7.00',
      delivery: '1.75',
      featured: true,
      tag: 'indian',
    },
    {
      id: 47,
      foodname: 'Masala Dosa',
      price: '8.50',
      fooddetails:
        'South Indian delicacy consisting of a thin rice crepe filled with spiced potatoes.',
      rating: '4.6',
      imgsrc: require('../assets/indfood7.jpg'),
      taxandfee: '4.00',
      delivery: '0.90',
      featured: true,
      tag: 'indian',
    },
    {
      id: 48,
      foodname: 'Chana Masala',
      price: '9.25',
      fooddetails:
        'A vegetarian dish made with chickpeas (chana) cooked in a spiced tomato-based sauce.',
      rating: '4.5',
      imgsrc: require('../assets/indfood8.jpg'),
      taxandfee: '4.50',
      delivery: '1.00',
      featured: true,
      tag: 'indian',
    },
    {
      id: 51,
      foodname: 'Tacos al Pastor',
      price: '10.99',
      fooddetails:
        'Marinated pork cooked on a vertical rotisserie, served with pineapple and onions.',
      rating: '4.8',
      imgsrc: require('../assets/maxican1.jpg'),
      taxandfee: '5.50',
      delivery: '1.20',
      featured: false,
      tag: 'mexican',
    },
    {
      id: 52,
      foodname: 'Guacamole and Chips',
      price: '8.50',
      fooddetails:
        'Creamy avocado dip with tomatoes, onions, and cilantro, served with crispy tortilla chips.',
      rating: '4.7',
      imgsrc: require('../assets/maxican2.jpg'),
      taxandfee: '4.00',
      delivery: '0.90',
      featured: false,
      tag: 'mexican',
    },
    {
      id: 53,
      foodname: 'Enchiladas Verdes',
      price: '12.75',
      fooddetails:
        'Chicken-filled tortillas topped with green chili sauce and melted cheese.',
      rating: '4.6',
      imgsrc: require('../assets/maxican3.jpg'),
      taxandfee: '6.25',
      delivery: '1.30',
      featured: false,
      tag: 'mexican',
    },
    {
      id: 54,
      foodname: 'Chiles Rellenos',
      price: '11.25',
      fooddetails:
        'Poblano peppers stuffed with cheese, then battered and fried.',
      rating: '4.5',
      imgsrc: require('../assets/maxican4.jpg'),
      taxandfee: '5.50',
      delivery: '1.10',
      featured: false,
      tag: 'mexican',
    },
    {
      id: 55,
      foodname: 'Quesadilla with Salsa',
      price: '9.99',
      fooddetails:
        'Grilled tortilla filled with cheese and served with spicy salsa.',
      rating: '4.8',
      imgsrc: require('../assets/maxican5.jpg'),
      taxandfee: '5.00',
      delivery: '1.00',
      featured: false,
      tag: 'mexican',
    },
    {
      id: 56,
      foodname: 'Burrito Bowl',
      price: '13.50',
      fooddetails:
        'A bowl with rice, beans, grilled chicken, salsa, and guacamole.',
      rating: '4.6',
      imgsrc: require('../assets/maxican6.jpg'),
      taxandfee: '6.75',
      delivery: '1.60',
      featured: false,
      tag: 'mexican',
    },
    {
      id: 57,
      foodname: 'Sopes',
      price: '10.99',
      fooddetails:
        'Thick corn tortillas topped with beans, meat, lettuce, and crumbled cheese.',
      rating: '4.7',
      imgsrc: require('../assets/maxican7.jpg'),
      taxandfee: '5.50',
      delivery: '1.20',
      featured: false,
      tag: 'mexican',
    },
    {
      id: 58,
      foodname: 'Mexican Street Corn (Elote)',
      price: '8.75',
      fooddetails:
        'Grilled corn on the cob coated with mayo, cotija cheese, chili powder, and lime.',
      rating: '4.5',
      imgsrc: require('../assets/maxican8.jpg'),
      taxandfee: '4.00',
      delivery: '0.90',
      featured: false,
      tag: 'mexican',
    },

    {
      id: 61,
      foodname: 'Kung Pao Chicken',
      price: '12.99',
      fooddetails:
        'Spicy and savory stir-fried chicken with peanuts, vegetables, and chili peppers.',
      rating: '4.8',
      imgsrc: require('../assets/chaina1.jpg'),
      taxandfee: '6.50',
      delivery: '1.50',
      featured: false,
      tag: 'chinese',
    },
    {
      id: 62,
      foodname: 'Dim Sum Platter',
      price: '11.50',
      fooddetails:
        'Assorted steamed dumplings filled with shrimp, pork, and vegetables.',
      rating: '4.7',
      imgsrc: require('../assets/chaina1.jpg'),
      taxandfee: '5.75',
      delivery: '1.25',
      featured: false,
      tag: 'chinese',
    },
    {
      id: 63,
      foodname: 'Beef and Broccoli Stir-Fry',
      price: '13.75',
      fooddetails:
        'Tender beef strips and broccoli florets cooked in a flavorful soy-based sauce.',
      rating: '4.6',
      imgsrc: require('../assets/chaina3.jpg'),
      taxandfee: '6.80',
      delivery: '1.40',
      featured: false,
      tag: 'chinese',
    },
    {
      id: 64,
      foodname: 'Sweet and Sour Pork',
      price: '10.99',
      fooddetails:
        'Crispy fried pork tossed in a tangy and sweet sauce with bell peppers and pineapple.',
      rating: '4.9',
      imgsrc: require('../assets/chaina4.jpg'),
      taxandfee: '5.50',
      delivery: '1.00',
      featured: false,
      tag: 'chinese',
    },
    {
      id: 65,
      foodname: 'Shrimp Fried Rice',
      price: '9.99',
      fooddetails: 'Stir-fried rice with shrimp, vegetables, and soy sauce.',
      rating: '4.7',
      imgsrc: require('../assets/chaina5.jpg'),
      taxandfee: '4.80',
      delivery: '1.10',
      featured: false,
      tag: 'chinese',
    },
    {
      id: 66,
      foodname: "General Tso's Chicken",
      price: '14.50',
      fooddetails:
        'Deep-fried chicken in a sweet and spicy sauce, garnished with green onions.',
      rating: '4.8',
      imgsrc: require('../assets/chaina6.jpg'),
      taxandfee: '7.00',
      delivery: '1.75',
      featured: false,
      tag: 'chinese',
    },
    {
      id: 67,
      foodname: 'Wonton Soup',
      price: '8.75',
      fooddetails:
        'Clear broth with wonton dumplings filled with minced pork and shrimp.',
      rating: '4.5',
      imgsrc: require('../assets/chaina7.jpg'),
      taxandfee: '4.00',
      delivery: '0.90',
      featured: false,
      tag: 'chinese',
    },
    {
      id: 68,
      foodname: 'Szechuan Beef',
      price: '11.25',
      fooddetails:
        'Spicy beef stir-fry with Szechuan peppers, vegetables, and a savory sauce.',
      rating: '4.6',
      imgsrc: require('../assets/chaina8.jpg'),
      taxandfee: '5.50',
      delivery: '1.20',
      featured: false,
      tag: 'chinese',
    },
  ];

  const fliterdata = [
    {
      key: '1',
      name: 'Assian',
      src: require('../assets/foodiconhd1.png'),
      tag: 'indian',
    },
    {
      key: '2',
      name: 'Burger',
      src: require('../assets/burgericonhd.png'),
      tag: 'burger',
    },
    {
      key: '3',
      name: 'Donat',
      src: require('../assets/foodiconhd2.png'),
      tag: 'chinese',
    },
    {
      key: '4',
      name: 'Maxican',
      src: require('../assets/foodiconhd3.png'),
      tag: 'mexican',
    },
    {
      key: '5',
      name: 'Pizaa',
      src: require('../assets/pizaiconhd.png'),
      tag: 'pizza',
    },
  ];

  const featurerestdata = viewallitem.filter(item => item.featured === true);

  const popularitems = viewallitem.filter(item => item?.rating === '4.9');

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(`${url}api/profile`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: usertoken,
          },
        });

        if (response.ok) {
          const userData = await response.json();

          setUser(userData);
        } else {
          console.error('Error fetching user profile:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error.message);
      }
    };

    fetchdata();
  }, []);

  //
  useMemo(() => {
    dispatch(profile(user));
  }, [user]);

  //

  const renderItem = ({item}) => (
    <TouchableOpacity
      key={item?.key}
      style={styles.firstlist}
      onPress={() =>
        props.navigation.navigate('ViewScreen', {foodtag: item?.tag})
      }>
      <Image source={item.src} style={styles.firstlistimg} />

      <Text style={styles.filtername}>{item?.name}</Text>
    </TouchableOpacity>
  );

  const renderfeaturerest = ({item}) => (
    <TouchableOpacity
      key={item?.id}
      style={styles.featuredRestaurantContainerr}
      onPress={() =>
        props.navigation.navigate('FoodDetail', {foodId: item?.id})
      }>
      <View style={styles.feimgcontaner}>
        <Animated.Image
          source={item?.imgsrc}
          style={styles.featuredRestaurantImage}
        />
      </View>
      <View style={styles.featuredRestaurantDetailsContainer}>
        <Text style={styles.featuredRestaurantName}>{item?.foodname}</Text>
        <View style={styles.featuredRestaurantInfoContainer}>
          <Text style={styles.featuredRestaurantInfoText}>${item?.price}</Text>
          <Text style={styles.featuredRestaurantInfoText}>10-15 mins</Text>
        </View>

        <Text style={styles.txt}>{item?.tag}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderpopularitem = ({item}) => (
    <TouchableOpacity
      key={item?.id}
      style={styles.popcontainer}
      onPress={() =>
        props.navigation.navigate('FoodDetail', {foodId: item?.id})
      }>
      <View style={{position: 'relative'}}>
        <Image source={item?.imgsrc} style={styles.popimg} />
        <Image
          source={require('../assets/likeicons.png')}
          style={styles.poplikeicon}
        />
        <View style={styles.poppricecontainer}>
          <Text style={styles.pop$sign}>$</Text>
          <Text style={styles.popprice}>{item?.price}</Text>
        </View>
        <View style={styles.popratingcontainer}>
          <Text style={styles.poprating}>{item?.rating}</Text>
          <Icon name="star-sharp" color="#FFC529" style={styles.starticon} />
          <Text style={styles.ratingrev}>(25+)</Text>
        </View>
      </View>
      <View style={styles.popdetails}>
        <Text style={styles.poptxto}>{item?.foodname}</Text>
        <Text style={styles.popfoodnametxt}>{item?.foodname}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      {loadingg ? (
        <LoadingScreen />
      ) : (
        <ScrollView style={styles.container}>
          <View style={styles.headerContainer}>
            <Header
              onPressMenu={() => props.navigation.openDrawer()}
              isMenu={true}
            />

            <TouchableOpacity
              onPress={() => props.navigation.navigate('MyProfileScreen')}>
              <Image
            
                style={styles.profileImage}
                source={
                  profiledata?.imgurl
                    ? {uri: `${url}${profiledata?.imgurl}`}
                    : require('../assets/newprofile.jpg')
                }
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>What would you like to order</Text>
          </View>

          <View style={styles.searchContainer}>
            <TouchableOpacity  style={styles.inputContainer} onPress={()=> props.navigation.navigate('SearchScreen')}>
            <Icon name="search" color="#767F9D" style={styles.iconstyl} />
              <Text style={styles.inputText}>Find for food or restaurant...</Text>
            </TouchableOpacity>
            

            <TouchableOpacity
              style={styles.filterIconContainer}
              onPress={openFilterModal}>
              <Icon
                name="options-outline"
                style={styles.filtericon}
                color="#FE724C"
              />
            </TouchableOpacity>

            <Modal
              visible={FilterModalVisible}
              animationType="slide"
              transparent={true}
              onRequestClose={closeFilterModal}>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <View style={styles.modalheader}>
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: responsiveWidth(1),
                      }}>
                      <Icon
                        name="filter-outline"
                        color="#FE724C"
                        style={styles.modalfiltericon}
                      />
                      <Text style={styles.modalhedtxt}>Filter</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>setFilterModalVisible(false)}>
                      <Icon name="close" color="#FE724C" style={styles.closebtn} />
                    </TouchableOpacity>
                  </View>
                  
                  <View style={styles.modalsmain}>
                      <Text style={styles.modalsmaintxt}>Category</Text>
                      <View style={styles.modalcat}>
                          <TouchableOpacity style={styles.modalcattxtc}  onPress={()=>{setFilterModalVisible(false),props.navigation.navigate('ViewScreen', {foodtag:'indian'})}}>
                            <Text style={styles.modalcattxt}>Assian</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.modalcattxtc} onPress={()=>{setFilterModalVisible(false),props.navigation.navigate('ViewScreen', {foodtag:'burger'})}}>
                            <Text style={styles.modalcattxt}>Burger</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.modalcattxtc} onPress={()=>{setFilterModalVisible(false),props.navigation.navigate('ViewScreen', {foodtag:'chinese'})}}>
                            <Text style={styles.modalcattxt}>Donat</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.modalcattxtc} onPress={()=>{setFilterModalVisible(false),props.navigation.navigate('ViewScreen', {foodtag:'mexican'})}}>
                            <Text style={styles.modalcattxt}>Maxican</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.modalcattxtc} onPress={()=>{setFilterModalVisible(false),props.navigation.navigate('ViewScreen', {foodtag:'pizaa'})}}>
                            <Text style={styles.modalcattxt}>Pizaa</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
                  <View style={styles.modalsmain}>
                      <Text style={styles.modalsmaintxt}>Short By</Text>
                      <View style={styles.modalcat}>
                          <TouchableOpacity style={styles.modalcattxtc} onPress={()=>{setFilterModalVisible(false),props.navigation.navigate('AllItemScreen',{hvalue:'3'})}}>
                            <Text style={styles.modalcattxt}>Price</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.modalcattxtc} onPress={()=>{setFilterModalVisible(false),props.navigation.navigate('AllItemScreen',{hvalue:'2'})}}>
                            <Text style={styles.modalcattxt}>Name</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.modalcattxtc} onPress={()=>{setFilterModalVisible(false),props.navigation.navigate('AllItemScreen',{hvalue:'4'})}}>
                            <Text style={styles.modalcattxt}>Popular</Text>
                          </TouchableOpacity>
                          
                      </View>
                  </View>
                </View>
              </View>
            </Modal>
          </View>

          <Carousel />

          <View style={styles.filterContainer}>
            <FlatList
              data={fliterdata}
              keyExtractor={item => item?.key}
              renderItem={renderItem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatListContainerone}
            />
          </View>

          <View style={styles.featuredRestaurantsContainer}>
            <Text style={styles.featuredRestaurantsHeaderText}>
              Featured Restaurants
            </Text>

            <TouchableOpacity
              onPress={() => props.navigation.navigate('AllItemScreen',{hvalue:'1'})}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={featurerestdata}
            keyExtractor={item => item?.id}
            renderItem={renderfeaturerest}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
          />

          <View style={styles.featuredRestaurantsContainer}>
            <Text style={styles.featuredRestaurantsHeaderText}>
              Popular Items
            </Text>
          </View>

          <FlatList
            data={popularitems}
            keyExtractor={item => item?.id}
            renderItem={renderpopularitem}
            numColumns={2}
            style={styles.popmaincontainer}
          />
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCFCFD',
    flex: 1,
  },

  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: responsiveWidth(5),
    marginRight: responsiveWidth(5),
    marginTop: responsiveHeight(2),
  },
  profileImage: {
    height: responsiveHeight(7),
    width: responsiveWidth(12),
    borderRadius: responsiveWidth(2),
  },
  titleContainer: {
    flex: 1,
    marginTop: responsiveHeight(3),
    marginLeft: responsiveWidth(8),
    marginRight: responsiveWidth(5),
  },
  titleText: {
    color: '#323643',
    fontFamily: 'Gilroy-Bold',
    fontSize: responsiveFontSize(4.8),
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: responsiveWidth(2),
    width: responsiveWidth(100),
    paddingLeft: responsiveWidth(7),

    paddingRight: responsiveWidth(7),
    marginTop: responsiveHeight(2),
  },
  inputContainer: {
    borderWidth: responsiveWidth(0.2),
    borderColor: '#EFEFEF',
    width: responsiveWidth(68),
    height: responsiveHeight(9),
    justifyContent: 'center',
    borderRadius: responsiveWidth(2.2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    fontFamily: 'Gilroy-Regular',
    color: '#9AA0B4',
    fontSize: responsiveFontSize(2),

    marginLeft: responsiveWidth(2.5),
  },
  filterIconContainer: {
    height: responsiveHeight(8),
    width: responsiveWidth(20),
    alignItems: 'center',
    justifyContent: 'center',
  },

  filterContainer: {
    alignItems: 'center',
    marginTop: responsiveHeight(3),
    width: responsiveWidth(100),
    height: responsiveHeight(20),
  },

  flatListContainerone: {
    paddingLeft: responsiveWidth(7),
    paddingRight: responsiveWidth(7),
    gap: responsiveHeight(2),
    alignItems: 'center',
  },
  flatListContainer: {
    paddingLeft: responsiveWidth(7),
    paddingRight: responsiveWidth(7),
    gap: responsiveWidth(5),
    paddingBottom: responsiveHeight(1),
  },

  featuredRestaurantsContainer: {
    marginTop: responsiveHeight(2),

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: responsiveWidth(7),
    marginRight: responsiveWidth(7),
  },
  featuredRestaurantsHeaderText: {
    color: '#323643',
    fontSize: responsiveFontSize(3),
    fontFamily: 'Gilroy-Bold',
  },
  viewAllText: {
    color: '#F56844',
    fontFamily: 'Gilroy-SemiBold',
    fontSize: responsiveFontSize(2),
  },
  featuredRestaurantContainerr: {
    width: responsiveWidth(70),
    height: responsiveHeight(40),
    borderRadius: responsiveWidth(2),
    marginTop: responsiveHeight(2),
    borderBottomLeftRadius: responsiveWidth(5),
    borderBottomRightRadius: responsiveWidth(5),
    borderTopLeftRadius: responsiveWidth(5),
    borderTopRightRadius: responsiveWidth(5),
    backgroundColor: '#FFF',
    shadowOpacity: 5,
    elevation: 2,
    shadowColor: 'light-brown',
    gap: responsiveHeight(1),
  },
  featuredRestaurantImageContainer: {
    width: responsiveWidth(70),
    height: responsiveHeight(70),
  },
  feimgcontaner: {
    width: responsiveWidth(69),
    height: responsiveHeight(25),
    borderTopLeftRadius: responsiveWidth(5),
    borderTopRightRadius: responsiveWidth(5),
  },
  featuredRestaurantImage: {
    width: responsiveWidth(70),
    height: responsiveHeight(25),
    borderTopLeftRadius: responsiveWidth(5),
    borderTopRightRadius: responsiveWidth(5),
  },
  featuredRestaurantDetailsContainer: {
    backgroundColor: '#FFF',
    paddingLeft: responsiveWidth(3),
    paddingRight: responsiveWidth(3),

    width: responsiveWidth(70),
    height: responsiveHeight(10),
    borderBottomLeftRadius: responsiveWidth(5),
    borderBottomRightRadius: responsiveWidth(5),
  },
  featuredRestaurantName: {
    color: '#000',
    fontSize: responsiveFontSize(2.8),
    fontFamily: 'Gilroy-Bold',
  },
  featuredRestaurantInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  featuredRestaurantInfoText: {
    color: '#7E8392',
    fontSize: responsiveFontSize(2),
    fontFamily: 'Gilroy-Medium',
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
  txt: {
    color: '#8A8E9B',
    fontSize: responsiveFontSize(2),
    fontFamily: 'Gilroy-Medium',
  },

  popmaincontainer: {
    marginLeft: responsiveWidth(6),
  },
  popcontainer: {
    width: responsiveWidth(44),
    backgroundColor: '#FFFFFF',
    shadowOpacity: 10,
    elevation: 1,
    shadowColor: 'light-brown',
    marginHorizontal: responsiveWidth(1),
    marginVertical: responsiveHeight(1),
    borderRadius: responsiveWidth(2),
  },

  poplikeicon: {
    position: 'absolute',
    width: responsiveHeight(8),
    height: responsiveWidth(12),
    top: responsiveHeight(2),
    right: responsiveWidth(0),
  },
  poppricecontainer: {
    position: 'absolute',
    top: responsiveHeight(2),
    left: responsiveWidth(2),
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: responsiveWidth(5),
    height: responsiveHeight(5),
    width: responsiveWidth(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  pop$sign: {
    color: '#FE724C',
    fontFamily: 'Gilroy-SemiBold',
    fontSize: responsiveFontSize(1.5),
  },
  popprice: {
    color: '#000',
    fontFamily: 'Gilroy-SemiBold',
    fontSize: responsiveFontSize(2),
  },
  popratingcontainer: {
    height: responsiveHeight(4),
    width: responsiveWidth(16),
    backgroundColor: '#FFFFFF',
    elevation: 5,
    shadowColor: 'light-brown',
    position: 'absolute',
    bottom: responsiveHeight(-2),
    left: responsiveWidth(3),
    flexDirection: 'row',
    borderRadius: responsiveWidth(5),
    justifyContent: 'center',
    alignItems: 'center',
    gap: responsiveWidth(1),
    flexWrap: 'wrap',
    paddingTop: responsiveHeight(0.7),
  },
  poprating: {
    color: '#000',
    fontFamily: 'Gilroy-SemiBold',
    fontSize: responsiveFontSize(1.4),
  },
  popdetails: {
    marginTop: responsiveHeight(1.2),
    padding: responsiveWidth(2.5),
    gap: responsiveWidth(1.5),
  },
  popimg: {
    width: 'auto',
    height: responsiveHeight(20),
    borderRadius: responsiveWidth(2),
  },
  popfoodnametxt: {
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(1.5),
  },
  poptxto: {
    color: '#000',
    fontFamily: 'Gilroy-SemiBold',
    fontSize: responsiveFontSize(2),
  },
  ratingrev: {fontFamily: 'Gilroy-Regular', fontSize: responsiveFontSize(1.2)},
  iconstyl: {
    fontSize: responsiveFontSize(4),
  },
  firstlist: {
    backgroundColor: '#FFFFFF',
    shadowOpacity: 10,
    elevation: 1,
    shadowColor: 'light-brown',
    borderRadius: responsiveWidth(10),
    height: responsiveHeight(19),
    width: responsiveWidth(Dimensions.get('window').width >= 600 ? 17 : 20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  filtername: {
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'Gilroy-medium',
    color: '#67666D',
  },

  firstlistimg: {
    width: responsiveWidth(10),
    height: responsiveHeight(5),
    resizeMode: 'contain',
  },
  filtericon: {
    fontSize: responsiveFontSize(5),
  },
  starticon: {
    fontSize: responsiveFontSize(1.3),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    height: responsiveHeight(50),
    width: responsiveWidth(100),
    borderTopLeftRadius: responsiveWidth(4),
    borderTopRightRadius: responsiveWidth(4),
    elevation: 10,
    paddingLeft: responsiveWidth(5),
    paddingRight: responsiveWidth(5),
  },
  modalsmain: {
    marginTop:responsiveHeight(1)
  },
  modalsmaintxt: {
    color: 'black',
    fontSize: responsiveFontSize(2),
    fontFamily:'Gilroy-SemiBold'
  },
  modalcat:{
      marginTop:responsiveHeight(1),
      flexWrap:'wrap',
      flexDirection:'row',
      gap:responsiveWidth(2)
  },
  modalcattxtc:{
    width:responsiveWidth(20),
    height:responsiveHeight(6),
    borderColor:'#FE724C',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:responsiveWidth(5),
    shadowColor: "gray",
    backgroundColor:'#ffffff',
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.43,
shadowRadius: 9.51,

elevation: 10,
  },
  modalcattxt:{
    fontFamily:'Gilroy-SemiBold',
    fontSize:responsiveFontSize(1.8),
    color:'#000'

  },
  closebtn: {
    fontSize: responsiveFontSize(2.5),
  },
  modalheader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(2),
  },
  modalfiltericon: {
    fontSize: responsiveFontSize(2.5),
  },
  modalhedtxt: {
    fontSize: responsiveFontSize(2.5),
    color: 'black',
    fontFamily:'Gilroy-Medium'
  },
});

export default memo(HomeScreen);
