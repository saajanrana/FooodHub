import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const AddToCartScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#FFF', width: '100%', height: '100%'}}>
      <View
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
              }}>
              <Text style={{color: '#FFF'}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
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
              }}>
              <Text style={{color: '#FFF'}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{padding: 20, marginTop: 15}}>
        <View
          style={{
            borderWidth: 2,
            width: 380,
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
              width: 120,
              height: 55,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 15,
            }}>
            <Text style={{color: '#FFF'}}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            borderBottomColor:'#F1F2F3',
            borderBottomWidth:2
          }}>
          <View>
            <Text style={{color: '#000', fontSize: 16, fontWeight: '400'}}>
              Subtotal
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#000', fontSize: 19, fontWeight: '500'}}>
              $27.30
            </Text>
            <Text style={{color: '#9796A1', fontSize: 14, fontWeight: '400'}}>
              USD
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
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
              $5.30
            </Text>
            <Text style={{color: '#9796A1', fontSize: 14, fontWeight: '400'}}>
              USD
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
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
              $1.00
            </Text>
            <Text style={{color: '#9796A1', fontSize: 14, fontWeight: '400'}}>
              USD
            </Text>
          </View>
        </View>


        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
          }}>
          <View style={{flexDirection:'row',gap:10}}>
            <Text style={{color: '#000', fontSize: 16, fontWeight: '400'}}>
              Total
            </Text>
            <Text style={{color:'#BEBEBE',fontSize:14,fontWeight:'300',}}>
                (2 items)
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#000', fontSize: 19, fontWeight: '500'}}>
              $33.60
            </Text>
            <Text style={{color: '#9796A1', fontSize: 14, fontWeight: '400'}}>
              USD
            </Text>
          </View>
        </View>
      </View>

      <View style={{marginLeft:30,marginTop:20}}>
          <TouchableOpacity style={{backgroundColor:'#FE724C',width:350,height:60,borderRadius:30,justifyContent:'center',alignItems:'center'}} onPress={()=>navigation.navigate('MyOrderScreen')} >
                  <Text style={{color:'#FFF',fontSize:15,fontWeight:'600'}}>CHECKOUT</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddToCartScreen;
