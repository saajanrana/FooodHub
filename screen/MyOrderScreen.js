import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Switch,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const MyOrderScreen = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: '#FFF',
        paddingTop:'5%',
        
       }}>
        <View style={{justifyContent:'center',alignItems:"center"}}>
      <View
        style={{
          borderWidth: 2,
          borderColor: '#F2EAEA',
          width: '90%',
          height: 70,
          borderRadius: 30,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:'center'
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#FE724C',
            width:"50%",
            height: 65,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#FFF'}}>Upcoming</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#FFF',
            width: '50%',
            height: 65,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#FE724C'}}>History</Text>
        </TouchableOpacity>
      </View>
      </View>

      <View style={{alignItems:'center'}}>

      <View
        style={{
          marginTop: '5%',
          backgroundColor: '#FFFFFF',
          shadowOpacity: 10,
          elevation: 6,
          shadowColor: 'light-brown',
          borderRadius: 20,
        }}>
        <View style={{padding:'7%', gap: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                width: '30%',
                height: 80,
                shadowOpacity: 10,
                elevation: 6,
                backgroundColor: '#FFF',
                shadowColor: 'light-brown',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
              }}>
              <Image source={require('../assets/starbuckicon.png')} />
            </View>
            <View>
              <Text style={{color: '#9796A1', fontSize: 13, fontWeight: '500'}}>
                3 Items
              </Text>
              <Text style={{color: '#000', fontSize: 16, fontWeight: '600'}}>
                Starbuck
              </Text>
            </View>
            <View>
              <Text style={{color: '#FE724C', fontSize: 16, fontWeight: '400'}}>
                $17.10
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={{color: '#9796A1', fontSize: 13, fontWeight: '500'}}>
              Estimated Arrival
            </Text>
            <Text style={{color: '#9796A1', fontSize: 13, fontWeight: '500'}}>
              Now
            </Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#000', fontSize: 40, fontWeight: '600'}}>
                25
              </Text>
              <View
                style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                <Text style={{color: '#000'}}>min</Text>
              </View>
            </View>
            <View>
              <Text style={{color: '#000', fontWeight: '400', fontSize: 14}}>
                Food on the way
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFF',
                borderWidth: 1,
                width: '45%',
                height: 55,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#F1F2F3',
              }}>
              <Text style={{color: '#000', fontSize: 16, fontWeight: '600'}}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#FE724C',
                width: '45%',
                height: 55,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#FFF', fontSize: 16, fontWeight: '600'}}>
                Track Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </View>

      <View style={{marginTop:'7%', marginLeft:'8%'}}>
        <Text style={{color: '#111719', fontWeight: '600', fontSize: 18}}>
          Lasted Orders
        </Text>
      </View>
    <View style={{alignItems:"center"}}>
      <View
        style={{
          marginTop:'5%',
          backgroundColor: '#FFFFFF',
          shadowOpacity: 10,
          elevation: 6,
          shadowColor: 'light-brown',
          borderRadius: 20,
          
        }}>
        <View style={{padding:'5%', gap: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                width: '30%',
                height: 80,
                shadowOpacity: 10,
                elevation: 6,
                backgroundColor: '#FFF',
                shadowColor: 'light-brown',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
              }}>
              <Image source={require('../assets/subwayicon.png')} />
            </View>
            <View>
              <Text style={{color: '#9796A1', fontSize: 13, fontWeight: '500'}}>
                20 jun, 10:30
              </Text>
              <Text style={{color: '#000', fontSize: 16, fontWeight: '600'}}>
                Subway
              </Text>
            </View>
            <View>
              <Text style={{color: '#FE724C', fontSize: 16, fontWeight: '400'}}>
                $17.10
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFF',
                borderWidth: 1,
                width:'40%',
                height: 55,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#F1F2F3',
              }}>
              <Text style={{color: '#000', fontSize: 16, fontWeight: '600'}}>
                Rate
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#FE724C',
                width:'40%',
                height: 55,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#FFF', fontSize: 16, fontWeight: '600'}}>
                Re-Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </View>
      <View style={{alignItems:"center"}}>
      <View
        style={{
          marginTop:'5%',
          backgroundColor: '#FFFFFF',
          shadowOpacity: 10,
          elevation: 6,
          shadowColor: 'light-brown',
          borderRadius: 20,
          
        }}>
        <View style={{padding:'5%', gap: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                width: '30%',
                height: 80,
                shadowOpacity: 10,
                elevation: 6,
                backgroundColor: '#FFF',
                shadowColor: 'light-brown',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
              }}>
              <Image source={require('../assets/subwayicon.png')} />
            </View>
            <View>
              <Text style={{color: '#9796A1', fontSize: 13, fontWeight: '500'}}>
                20 jun, 10:30
              </Text>
              <Text style={{color: '#000', fontSize: 16, fontWeight: '600'}}>
                Subway
              </Text>
            </View>
            <View>
              <Text style={{color: '#FE724C', fontSize: 16, fontWeight: '400'}}>
                $17.10
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFF',
                borderWidth: 1,
                width:'40%',
                height: 55,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#F1F2F3',
              }}>
              <Text style={{color: '#000', fontSize: 16, fontWeight: '600'}}>
                Rate
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#FE724C',
                width:'40%',
                height: 55,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#FFF', fontSize: 16, fontWeight: '600'}}>
                Re-Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </View>

      <View style={{alignItems:"center",marginBottom:'10%'}}>
      <View
        style={{
          marginTop:'5%',
          backgroundColor: '#FFFFFF',
          shadowOpacity: 10,
          elevation: 6,
          shadowColor: 'light-brown',
          borderRadius: 20,
          
        }}>
        <View style={{padding:'5%', gap: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                width: '30%',
                height: 80,
                shadowOpacity: 10,
                elevation: 6,
                backgroundColor: '#FFF',
                shadowColor: 'light-brown',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
              }}>
              <Image source={require('../assets/subwayicon.png')} />
            </View>
            <View>
              <Text style={{color: '#9796A1', fontSize: 13, fontWeight: '500'}}>
                20 jun, 10:30
              </Text>
              <Text style={{color: '#000', fontSize: 16, fontWeight: '600'}}>
                Subway
              </Text>
            </View>
            <View>
              <Text style={{color: '#FE724C', fontSize: 16, fontWeight: '400'}}>
                $17.10
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFF',
                borderWidth: 1,
                width:'40%',
                height: 55,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#F1F2F3',
              }}>
              <Text style={{color: '#000', fontSize: 16, fontWeight: '600'}}>
                Rate
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#FE724C',
                width:'40%',
                height: 55,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#FFF', fontSize: 16, fontWeight: '600'}}>
                Re-Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default MyOrderScreen;
