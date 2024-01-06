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

  const userfood = featurerestdata.find(item => item.id === foodId);
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
              }}  onPress={()=> dispatch(removefood(1))} >
              <Text
                style={{
                  color: 'white',
                }}>
                -
              </Text>
            </TouchableOpacity>
            

            <Text style={{color: 'black', fontSize: 28, fontWeight: '600'}}>
            {totalitem[userfood.id] || 0}
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
              }}    onPress={()=> dispatch(addfood(1)) }>
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
