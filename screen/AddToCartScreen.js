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
  Modal
  
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addfood, removefood, removeitemformcart } from '../context/StoreSlice';
import { url } from '../components/url';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';


const AddToCartScreen = ({navigation}) => {
  const route = useRoute();
  const {foodId}= route.params;
  const dispatch = useDispatch();
  const totalitem = useSelector(state => state.store.totalitem);
  const Addtocart = useSelector(state => state.store.Addtocart);
  console.log("addeditems>>>>>>",Addtocart);
  const usertoken = useSelector(state => state.auth.usertoken);
  const [openmodal,setOpenmodal] = useState(false);


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
      if(response.ok){
        console.log('hue hue hue');
        navigation.navigate('MyOrderScreen');
      }
    }


  return (
    <ScrollView style={styles.maincontainer}>
      <View style={styles.secondcontainer}>
       { Addtocart.map((item,id)=>{
      return(
        <View key={id}
        style={styles.cartitemdiv}>
        <View style={styles.itemimg}>
          <Image
            source={item?.userfood?.imgsrc}
            style={styles.itemimgsty}
          />
        </View>
        <View style={styles.cartitemdata}>
          <View style={styles.itmefooddata} >
              <Text style={styles.itmefooddatatxt}>
                {item?.userfood?.foodname}
               </Text>
          <TouchableOpacity style={styles.xbtn} onPress={()=>removeitem(item?.userfood?.id)}>
              <Text style={styles.xbtntxt}>X</Text>
          </TouchableOpacity>
          </View>
          <Text style={styles.fooddatatxt}>
            {item?.userfood?.foodname}
          </Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap'}}>
          <Text style={{color: '#FE724C', fontSize: responsiveFontSize(1.8), fontWeight: '600'}}>
            ${(item?.userfood?.price*(totalitem[item?.userfood?.id] || 0)).toFixed(2)}
          </Text>
          <View style={{flexDirection:'row',gap:responsiveWidth(1)}}>
            <TouchableOpacity
              style={{
                width: 29,
                height: 29,
                borderRadius: 50,
                borderColor: '#FF3600',
                borderWidth: 1,
                alignItems: 'center',
                justifyContent:'center'
              }} 
            onPress={()=> dispatch(removefood(item?.userfood?.id))}>

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

      <View style={{marginTop:responsiveHeight(5),justifyContent:"center",alignItems:"center"}}>
        <View
          style={{
            borderWidth:responsiveWidth(.2),
            width:responsiveWidth(80),
            height:responsiveHeight(10),
            borderRadius:responsiveWidth(10),
            borderColor: '#EEE',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput placeholder="Promo Code" style={{marginLeft:responsiveHeight(3),fontSize:responsiveFontSize(1.6)}} />
          <TouchableOpacity
            style={{
              backgroundColor: '#FE724C',
              width:responsiveWidth(28),
              height:responsiveHeight(8),
              borderRadius:responsiveWidth(10),
              justifyContent: 'center',
              alignItems: 'center',
              marginRight:responsiveWidth(2),
            }}   >
            <Text style={{color: '#FFF',fontSize:responsiveFontSize(1.6)}}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{gap:responsiveWidth(1.4),width:responsiveWidth(90),marginTop:responsiveHeight(5)}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomColor:'#F1F2F3',
            borderBottomWidth:responsiveWidth(0.2),
            flexWrap:'wrap'
          }}>
          <View>
            <Text style={{color: '#000', fontSize: responsiveFontSize(1.8), fontWeight: '400'}}>
              Subtotal
            </Text>
          </View>
          <View style={{flexDirection: 'row',justifyContent:"space-between",}}>
            <Text style={{color: '#000', fontSize: responsiveFontSize(1.8), fontWeight: '500'}}>
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
            borderBottomWidth:responsiveWidth(0.2),
            flexWrap:'wrap'
          }}>
          <View>
            <Text style={{color: '#000', fontSize: responsiveFontSize(1.8), fontWeight: '400'}}>
              Tax and Fees
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#000', fontSize: responsiveFontSize(1.8), fontWeight: '500'}}>
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
            borderBottomWidth:responsiveWidth(0.2),
           
            flexWrap:'wrap'
          }}>
          <View>
            <Text style={{color: '#000', fontSize: responsiveFontSize(1.8), fontWeight: '400'}}>
              Delivery
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#000', fontSize:responsiveFontSize(1.8), fontWeight: '500'}}>
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
           
            flexWrap:'wrap'
           
          }}>
          <View style={{flexDirection:'row'}}>
            <Text style={{color: '#000', fontSize:responsiveFontSize(1.8), fontWeight: '400'}}>
              Total
            </Text>
            {/* <Text style={{color:'#BEBEBE',fontSize:14,fontWeight:'300',}}>
                (2 items)
            </Text> */}
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#000', fontSize:responsiveFontSize(1.8), fontWeight: '500'}}>
              {/* ${finalvalue} */} {calculateSubtotal()}
            </Text>
            {/* <Text style={{color: '#9796A1', fontSize: 14, fontWeight: '400'}}>
              USD
            </Text> */}
          </View>
        </View>
      </View>

      <TouchableOpacity style={{backgroundColor:'#FE724C',width:responsiveWidth(80),height:responsiveHeight(8),borderRadius:responsiveWidth(10),justifyContent:'center',alignItems:'center',marginBottom:responsiveHeight(7),marginTop:responsiveHeight(5)}} onPress={cheakout} >
                  <Text style={{color:'#FFF',fontSize:responsiveFontSize(1.5),fontWeight:'600'}}>CHECKOUT</Text>
          </TouchableOpacity>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  maincontainer:{backgroundColor: '#FFF',flex:1},
  secondcontainer:{alignItems:'center',justifyContent:"center",flex:1},
  cartitemdiv:{
    flexDirection: 'row',
    marginTop:responsiveHeight(2.5),
    width:responsiveWidth(90),
    gap:responsiveWidth(2),
    alignItems:"center"
  },
  itemimg:{height:responsiveHeight(15), width:responsiveWidth(25), borderRadius:responsiveWidth(2)},
  itemimgsty:{height:responsiveHeight(17), width:responsiveWidth(25), borderRadius:responsiveWidth(2)},
  cartitemdata:{gap:responsiveHeight(1),width:responsiveWidth(60)},
  itmefooddata:{justifyContent:'space-between',flexDirection:'row'},
  itmefooddatatxt:{color: '#000', fontSize:responsiveFontSize(2), fontWeight: '800'},
  xbtn:{alignItems:'flex-end'},
  xbtntxt:{color: '#FF3600', fontSize:responsiveFontSize(2)},
  fooddatatxt:{color: '#8C8A9D', fontSize:responsiveFontSize(1.7), fontWeight: '300'}
});

export default AddToCartScreen;
