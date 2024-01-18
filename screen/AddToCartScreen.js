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
import { addfood, removefood, removeitemformcart } from '../context/StoreSlice';
import { url } from '../components/url';


const AddToCartScreen = ({navigation}) => {
  const route = useRoute();
  const {foodId}= route.params;
  const dispatch = useDispatch();
  const totalitem = useSelector(state => state.store.totalitem);
  const Addtocart = useSelector(state => state.store.Addtocart);
  console.log("addeditems>>>>>>",Addtocart);
  const usertoken = useSelector(state => state.auth.usertoken);


  console.log('totlaitem>>>>>',totalitem);


  const calculateSubtotal = () => {
    let subtotal = 0;

    Addtocart.forEach((item) => {
      const itemId = item?.userfood?.id;
      const itemPrice = item?.userfood?.price || 0;
      const itemCount = totalitem[itemId] || 0;

      subtotal += itemPrice * itemCount;
    });

    return subtotal.toFixed(2);
  };

  const removeitem = (id) =>{
    dispatch(removeitemformcart(id))
  }

    const total = () =>{
      const totalpriceattocart = calculateSubtotal()+50+100;
      return totalpriceattocart;
    }




    const cheakout = async() =>{

      let mergedData = {};

      Addtocart.forEach(item => {
        let foodId = item.userfood.id;
        let quantity = totalitem[foodId] || 0; // Set quantity to 0 if not found in totalitem
        mergedData[foodId] = {
          ...item.userfood,
          quantity
        };
      });

      const valuesArray = Object.values(mergedData);
  

      let jsonData = JSON.stringify(valuesArray);

      const response = await fetch(`${url}api/userfood`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
            Authorization: usertoken,
        },
        body: jsonData,
      });
      const data = await response.json();
      console.log('data>>>>>>>',data);
      // navigation.navigate('MyOrderScreen');
    }


  return (
    <ScrollView style={{backgroundColor: '#FFF',flex:1,width:'100vw'}}>
      <View style={{alignItems:'center',width:'100vw',justifyContent:"center"}}>
     { Addtocart.map((item,id)=>{
      return(
        <View key={id}
        style={{
          flexDirection: 'row',
          marginTop:'5%',
          width:'90%',
          gap:10,
          alignItems:"center"
        }}>
        <View style={{height: 100, width:'28%', borderRadius: 20}}>
          <Image
            source={item?.userfood?.imgsrc}
            style={{height: '100%', width: '100%', borderRadius: 20}}
          />
        </View>
        <View style={{gap:8,width:'70%'}}>
          <View style={{justifyContent:'space-between',flexDirection:'row'}} >
              <Text style={{color: '#000', fontSize: 18, fontWeight: '800'}}>
                {item?.userfood?.foodname}
               </Text>
          <TouchableOpacity style={{alignItems:'flex-end'}} onPress={()=>removeitem(item?.userfood?.id)}>
              <Text style={{color: '#FF3600', fontSize: 18}}>X</Text>
          </TouchableOpacity>
          </View>
          <Text style={{color: '#8C8A9D', fontSize: 14, fontWeight: 300}}>
            {item?.userfood?.foodname}
          </Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap'}}>
          <Text style={{color: '#FE724C', fontSize: 16, fontWeight: '600'}}>
            ${(item?.userfood?.price*(totalitem[item?.userfood?.id] || 0)).toFixed(2)}
          </Text>
          <View style={{flexDirection:'row',gap:10}}>
            <TouchableOpacity
              style={{
                width: 29,
                height: 29,
                borderRadius: 50,
                borderColor: '#FF3600',
                borderWidth: 1,
                alignItems: 'center',
                justifyContent:'center'
              }}  onPress={()=> dispatch(removefood(item?.userfood?.id))}>

              <Text style={{color: '#FF3600',fontSize:18}}>-</Text>
            </TouchableOpacity>
            <Text style={{color: '#000', fontWeight: '600', fontSize: 20}}>
            {totalitem[item?.userfood?.id] ||removeitem(item?.userfood?.id) }
            </Text>
            <TouchableOpacity
              style={{
                width: 29,
                height: 29,
                borderRadius: 50,
                backgroundColor: '#FF3600',
                alignItems: 'center',
                justifyContent:'center'
              }}   onPress={()=> dispatch(addfood(item?.userfood?.id)) }>
              <Text style={{color: '#FFF',fontSize:20}}>+</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      )})}

      <View style={{marginTop:'7%',justifyContent:"center",alignItems:"center"}}>
        <View
          style={{
            borderWidth: 2,
            width:'80%',
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

      <View style={{gap:20,width:'90%',marginTop:'7%'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomColor:'#F1F2F3',
            borderBottomWidth:2,
            gap:10,
            flexWrap:'wrap'
          }}>
          <View>
            <Text style={{color: '#000', fontSize: 16, fontWeight: '400'}}>
              Subtotal
            </Text>
          </View>
          <View style={{flexDirection: 'row',justifyContent:"space-between",}}>
            <Text style={{color: '#000', fontSize: 19, fontWeight: '500'}}>
            {calculateSubtotal()}
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
            borderBottomWidth:2,
            gap:10,
            flexWrap:'wrap'
          }}>
          <View>
            <Text style={{color: '#000', fontSize: 16, fontWeight: '400'}}>
              Tax and Fees
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#000', fontSize: 19, fontWeight: '500'}}>
              {/* {calculatedeliverycharges()} */}00
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
            borderBottomWidth:2,
            gap:10,
            flexWrap:'wrap'
          }}>
          <View>
            <Text style={{color: '#000', fontSize: 16, fontWeight: '400'}}>
              Delivery
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#000', fontSize: 19, fontWeight: '500'}}>
              {/* ${userfood?.delivery} */}00
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
            gap:10,
            flexWrap:'wrap'
           
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
              {/* ${finalvalue} */} {calculateSubtotal()}
            </Text>
            {/* <Text style={{color: '#9796A1', fontSize: 14, fontWeight: '400'}}>
              USD
            </Text> */}
          </View>
        </View>
      </View>

      <TouchableOpacity style={{backgroundColor:'#FE724C',width:'80%',height:60,borderRadius:30,justifyContent:'center',alignItems:'center',marginBottom:'7%',marginTop:'5%'}} onPress={cheakout} >
                  <Text style={{color:'#FFF',fontSize:15,fontWeight:'600'}}>CHECKOUT</Text>
          </TouchableOpacity>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default AddToCartScreen;
