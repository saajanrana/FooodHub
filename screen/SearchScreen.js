import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  FlatList,
} from 'react-native';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {useSelector} from 'react-redux';
import { url } from '../components/url';

const SearchScreen = ({navigation}) => {
  const profiledata = useSelector(state => state.auth.profiledata);
  const [searchtxt, setSearchtxt] = useState('');
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
  function truncateString(inputString) {
    let words = inputString.split(' ');

    if (words.length > 10) {
      let truncatedString = words.slice(0, 10).join(' ');

      truncatedString += '...';

      return truncatedString;
    } else {
      return inputString;
    }
  }

  let filteredData = [];
  if (searchtxt) {
    filteredData = viewallitem.filter(item =>
      item.foodname.toLowerCase().includes(searchtxt.toLowerCase()),
    );
  } else {
    filteredData = '';
  }

  return (
    <View style={{backgroundColor: '#FCFCFD', flex: 1}}>
      <View style={styles.headercontainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headertouchbtn}>
          <Icon name="arrow-back-ios" style={styles.backbtn} color="black" />
        </TouchableOpacity>

        <Text style={styles.headertxt}>Find your food</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('MyProfileScreen')}>
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
      <View style={styles.inputContainer}>
        <Icon name="search" color="#767F9D" style={styles.iconstyl} />
        <TextInput
          style={styles.inputText}
          placeholder="Find your food.."
          value={searchtxt}
          onChangeText={txt => setSearchtxt(txt)}
        />
      </View>
      {filteredData ? (
        <FlatList
          data={filteredData}
          style={{
            marginLeft: responsiveWidth(5),
            marginTop: responsiveHeight(2),
          }}
          renderItem={item => (
            <View
              key={item?.index}
              style={{
                marginTop: responsiveHeight(1),
                marginLeft: responsiveWidth(2),
                marginBottom: responsiveHeight(2),
              }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('FoodDetail', {
                    foodId: item?.item?.id,
                  })
                }>
                <View
                  style={{
                    backgroundColor: '#FFF',
                    shadowOpacity: 10,
                    elevation: 1,
                    shadowColor: 'light-brown',
                    borderRadius: responsiveWidth(2),
                    width: responsiveWidth(90),

                    height: responsiveHeight(40),
                    gap: responsiveHeight(1.5),
                  }}>
                  <View
                    style={{
                      position: 'relative',
                      borderRadius: responsiveWidth(2),
                      height: responsiveHeight(27),
                    }}>
                    <Image
                      source={item?.item?.imgsrc}
                      style={{
                        borderRadius: responsiveWidth(2),
                        height: responsiveHeight(27),
                        width: responsiveWidth(90),
                      }}
                    />
                    <Image
                      source={require('../assets/likeicons.png')}
                      style={{
                        position: 'absolute',
                        height: responsiveHeight(8),
                        width: responsiveWidth(8),
                        top: responsiveHeight(1),
                        right: responsiveWidth(2),
                      }}
                    />

                    <View
                      style={{
                        height: responsiveHeight(5),
                        width: responsiveWidth(16),
                        position: 'absolute',
                        top: responsiveHeight(2),
                        left: responsiveWidth(3),
                        flexDirection: 'row',
                        backgroundColor: 'white',
                        borderRadius: responsiveWidth(30),

                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          color: '#FE724C',
                          fontFamily: 'Gilroy-Medium',
                          fontSize: responsiveFontSize(2),
                        }}>
                        $
                      </Text>
                      <Text
                        style={{
                          color: '#000',
                          fontFamily: 'Gilroy-SemiBold',
                          fontSize: responsiveFontSize(2.3),
                        }}>
                        {item?.item?.price}
                      </Text>
                    </View>

                    <View style={styles.popratingcontainer}>
                      <Text style={styles.poprating}>{item?.item?.rating}</Text>
                      <Icon
                        name="grade"
                        color="#FFC529"
                        style={styles.starticon}
                      />
                      <Text>(25+)</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      padding: responsiveWidth(1.2),
                      height: responsiveHeight(50),
                    }}>
                    <Text
                      style={{
                        color: '#000',
                        fontSize: responsiveFontSize(2.5),
                        fontFamily: 'Gilroy-Bold',
                      }}>
                      {item?.item?.foodname}
                    </Text>
                    <Text
                      style={{
                        color: '#5B5B5E',
                        fontSize: responsiveFontSize(1.8),
                        fontFamily: 'Gilroy-SemiBold',
                      }}>
                      {truncateString(item?.item?.fooddetails)}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: responsiveHeight(2),
          }}>
          <Text
            style={{
              fontFamily: 'Gilroy-Bold',
              fontSize: responsiveFontSize(3),
              color: '#FE724C',
            }}>
            Tab the search button and see what you want to eat
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headercontainer: {
    flexDirection: 'row',
    alignItems: 'center',

    marginLeft: responsiveWidth(6),
    marginRight: responsiveWidth(6),
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
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
    marginLeft: responsiveWidth(2),
    fontSize: responsiveFontSize(3),
  },
  headertxt: {
    fontSize: responsiveFontSize(3),
    fontFamily: 'Gilroy-Bold',
    color: 'black',
    textAlign: 'center',
  },
  profileImage: {
    height: responsiveHeight(7),
    width: responsiveWidth(12),
    borderRadius: responsiveWidth(2),
  },
  inputContainer: {
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(6),
    marginRight: responsiveWidth(6),
    borderWidth: responsiveWidth(0.8),
    borderColor: '#EFEFEF',
    width: responsiveWidth(90),
    height: responsiveHeight(9),

    borderRadius: responsiveWidth(2.2),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: responsiveWidth(5),
  },
  inputText: {
    fontFamily: 'Gilroy-Regular',
    color: '#9AA0B4',
    fontSize: responsiveFontSize(2.5),
    marginLeft: responsiveWidth(2.5),
    width: responsiveWidth(70),
  },
  iconstyl: {
    fontSize: responsiveFontSize(4),
  },
  popcontainer: {
    marginLeft: responsiveWidth(4),
    marginVertical: responsiveHeight(1),
    width: responsiveWidth(44),
    backgroundColor: '#FFFFFF',
    shadowOpacity: 10,
    elevation: 1,
    shadowColor: 'light-brown',
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
    padding: responsiveWidth(1.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  pop$sign: {
    color: '#FE724C',
    fontFamily: 'Gilroy-SemiBold',
    fontSize: responsiveFontSize(2),
  },
  popprice: {
    color: '#000',
    fontFamily: 'Gilroy-SemiBold',
    fontSize: responsiveFontSize(2),
  },
  popratingcontainer: {
    height: responsiveHeight(4),
    width: responsiveWidth(Dimensions.get('window').width > 600 ? 16 : 22),
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

  starticon: {
    fontSize: responsiveFontSize(1.5),
  },
});

export default SearchScreen;
