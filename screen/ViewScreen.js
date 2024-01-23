import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const ViewScreen = ({navigation}) => {
  const route = useRoute();
  const {foodtag}= route.params;


  const viewallitem = [

    {
      id: 1,
      foodname: 'Ground Beef Tacos',
      price: '9.5',
      fooddetails: 'Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh chopped. Spices – chili powder, cumin, onion powder.',
      rating: '4.5',
      imgsrc: require('../assets/somemoredis.jpg'),
      taxandfee: '5.30',
      delivery: '1.00',
      featured: false,
      tag: 'pizza'
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
      tag: 'pizza'
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
      featured: false,
      tag: 'salad'
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
      featured: false,
      tag: 'pasta'
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
      featured: false,
      tag: 'seafood'
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
      tag: 'sushi'
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
      featured: false,
      tag: 'burger'
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
      featured: false,
      tag: 'wrap'
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
      featured: false,
      tag: 'wings'
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
      featured: false,
      tag: 'smoothie'
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
      featured:false,
      tag: 'smoothie'

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
      featured:false,
      tag: 'smoothie'
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
      featured:false,
      tag: 'smoothie'
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
      featured:false,
      tag: 'smoothie'
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
      featured:false,
      tag: 'smoothie'
    },
    {
      id: 21,
      foodname: 'Classic Margherita Pizza',
      price: '12.99',
      fooddetails: 'A timeless favorite topped with fresh tomato, mozzarella, and basil.',
      rating: '4.8',
      imgsrc: require('../assets/pizaa1.jpg'),
      taxandfee: '6.50',
      delivery: '1.50',
      featured: false,
      tag: 'pizza'
    },
    {
      id: 22,
      foodname: 'Pepperoni Passion Pizza',
      price: '11.50',
      fooddetails: 'Loaded with zesty pepperoni slices for a flavorful experience.',
      rating: '4.7',
      imgsrc: require('../assets/pizaa2.jpg'),
      taxandfee: '5.75',
      delivery: '1.25',
      featured: false,
      tag: 'pizza'
    },
    {
      id: 23,
      foodname: 'Vegetarian Supreme Pizza',
      price: '13.99',
      fooddetails: 'An assortment of fresh vegetables and olives on a bed of cheesy goodness.',
      rating: '4.6',
      imgsrc: require('../assets/pizaa3.jpg'),
      taxandfee: '6.75',
      delivery: '1.50',
      featured: false,
      tag: 'pizza'
    },
    {
      id: 24,
      foodname: 'BBQ Chicken Delight Pizza',
      price: '14.50',
      fooddetails: 'Succulent BBQ chicken, red onions, and cilantro make this pizza a hit.',
      rating: '4.9',
      imgsrc: require('../assets/pizaa4.jpg'),
      taxandfee: '7.00',
      delivery: '1.75',
      featured: false,
      tag: 'pizza'
    },
    {
      id: 25,
      foodname: 'Hawaiian Luau Pizza',
      price: '10.99',
      fooddetails: 'A tropical delight with ham, pineapple, and a sprinkle of sunshine.',
      rating: '4.5',
      imgsrc: require('../assets/pizaa5.jpg'),
      taxandfee: '5.25',
      delivery: '1.00',
      featured: false,
      tag: 'pizza'
    },
    {
      id: 26,
      foodname: 'Meat Lover\'s Feast Pizza',
      price: '15.99',
      fooddetails: 'A carnivore\'s dream featuring a medley of savory meats and sausage.',
      rating: '4.8',
      imgsrc: require('../assets/pizaa6.jpg'),
      taxandfee: '7.50',
      delivery: '1.80',
      featured: false,
      tag: 'pizza'
    },
    {
      id: 27,
      foodname: 'White Garlic Parmesan Pizza',
      price: '12.75',
      fooddetails: 'A garlic lover\'s paradise with creamy white sauce and parmesan.',
      rating: '4.7',
      imgsrc: require('../assets/pizaa7.jpg'),
      taxandfee: '6.25',
      delivery: '1.30',
      featured: false,
      tag: 'pizza'
    },
    {
      id: 28,
      foodname: 'Mushroom Madness Pizza',
      price: '11.99',
      fooddetails: 'A fungi-filled delight with assorted mushrooms and truffle oil.',
      rating: '4.6',
      imgsrc: require('../assets/pizaa8.jpg'),
      taxandfee: '5.80',
      delivery: '1.10',
      featured: false,
      tag: 'pizza'
    },
    {
      id: 29,
      foodname: 'Supreme Seafood Pizza',
      price: '16.50',
      fooddetails: 'A seafood extravaganza featuring shrimp, clams, and calamari.',
      rating: '4.9',
      imgsrc: require('../assets/pizaa9.jpg'),
      taxandfee: '7.80',
      delivery: '1.90',
      featured: false,
      tag: 'pizza'
    },
   

    {
      id: 31,
      foodname: 'Classic Cheeseburger',
      price: '8.99',
      fooddetails: 'A timeless favorite featuring a juicy beef patty and melted cheese.',
      rating: '4.5',
      imgsrc: require('../assets/burger1.jpg'),
      taxandfee: '4.50',
      delivery: '1.00',
      featured: false,
      tag: 'burger'
    },
    {
      id: 32,
      foodname: 'Bacon BBQ Burger',
      price: '10.50',
      fooddetails: 'Savory bacon, tangy BBQ sauce, and a perfectly grilled burger patty.',
      rating: '4.7',
      imgsrc: require('../assets/burger2.jpg'),
      taxandfee: '5.25',
      delivery: '1.25',
      featured: false,
      tag: 'burger'
    },
    {
      id: 33,
      foodname: 'Veggie Delight Burger',
      price: '9.75',
      fooddetails: 'A flavorful vegetarian option with a plant-based patty and fresh veggies.',
      rating: '4.6',
      imgsrc: require('../assets/burger3.jpg'),
      taxandfee: '4.75',
      delivery: '1.10',
      featured: false,
      tag: 'burger'
    },
    {
      id: 34,
      foodname: 'Spicy Jalapeno Burger',
      price: '11.99',
      fooddetails: 'Kick up the heat with sliced jalapenos and spicy mayo on a beef patty.',
      rating: '4.8',
      imgsrc: require('../assets/burger4.jpg'),
      taxandfee: '6.00',
      delivery: '1.30',
      featured: false,
      tag: 'burger'
    },
    {
      id: 35,
      foodname: 'Mushroom Swiss Burger',
      price: '10.25',
      fooddetails: 'A savory combination of sautéed mushrooms and melted Swiss cheese.',
      rating: '4.5',
      imgsrc: require('../assets/burger5.jpg'),
      taxandfee: '5.00',
      delivery: '1.20',
      featured: false,
      tag: 'burger'
    },
    {
      id: 36,
      foodname: 'Avocado Turkey Burger',
      price: '12.50',
      fooddetails: 'A healthier option with a turkey patty, avocado, and fresh toppings.',
      rating: '4.6',
      imgsrc: require('../assets/burger6.jpg'),
      taxandfee: '6.25',
      delivery: '1.40',
      featured: false,
      tag: 'burger'
    },
    {
      id: 37,
      foodname: 'Double Bacon Cheeseburger',
      price: '13.99',
      fooddetails: 'Double the bacon, double the cheese – a hearty burger for meat lovers.',
      rating: '4.9',
      imgsrc: require('../assets/bburger7.jpg'),
      taxandfee: '7.00',
      delivery: '1.50',
      featured: false,
      tag: 'burger'
    },
    {
      id: 38,
      foodname: 'Teriyaki Chicken Burger',
      price: '11.25',
      fooddetails: 'Grilled chicken glazed with teriyaki sauce and topped with pineapple.',
      rating: '4.7',
      imgsrc: require('../assets/burger8.jpg'),
      taxandfee: '5.50',
      delivery: '1.20',
      featured: false,
      tag: 'burger'
    },
    {
      id: 41,
      foodname: 'Butter Chicken',
      price: '12.99',
      fooddetails: 'Tender chicken cooked in a rich and creamy tomato-based sauce with butter and spices.',
      rating: '4.7',
      imgsrc: require('../assets/indfood1.jpg'),
      taxandfee: '6.50',
      delivery: '1.50',
      featured: true,
      tag: 'indian'
    },
    {
      id: 42,
      foodname: 'Paneer Tikka Masala',
      price: '11.75',
      fooddetails: 'Marinated and grilled paneer (Indian cottage cheese) served in a flavorful tomato-based curry.',
      rating: '4.8',
      imgsrc: require('../assets/indfood2.jpg'),
      taxandfee: '5.80',
      delivery: '1.25',
      featured: true,
      tag: 'indian'
    },
    {
      id: 43,
      foodname: 'Chicken Biryani',
      price: '13.50',
      fooddetails: 'Fragrant basmati rice cooked with tender chicken, aromatic spices, and herbs.',
      rating: '4.6',
      imgsrc: require('../assets/indfood3.jpg'),
      taxandfee: '6.75',
      delivery: '1.60',
      featured: true,
      tag: 'indian'
    },
    {
      id: 44,
      foodname: 'Aloo Gobi',
      price: '9.99',
      fooddetails: 'A vegetarian dish featuring potatoes (aloo) and cauliflower (gobi) cooked with spices and herbs.',
      rating: '4.5',
      imgsrc: require('../assets/indfood4.jpg'),
      taxandfee: '4.80',
      delivery: '1.00',
      featured: true,
      tag: 'indian'
    },
    {
      id: 45,
      foodname: 'Palak Paneer',
      price: '10.25',
      fooddetails: 'Paneer cubes cooked in a creamy spinach (palak) gravy with Indian spices.',
      rating: '4.7',
      imgsrc: require('../assets/indfood5.jpg'),
      taxandfee: '5.20',
      delivery: '1.10',
      featured: true,
      tag: 'indian'
    },
    {
      id: 46,
      foodname: 'Chicken Korma',
      price: '14.25',
      fooddetails: 'Chicken pieces simmered in a rich and flavorful korma sauce made with yogurt, nuts, and spices.',
      rating: '4.9',
      imgsrc: require('../assets/indfood6.jpg'),
      taxandfee: '7.00',
      delivery: '1.75',
      featured: true,
      tag: 'indian'
    },
    {
      id: 47,
      foodname: 'Masala Dosa',
      price: '8.50',
      fooddetails: 'South Indian delicacy consisting of a thin rice crepe filled with spiced potatoes.',
      rating: '4.6',
      imgsrc: require('../assets/indfood7.jpg'),
      taxandfee: '4.00',
      delivery: '0.90',
      featured: true,
      tag: 'indian'
    },
    {
      id: 48,
      foodname: 'Chana Masala',
      price: '9.25',
      fooddetails: 'A vegetarian dish made with chickpeas (chana) cooked in a spiced tomato-based sauce.',
      rating: '4.5',
      imgsrc: require('../assets/indfood8.jpg'),
      taxandfee: '4.50',
      delivery: '1.00',
      featured: true,
      tag: 'indian'
    },
    {
      id: 51,
      foodname: 'Tacos al Pastor',
      price: '10.99',
      fooddetails: 'Marinated pork cooked on a vertical rotisserie, served with pineapple and onions.',
      rating: '4.8',
      imgsrc: require('../assets/maxican1.jpg'),
      taxandfee: '5.50',
      delivery: '1.20',
      featured: false,
      tag: 'mexican'
    },
    {
      id: 52,
      foodname: 'Guacamole and Chips',
      price: '8.50',
      fooddetails: 'Creamy avocado dip with tomatoes, onions, and cilantro, served with crispy tortilla chips.',
      rating: '4.7',
      imgsrc: require('../assets/maxican2.jpg'),
      taxandfee: '4.00',
      delivery: '0.90',
      featured: false,
      tag: 'mexican'
    },
    {
      id: 53,
      foodname: 'Enchiladas Verdes',
      price: '12.75',
      fooddetails: 'Chicken-filled tortillas topped with green chili sauce and melted cheese.',
      rating: '4.6',
      imgsrc: require('../assets/maxican3.jpg'),
      taxandfee: '6.25',
      delivery: '1.30',
      featured: false,
      tag: 'mexican'
    },
    {
      id: 54,
      foodname: 'Chiles Rellenos',
      price: '11.25',
      fooddetails: 'Poblano peppers stuffed with cheese, then battered and fried.',
      rating: '4.5',
      imgsrc: require('../assets/maxican4.jpg'),
      taxandfee: '5.50',
      delivery: '1.10',
      featured: false,
      tag: 'mexican'
    },
    {
      id: 55,
      foodname: 'Quesadilla with Salsa',
      price: '9.99',
      fooddetails: 'Grilled tortilla filled with cheese and served with spicy salsa.',
      rating: '4.8',
      imgsrc: require('../assets/maxican5.jpg'),
      taxandfee: '5.00',
      delivery: '1.00',
      featured: false,
      tag: 'mexican'
    },
    {
      id: 56,
      foodname: 'Burrito Bowl',
      price: '13.50',
      fooddetails: 'A bowl with rice, beans, grilled chicken, salsa, and guacamole.',
      rating: '4.6',
      imgsrc: require('../assets/maxican6.jpg'),
      taxandfee: '6.75',
      delivery: '1.60',
      featured: false,
      tag: 'mexican'
    },
    {
      id: 57,
      foodname: 'Sopes',
      price: '10.99',
      fooddetails: 'Thick corn tortillas topped with beans, meat, lettuce, and crumbled cheese.',
      rating: '4.7',
      imgsrc: require('../assets/maxican7.jpg'),
      taxandfee: '5.50',
      delivery: '1.20',
      featured: false,
      tag: 'mexican'
    },
    {
      id: 58,
      foodname: 'Mexican Street Corn (Elote)',
      price: '8.75',
      fooddetails: 'Grilled corn on the cob coated with mayo, cotija cheese, chili powder, and lime.',
      rating: '4.5',
      imgsrc: require('../assets/maxican8.jpg'),
      taxandfee: '4.00',
      delivery: '0.90',
      featured: false,
      tag: 'mexican'
    },

    {
      id: 61,
      foodname: 'Kung Pao Chicken',
      price: '12.99',
      fooddetails: 'Spicy and savory stir-fried chicken with peanuts, vegetables, and chili peppers.',
      rating: '4.8',
      imgsrc: require('../assets/chaina1.jpg'),
      taxandfee: '6.50',
      delivery: '1.50',
      featured: false,
      tag: 'chinese'
    },
    {
      id: 62,
      foodname: 'Dim Sum Platter',
      price: '11.50',
      fooddetails: 'Assorted steamed dumplings filled with shrimp, pork, and vegetables.',
      rating: '4.7',
      imgsrc: require('../assets/chaina1.jpg'),
      taxandfee: '5.75',
      delivery: '1.25',
      featured: false,
      tag: 'chinese'
    },
    {
      id: 63,
      foodname: 'Beef and Broccoli Stir-Fry',
      price: '13.75',
      fooddetails: 'Tender beef strips and broccoli florets cooked in a flavorful soy-based sauce.',
      rating: '4.6',
      imgsrc: require('../assets/chaina3.jpg'),
      taxandfee: '6.80',
      delivery: '1.40',
      featured: false,
      tag: 'chinese'
    },
    {
      id: 64,
      foodname: 'Sweet and Sour Pork',
      price: '10.99',
      fooddetails: 'Crispy fried pork tossed in a tangy and sweet sauce with bell peppers and pineapple.',
      rating: '4.9',
      imgsrc: require('../assets/chaina4.jpg'),
      taxandfee: '5.50',
      delivery: '1.00',
      featured: false,
      tag: 'chinese'
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
      tag: 'chinese'
    },
    {
      id: 66,
      foodname: 'General Tso\'s Chicken',
      price: '14.50',
      fooddetails: 'Deep-fried chicken in a sweet and spicy sauce, garnished with green onions.',
      rating: '4.8',
      imgsrc: require('../assets/chaina6.jpg'),
      taxandfee: '7.00',
      delivery: '1.75',
      featured: false,
      tag: 'chinese'
    },
    {
      id: 67,
      foodname: 'Wonton Soup',
      price: '8.75',
      fooddetails: 'Clear broth with wonton dumplings filled with minced pork and shrimp.',
      rating: '4.5',
      imgsrc: require('../assets/chaina7.jpg'),
      taxandfee: '4.00',
      delivery: '0.90',
      featured: false,
      tag: 'chinese'
    },
    {
      id: 68,
      foodname: 'Szechuan Beef',
      price: '11.25',
      fooddetails: 'Spicy beef stir-fry with Szechuan peppers, vegetables, and a savory sauce.',
      rating: '4.6',
      imgsrc: require('../assets/chaina8.jpg'),
      taxandfee: '5.50',
      delivery: '1.20',
      featured: false,
      tag: 'chinese'
    },
  ]

  const  userfood = viewallitem.filter(item => item.tag === foodtag);
  
 
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#FFF'}}>
      <ImageBackground
        source={require('../assets/newviewbackpic.jpg')}
        style={{flex:1}}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginTop:responsiveHeight(5),
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/goback.png')} />
          </TouchableOpacity>
          <View style={{flexWrap: 'wrap', marginLeft:responsiveWidth(5)}}>
            <Text style={{fontSize: responsiveFontSize(7), color: '#272D2F', fontWeight: '700'}}>
              Fast
            </Text>
            <Text
              style={{
                fontSize: responsiveFontSize(7),
                color: '#FE724C',
                fontStyle: 'normal',
                fontWeight: '700',
              }}>
              Food
            </Text>
            <Text style={{color: '#9796A1', fontSize:  responsiveFontSize(2)}}>
              80 type of pizza
            </Text>
          </View>
        </View>
      </ImageBackground>

     { 
     
     (userfood.length==0)?
     (
      viewallitem.map((item)=>{
      return (
        <View key={item.id} style={{flex: 1, alignItems: 'center', marginTop:responsiveHeight(4),marginBottom:responsiveHeight(4)}} >
        <View
          style={{
            backgroundColor: '#FFF',
            shadowOpacity: 10,
            elevation: 1,
            shadowColor: 'light-brown',
             borderRadius:responsiveWidth(5),
              width:responsiveWidth(70)
          }}>
          <View style={{position: 'relative'}}>
            <Image
              source={item.imgsrc}
              style={{borderRadius:responsiveWidth(3),height:responsiveHeight(30),width:responsiveWidth(70)}}
            />
            <Image
              source={require('../assets/likeicons.png')}
              style={{position: 'absolute', top:responsiveHeight(2), right:responsiveWidth(2)}}
            />

            <View style={{position: 'absolute', top:responsiveHeight(2), left:responsiveWidth(3),flexDirection:"row",backgroundColor:'white',borderRadius:responsiveWidth(10),padding:responsiveWidth(1.4),alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:"#FE724C",fontWeight:'600',fontSize:responsiveFontSize(1.8)}}>$</Text>
               <Text style={{color:'#000',fontWeight:'600',fontSize:responsiveFontSize(1.8)}}>{item.price}</Text>
            </View>
            <View style={{position: 'absolute', bottom:responsiveHeight(-3), left:responsiveWidth(5),flexDirection:"row",backgroundColor:'white',borderRadius:responsiveWidth(10),padding:responsiveWidth(2),alignItems:'center',justifyContent:'center'}}>
               <Text style={{color:'#000',fontWeight:'600',fontSize:responsiveFontSize(1.8)}}>{item.rating}</Text>
            </View>
          </View>
          <TouchableOpacity style={{padding:responsiveWidth(2.5)}} onPress={()=> navigation.navigate('FoodDetail',{foodId:item?.id})}>
            <Text style={{color: '#000',fontSize:responsiveFontSize(2), fontWeight: '600'}}>
              {item.foodname}
            </Text>
            <Text style={{color: '#5B5B5E', fontSize:responsiveFontSize(1.8), fontWeight: '400'}}>
              Chicken,Cheese and pineapple
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      )
     })  
     ):(
      userfood.map((item)=>{
        return (
          <View key={item.id} style={{flex: 1, alignItems: 'center', marginTop:responsiveHeight(4),marginBottom:responsiveHeight(4)}} >
          <View
            style={{
              backgroundColor: '#FFF',
              shadowOpacity: 10,
              elevation: 1,
              shadowColor: 'light-brown',
              borderRadius:responsiveWidth(5),
              width:responsiveWidth(70)
            }}>
            <View style={{position: 'relative'}}>
              <Image
                source={item.imgsrc}
                style={{borderRadius:responsiveWidth(3),height:responsiveHeight(30),width:responsiveWidth(70)}}
              />
              <Image
                source={require('../assets/likeicons.png')}
                style={{position: 'absolute', top:responsiveHeight(2), right:responsiveWidth(2)}}
              />
  
              <View style={{position: 'absolute', top:responsiveHeight(2), left:responsiveWidth(3),flexDirection:"row",backgroundColor:'white',borderRadius:responsiveWidth(10),padding:responsiveWidth(1.4),alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:"#FE724C",fontWeight:'600',fontSize:responsiveFontSize(1.8)}}>$</Text>
                 <Text style={{color:'#000',fontWeight:'600',fontSize:responsiveFontSize(1.8)}}>{item.price}</Text>
              </View>
              <View style={{position: 'absolute', bottom:responsiveHeight(-3), left:responsiveWidth(5),flexDirection:"row",backgroundColor:'white',borderRadius:responsiveWidth(10),padding:responsiveWidth(2),alignItems:'center',justifyContent:'center'}}>
                 <Text style={{color:'#000',fontWeight:'600',fontSize:responsiveFontSize(1.8)}}>{item.rating}</Text>
              </View>
            </View>
            <TouchableOpacity style={{padding:responsiveWidth(2.5)}} onPress={()=> navigation.navigate('FoodDetail',{foodId:item?.id})}>
              <Text style={{color: '#000', fontSize:responsiveFontSize(2), fontWeight: '600'}}>
                {item.foodname}
              </Text>
              <Text style={{color: '#5B5B5E', fontSize:responsiveFontSize(1.8), fontWeight: '400'}}>
                Chicken,Cheese and pineapple
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        )
      })
     )
}

    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ViewScreen;
