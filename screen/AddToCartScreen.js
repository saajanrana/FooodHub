import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addfood, removefood, removeitemformcart} from '../context/StoreSlice';
import {url} from '../components/url';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const AddToCartScreen = ({navigation}) => {
  console.log('addtocartscreen render>>>>>>>>>1');
  const route = useRoute();
  const {foodId} = route.params;
  const dispatch = useDispatch();
  const totalitem = useSelector(state => state.store.totalitem);
  const Addtocart = useSelector(state => state.store.Addtocart);
  // console.log('addeditems>>>>>>', Addtocart);
  const usertoken = useSelector(state => state.auth.usertoken);
  const [openmodal, setOpenmodal] = useState(false);

  // console.log('totlaitem>>>>>', totalitem);

  const calculateSubtotal = () => {
    let subtotal = 0;
    Addtocart.forEach(item => {
      const itemId = item?.userfood?.id;
      const itemPrice = item?.userfood?.price || 0;
      const itemCount = totalitem[itemId] || 0;
      subtotal += itemPrice * itemCount;
    });

    return subtotal.toFixed(2);
  };

  const removeitem = id => {
    dispatch(removeitemformcart(id));
  };

  const total = () => {
    const totalpriceattocart = calculateSubtotal() + 50 + 100;
    return totalpriceattocart;
  };

  const cheakout = async () => {
    let mergedData = {};
    Addtocart.forEach(item => {
      let foodId = item.userfood.id;
      let quantity = totalitem[foodId] || 0; // Set quantity to 0 if not found in totalitem
      mergedData[foodId] = {
        ...item.userfood,
        quantity,
      };
    });

    const valuesArray = Object.values(mergedData);

    let jsonData = JSON.stringify(valuesArray);

    const response = await fetch(`${url}api/userfood`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: usertoken,
      },
      body: jsonData,
    });
    const data = await response.json();
    // console.log('data>>>>>>>', data);
    if (response.ok) {
      // console.log('hue hue hue');

      navigation.navigate('MyOrderScreen');
    }
  };

  return (
    <ScrollView style={styles.maincontainer}>
      <View style={styles.headercontainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headertouchbtn}>
          <Icon name="arrow-back-ios" style={styles.backbtn} color="black" />
        </TouchableOpacity>
        <View style={styles.headertxtview}>
        <Text style={styles.headertxt}>Cart</Text>
        </View>
      </View>
      <View style={styles.secondcontainer}>
        {Addtocart.map(item => {
          return (
            <View key={item?.id} style={styles.cartitemdiv}>
              <View style={styles.itemimg}>
                <Image
                  source={item?.userfood?.imgsrc}
                  style={styles.itemimgsty}
                />
              </View>
              <View style={styles.cartitemdata}>
                <View style={styles.itmefooddata}>
                  <Text style={styles.itmefooddatatxt}>
                    {item?.userfood?.foodname}
                  </Text>
                  <TouchableOpacity
                    style={styles.xbtn}
                    onPress={() => removeitem(item?.userfood?.id)}>
                    <Icon name="close"
                        color="#FE724C"
                        style={styles.removebtntxt} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.fooddatatxt}>
                  {item?.userfood?.foodname}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                  }}>
                  <Text
                    style={{
                      color: '#FE724C',
                      fontSize: responsiveFontSize(2),
                      fontFamily: 'Gilroy-SemiBold',
                    }}>
                    $
                    {(
                      item?.userfood?.price *
                      (totalitem[item?.userfood?.id] || 0)
                    ).toFixed(2)}
                  </Text>
                  <View style={{flexDirection: 'row', gap: responsiveWidth(1)}}>
                    <TouchableOpacity
                      onPress={() => dispatch(removefood(item?.userfood?.id))}>
                      <Icon
                        name="remove-circle"
                        color="#FE724C"
                        style={styles.removebtntxt}
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        color: '#000',
                        fontFamily: 'Gilroy-SemiBold',
                        fontSize: responsiveFontSize(2),
                      
                      }}>
                      {totalitem[item?.userfood?.id] ||
                        removeitem(item?.userfood?.id)}
                    </Text>
                    <TouchableOpacity
                      onPress={() => dispatch(addfood(item?.userfood?.id))}>
                      <Icon
                        name="add-circle"
                        color="#FE724C"
                        style={styles.removebtntxt}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        })}

        <View
          style={{
            marginTop: responsiveHeight(5),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              borderWidth: responsiveWidth(0.2),
              width: responsiveWidth(80),
              height: responsiveHeight(10),
              borderRadius: responsiveWidth(10),
              borderColor: '#EEE',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextInput
              placeholder="Promo Code"
              style={{
                marginLeft: responsiveHeight(3),
                fontSize: responsiveFontSize(2),
                fontFamily: 'Gilroy',
              }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: '#FE724C',
                width: responsiveWidth(28),
                height: responsiveHeight(8),
                borderRadius: responsiveWidth(10),
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: responsiveWidth(2),
              }}>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: responsiveFontSize(2.2),
                  fontFamily: 'Gilroy-SemiBold',
                }}>
                Apply
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            gap: responsiveWidth(2),
            width: responsiveWidth(90),
            marginTop: responsiveHeight(5),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomColor: '#F1F2F3',
              borderBottomWidth: responsiveWidth(0.3),
              flexWrap: 'wrap',
              paddingBottom:responsiveHeight(1.5)
            }}>
            <View>
              <Text
                style={{
                  color: '#000',
                  fontSize: responsiveFontSize(2),
                  fontFamily: 'Gilroy-SemiBold',
                }}>
                Subtotal
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between',gap:responsiveWidth(1)}}>
              <Text
                style={{
                  color: '#000',
                  fontSize: responsiveFontSize(2),
                  fontFamily: 'Gilroy-SemiBold',
                }}>
                ${calculateSubtotal()}
              </Text>
              <Text style={{color: '#9796A1',fontSize:responsiveFontSize(1.6),fontFamily:'Gilroy-Medium'}}>
              USD
            </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomColor: '#F1F2F3',
              borderBottomWidth: responsiveWidth(0.2),
              flexWrap: 'wrap',
              paddingBottom:responsiveHeight(1.5)
            }}>
            <View>
              <Text
                style={{
                  color: '#000',
                  fontSize: responsiveFontSize(2),
                  fontFamily: 'Gilroy-SemiBold',
                }}>
                Tax and Fees
              </Text>
            </View>

            <View style={{flexDirection: 'row',gap:responsiveWidth(1)}}>
              <Text
                style={{
                  color: '#000',
                  fontSize: responsiveFontSize(2),
                  fontFamily: 'Gilroy-SemiBold',
                }}>
                $00
              </Text>
              <Text style={{color: '#9796A1',fontSize:responsiveFontSize(1.6),fontFamily:'Gilroy-Medium'}}>
              USD
            </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',

              borderBottomColor: '#F1F2F3',
              borderBottomWidth: responsiveWidth(0.2),
              paddingBottom:responsiveHeight(1.5),
              flexWrap: 'wrap',
            }}>
            <View>
              <Text
                style={{
                  color: '#000',
                  fontSize: responsiveFontSize(2),
                  fontFamily: 'Gilroy-SemiBold',
                }}>
                Delivery
              </Text>
            </View>

            <View style={{flexDirection: 'row',gap:responsiveWidth(1)}}>
              <Text
                style={{
                  color: '#000',
                  fontSize: responsiveFontSize(2),
                  fontFamily: 'Gilroy-SemiBold',
                }}>
                $00
              </Text>
              <Text style={{color: '#9796A1',fontSize:responsiveFontSize(1.6),fontFamily:'Gilroy-Medium'}}>
              USD
            </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              marginTop:responsiveHeight(0.5)
           
            }}>
            <View style={{flexDirection: 'row',gap:responsiveFontSize(0.5),alignItems:'center'}}>
              <Text
                style={{
                  color: '#000',
                  fontSize: responsiveFontSize(2),
                  fontFamily: 'Gilroy-SemiBold',
                }}>
                Total
              </Text>
              <Text style={{color:'#BEBEBE',fontFamily:'Gilroy-Medium',fontSize:responsiveFontSize(1.6)}}>
                (2 items)
            </Text>
            </View>

            <View style={{flexDirection: 'row',gap:responsiveWidth(1)}}>
              <Text
                style={{
                  color: '#000',
                  fontSize: responsiveFontSize(2),
                  fontFamily: 'Gilroy-SemiBold',
                }}>
                ${calculateSubtotal()}
              </Text>
              <Text style={{color: '#9796A1',fontSize:responsiveFontSize(1.6),fontFamily:'Gilroy-Medium'}}>
              USD
            </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#FE724C',
            width: responsiveWidth(70),
            height: responsiveHeight(8),
            borderRadius: responsiveWidth(10),
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: responsiveHeight(7),
            marginTop: responsiveHeight(5),
          }}
          onPress={cheakout}>
          <Text
            style={{
              color: '#FFF',
              fontSize: responsiveFontSize(2.2),
              fontFamily: 'Gilroy-Bold',
            }}>
            CHECKOUT
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  maincontainer: {backgroundColor: '#FFF', flex: 1},
  secondcontainer: {alignItems: 'center', justifyContent: 'center', flex: 1},
  cartitemdiv: {
    flexDirection: 'row',
    marginTop: responsiveHeight(2.5),
    width: responsiveWidth(90),
    gap: responsiveWidth(2),
    alignItems: 'center',
  },
  itemimg: {
    height: responsiveHeight(12),
    width: responsiveWidth(25),
    borderRadius: responsiveWidth(2),
  },
  itemimgsty: {
  
    height: responsiveHeight(12),
    width: responsiveWidth(25),
    borderRadius: responsiveWidth(2),
  },
  cartitemdata: { width: responsiveWidth(60),height:responsiveHeight(12),justifyContent:"space-between"},
  itmefooddata: {justifyContent: 'space-between', flexDirection: 'row'},
  itmefooddatatxt: {
    color: '#000',
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'Gilroy-Bold',
  },
  xbtntxt: {color: '#FF3600', fontSize: responsiveFontSize(2.5)},
  fooddatatxt: {
    color: '#8C8A9D',
    fontSize: responsiveFontSize(2),
    fontFamily: 'Gilroy-SemiBold',
  },
  headercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: responsiveWidth(5),
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
  headertxtview:{
    justifyContent:'center',
    alignContent:'center',
    width: responsiveWidth(60),
  },
  headertxt: {
    fontSize: responsiveFontSize(3),
    fontFamily: 'Gilroy-Bold',
    color: 'black',
    textAlign: 'center',
    marginLeft: responsiveWidth(15),
  },
  removebtntxt: {
    fontSize: responsiveFontSize(3),
  },
});

export default AddToCartScreen;
