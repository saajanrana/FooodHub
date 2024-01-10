import { useRoute } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text,Image,TouchableOpacity, ScrollView} from 'react-native';


const RestaurantScreen = ({navigation}) => {
    const route = useRoute();
    const {restId}= route.params;
    const restaurants = [
        {
          id:1,
          name: 'Pizza Palace',
          description: 'A pizza haven with a variety of mouthwatering pizzas.',
          rating: 4.5,
          deliveryTime: '25-40 minutes',
          address: '456 W Oak St, Pizzatown',
          contactNumber: '+1 (555) 987-6543',
          imgsrc: require('../assets/rest1.jpg'),
          items: [
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
          ],
        },
        {
          id:2,
          name: 'Sushi Sensation',
          description: 'Indulge in the finest and freshest sushi delights.',
          rating: 4.9,
          deliveryTime: '35-50 minutes',
          address: '789 E Maple Ave, Sushicity',
          contactNumber: '+1 (555) 234-5678',
          imgsrc: require('../assets/rest2.jpg'),
          items: [
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
          ],
        },
        {
          id:3,
          name: 'Burger Binge',
          description:
            'Serving juicy and mouthwatering burgers for burger enthusiasts.',
          rating: 4.6,
          deliveryTime: '20-35 minutes',
          address: '101 N Walnut Blvd, Burgerland',
          contactNumber: '+1 (555) 876-5432',
          imgsrc: require('../assets/rest3.jpg'),
          items: [
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
          ],
        },
        {
          id:4,
          name: 'Pasta Paradise',
          description: 'Delight in the rich and flavorful world of Italian pasta.',
          rating: 4.8,
          deliveryTime: '30-45 minutes',
          address: '202 S Pine Dr, Pastatown',
          contactNumber: '+1 (555) 345-6789',
          imgsrc: require('../assets/rest4.jpg'),
          items: [
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
          ],
        },
        {
          id:5,
          name: 'Wok Wonders',
          description: 'Savor the taste of authentic Chinese wok dishes.',
          rating: 4.7,
          deliveryTime: '25-40 minutes',
          address: '303 E Cedar Ln, Woksville',
          contactNumber: '+1 (555) 654-3210',
          imgsrc: require('../assets/rest5.jpg'),
          items: [
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
          ],
        },
        {
          id:6,
          name: 'Curry Craze',
          description: 'Experience the bold and aromatic flavors of Indian curry.',
          rating: 4.8,
          deliveryTime: '35-50 minutes',
          address: '404 W Oak Ave, Currytown',
          contactNumber: '+1 (555) 789-0123',
          imgsrc: require('../assets/rest6.jpg'),
          items: [
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
          ],
        },
     
      ];


      const restaurant = restaurants.find((item)=>item?.id === restId);
      const itemsinside = restaurant?.items;
      console.log('inside>>>>',itemsinside);

    return (
        <ScrollView>
    <View style={{marginTop: '5%'}}>
        <View
          style={{
            height: 242,
            width: '100%',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={restaurant?.imgsrc}
            style={{
              height: '100%',
              width: '90%',
              borderRadius: 10,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          />
        </View>
        <View style={{paddingLeft: '6%', paddingRight: '6%'}}>
          <Text style={{color: '#323643', fontSize: 28, fontWeight: '600'}}>
            {restaurant?.name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            paddingLeft: '6%',
            paddingRight: '6%',
          }}>
          <View>
            <Text
              style={{
                color: '#111719',
                fontSize: 14,
                fontWeight: '600',
              }}>
              4.5
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#FE724C',
                  fontSize: 13,
                  fontWeight: '400',
                  textDecorationLine: 'underline',
                  textDecorationColor: '#FE724C',
                }}>
                See Review
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            paddingLeft: '6%',
            paddingRight: '6%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
        </View>
      </View>
      <View style={{paddingLeft: '6%', paddingRight: '6%', marginTop: '2%'}}>
        <Text style={{color: '#858992'}}>
         {restaurant?.description}
        </Text>
      </View>
      <View style={{alignItems:'center',marginTop:'4%'}}>
          <Text style={{color:'#000',fontSize:22,fontWeight:'400'}}>Food By Restaurant</Text>
      </View>
      {
 itemsinside.map((item)=>(
    <View style={{alignItems:"center"}} >
    <TouchableOpacity key={item?.id}
    style={{
      flexDirection: 'row',
      marginTop:'5%',
      width:'90%',
      gap:10,
      alignItems:"center"

    }}
    onPress={()=>navigation.navigate('FoodDetail',{foodId:item?.id})}
    >
    <View style={{height: 100, width:'28%', borderRadius: 20}}>
      <Image
        source={item?.imgsrc}
        style={{height: '100%', width: '100%', borderRadius: 20}}
      />
    </View>
    <View style={{gap:8,width:'70%'}}>
      <View style={{justifyContent:'space-between',flexDirection:'row'}} >
          <Text style={{color: '#000', fontSize: 18, fontWeight: '800'}}>
            {item?.foodname}
           </Text>
      </View>
      <Text style={{color: '#8C8A9D', fontSize: 14, fontWeight: 300}}>
        {item?.fooddetails}
      </Text>
    </View>
    </TouchableOpacity>
    </View>
 ))
      }
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default RestaurantScreen;
