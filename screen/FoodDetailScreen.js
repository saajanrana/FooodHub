import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { addfood, additemtocart, removefood } from '../context/StoreSlice';
import { useRoute } from '@react-navigation/native';

const FoodDetailScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const totalitem = useSelector(state => state.store.totalitem);
  const route = useRoute();
  const {foodId}= route.params;

  console.log('id>>>>',foodId)
 
  const [checked, setChecked] = useState();


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
      featured:false
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
      featured:false
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
      featured:false
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
      featured:false
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
      featured:false
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
      featured:false
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
      featured:false
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
      featured:false
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
      featured:false
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
      featured:false
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
      featured:false
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
      featured:false
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
      featured:false
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
      featured:false
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
      featured:false
    },

  ]
  const userfood = viewallitem.find(item => item.id === foodId);

  
  return (
    <ScrollView style={{backgroundColor: '#FFF'}}>
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
            source={userfood?.imgsrc}
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
            {userfood?.foodname}
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
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#FE724C',
                fontSize: 17,
                fontWeight: '500',
                marginTop: '3%',
              }}>
              $
            </Text>
            <Text style={{color: '#FE724C', fontSize: 31, fontWeight: '600'}}>
              {userfood?.price}
            </Text>
          </View>
          <View style={{flexDirection: 'row', gap: 20, marginTop: '1%'}}>
          <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                borderRadius: 50,
                backgroundColor: '#FE724C',
                justifyContent: 'center',
                alignItems: 'center',
              }}  onPress={()=> dispatch(removefood(userfood?.id))} >
              <Text
                style={{
                  color: 'white',
                }}>
                -
              </Text>
            </TouchableOpacity>
            

            <Text style={{color: 'black', fontSize: 28, fontWeight: '600'}}>
            {totalitem[userfood?.id] || 0}
            </Text>

            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                height: 40,
                width: 40,
                borderRadius: 30,
                borderColor:'#FE724C'
              }}    onPress={()=> dispatch(addfood(userfood?.id)) }>
              <Text
                style={{
                  color: '#FE724C',
                }}>
                +
              </Text>
            </TouchableOpacity>

           
          </View>
        </View>
      </View>

      <View style={{paddingLeft: '6%', paddingRight: '6%', marginTop: '2%'}}>
        <Text style={{color: '#858992'}}>
         {userfood?.fooddetails}
        </Text>
      </View>
      <View style={{marginTop: '2%'}}>
        <View style={{marginLeft: '6%'}}>
          <Text style={{color: '#323643', fontSize: 18, fontWeight: '600'}}>
            Choice of Add On
          </Text>
        </View>

        <View style={{marginTop: '3%', padding: '6%',paddingBottom:0}}>
          <RadioButton.Group
            onValueChange={value => setChecked(value)}
            value={checked}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Image source={require('../assets/smalldish1.png')} />
              </View>
              <View>
                <Text style={{color: '#000', fontSize: 14, fontWeight: '400'}}>
                  Pepper Julienned
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text
                    style={{color: '#000', fontWeight: '400', fontSize: 14}}>
                    +$2.30
                  </Text>
                </View>
                <View>
                  <RadioButton color="#FE724C" value="first" />
                </View>
              </View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Image source={require('../assets/smalldish2.png')} />
              </View>
              <View>
                <Text style={{color: '#000', fontSize: 14, fontWeight: '400'}}>
                  Baby Spinach
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text
                    style={{color: '#000', fontWeight: '400', fontSize: 14}}>
                    +$4.70
                  </Text>
                </View>
                <View>
                  <RadioButton color="#FE724C" value="second" />
                </View>
              </View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Image source={require('../assets/smalldish3.png')} />
              </View>
              <View>
                <Text style={{color: '#000', fontSize: 14, fontWeight: '400'}}>
                  Masroom
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text
                    style={{color: '#000', fontWeight: '400', fontSize: 14}}>
                    +$2.50
                  </Text>
                </View>
                
                  <RadioButton color="#FE724C" value="third" />
              
              </View>
            </View>
          </RadioButton.Group>
        </View>
      </View>
      <TouchableOpacity
        style={{marginLeft: '25%'}}
        onPress={() => {
          dispatch(additemtocart({userfood}))
          navigation.navigate('AddToCartScreen',{foodId:userfood?.id});
        }
        }>
        <Image source={require('../assets/addtocart.png')} />
        <Text
          style={{
            position: 'absolute',
            top:'35%',
            left:'30%',
            color: '#FFF',
            textAlign: 'center',
          }}>
          Add To Cart
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default FoodDetailScreen;
