import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addfood, removefood } from '../context/StoreSlice';

const AddToCartScreen = ({navigation}) => {
  const route = useRoute();
  const {foodId}= route.params;
  const dispatch = useDispatch();
  const totalitem = useSelector(state => state.store.totalitem);
  // const [promo,setPromo] = useState('');
  // const [msgforprmo,setMsgforpromo] = useState();

  
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
  const calculateTotalPrice = () => {
    const foodPrice = userfood?.price * totalitem;
    const taxAndFee = parseFloat(userfood?.taxandfee) || 0;
    const deliveryCost = parseFloat(userfood?.delivery) || 0;
    const alltotalprice = foodPrice + taxAndFee + deliveryCost
    return alltotalprice;
  };

  // function  promoverify  () {
  //   console.log('promocode>>>',promo);
  //   if(promo === '1234'){
  //     const afterpromo =   (calculateTotalPrice().toFixed())/2;
  //     console.log('afterpromo',afterpromo);
  //     return afterpromo;
  //   }
  //   else{
  //     console.log('hueeeeee');

  //   }

  // }
  const finalvalue =  (calculateTotalPrice().toFixed(2));
  





  console.log('food>>>>',userfood);




 
  return (
    <ScrollView style={{backgroundColor: '#FFF'}}>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          marginTop:'3%',
          marginLeft: '6%',
          marginLeft: '6%',
        }}>
        <View style={{height: 100, width: 100, borderRadius: 20}}>
          <Image
            source={userfood?.imgsrc}
            style={{height: '100%', width: '100%', borderRadius: 20}}
          />
        </View>
        <View style={{gap: 8}}>
          <Text style={{color: '#000', fontSize: 18, fontWeight: '800'}}>
           {userfood?.foodname}
          </Text>
          <Text style={{color: '#8C8A9D', fontSize: 14, fontWeight: 300}}>
            {userfood?.foodname}
          </Text>
          <Text style={{color: '#FE724C', fontSize: 16, fontWeight: '600'}}>
            $ {userfood?.price*totalitem}
          </Text>
        </View>
        <View style={{gap: 30}}>
          <View style={{marginLeft: '40%'}}>
            <TouchableOpacity>
              <Text style={{color: '#FF3600', fontSize: 18}}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', gap: 10}}>
            <TouchableOpacity
              style={{
                width: 29,
                height: 29,
                borderRadius: 50,
                borderColor: '#FF3600',
                borderWidth: 1,
                alignItems: 'center',
                justifyContent:'center'
              }}  onPress={()=> dispatch(removefood(1))}  >

              <Text style={{color: '#FF3600'}}>-</Text>
            </TouchableOpacity>
            <Text style={{color: '#000', fontWeight: '600', fontSize: 23}}>
              {totalitem}
            </Text>
            <TouchableOpacity
              style={{
                width: 29,
                height: 29,
                borderRadius: 50,
                backgroundColor: '#FF3600',
                alignItems: 'center',
                justifyContent:'center'
              }}   onPress={()=> dispatch(addfood(1)) }  >
              <Text style={{color: '#FFF'}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* <View
        style={{
          flexDirection: 'row',
          gap: 10,
          marginTop: 20,
          marginLeft: 20,
          marginLeft: 20,
        }}>
        <View style={{height: 100, width: 100, borderRadius: 20}}>
          <Image
            source={require('../assets/diss1.jpg')}
            style={{height: '100%', width: '100%', borderRadius: 20}}
          />
        </View>
        <View style={{gap: 8}}>
          <Text style={{color: '#000', fontSize: 18, fontWeight: '800'}}>
            Red n hot pizza
          </Text>
          <Text style={{color: '#8C8A9D', fontSize: 14, fontWeight: 300}}>
            Spicy chicken
          </Text>
          <Text style={{color: '#FE724C', fontSize: 16, fontWeight: '600'}}>
            $15.30
          </Text>
        </View>
        <View style={{gap: 30}}>
          <View style={{marginLeft: '40%'}}>
            <TouchableOpacity>
              <Text style={{color: '#FF3600', fontSize: 18}}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', gap: 10}}>
            <TouchableOpacity
              style={{
                width: 29,
                height: 29,
                borderRadius: 50,
                borderColor: '#FF3600',
                borderWidth: 1,
                alignItems: 'center',
                justifyContent:'center'
              }}>
              <Text style={{color: '#FF3600'}}>-</Text>
            </TouchableOpacity>
            <Text style={{color: '#000', fontWeight: '600', fontSize: 16}}>
              02
            </Text>
            <TouchableOpacity
              style={{
                width: 29,
                height: 29,
                borderRadius: 50,
                backgroundColor: '#FF3600',
                alignItems: 'center',
                justifyContent:'center'
              }}>
              <Text style={{color: '#FFF'}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> */}

      <View style={{marginTop:'3%',justifyContent:"center",alignItems:"center"}}>
        <View
          style={{
            borderWidth: 2,
            width:'90%',
            height: 70,
            borderRadius: 40,
            borderColor: '#EEE',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput placeholder="Promo Code" style={{marginLeft: 30}} />
          <TouchableOpacity
            style={{
              backgroundColor: '#FE724C',
              width: '35%',
              height: 55,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight:'2%',
            }}   >
            <Text style={{color: '#FFF'}}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{padding:'7%',gap:20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomColor:'#F1F2F3',
            borderBottomWidth:2
          }}>
          <View>
            <Text style={{color: '#000', fontSize: 16, fontWeight: '400'}}>
              Subtotal
            </Text>
          </View>

          <View style={{flexDirection: 'row',justifyContent:"space-between"}}>
            <Text style={{color: '#000', fontSize: 19, fontWeight: '500'}}>
              ${userfood?.price*totalitem}
            </Text>
            {/* <Text style={{color: '#9796A1', fontSize: 14, fontWeight: '400' ,}}>
              USD
            </Text> */}
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomColor:'#F1F2F3',
            borderBottomWidth:2
          }}>
          <View>
            <Text style={{color: '#000', fontSize: 16, fontWeight: '400'}}>
              Tax and Fees
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#000', fontSize: 19, fontWeight: '500'}}>
              ${userfood?.taxandfee}
            </Text>
            {/* <Text style={{color: '#9796A1', fontSize: 14, fontWeight: '400'}}>
              USD
            </Text> */}
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
           
            borderBottomColor:'#F1F2F3',
            borderBottomWidth:2
          }}>
          <View>
            <Text style={{color: '#000', fontSize: 16, fontWeight: '400'}}>
              Delivery
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#000', fontSize: 19, fontWeight: '500'}}>
              ${userfood?.delivery}
            </Text>
            {/* <Text style={{color: '#9796A1', fontSize: 14, fontWeight: '400'}}>
              USD
            </Text> */}
          </View>
        </View>


        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
           
          }}>
          <View style={{flexDirection:'row',gap:10}}>
            <Text style={{color: '#000', fontSize: 16, fontWeight: '400'}}>
              Total
            </Text>
            {/* <Text style={{color:'#BEBEBE',fontSize:14,fontWeight:'300',}}>
                (2 items)
            </Text> */}
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#000', fontSize: 19, fontWeight: '500'}}>
              ${finalvalue}
            </Text>
            {/* <Text style={{color: '#9796A1', fontSize: 14, fontWeight: '400'}}>
              USD
            </Text> */}
          </View>
        </View>
      </View>

      <View style={{justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity style={{backgroundColor:'#FE724C',width:'80%',height:60,borderRadius:30,justifyContent:'center',alignItems:'center'}} onPress={()=>navigation.navigate('MyOrderScreen')} >
                  <Text style={{color:'#FFF',fontSize:15,fontWeight:'600'}}>CHECKOUT</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default AddToCartScreen;
