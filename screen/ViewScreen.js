import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';

const ViewScreen = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#FFF'}}>
      <ImageBackground
        source={require('../assets/newviewbackpic.jpg')}
        style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginTop: '5%',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/goback.png')} />
          </TouchableOpacity>
          <View style={{flexWrap: 'wrap', marginLeft: '5%'}}>
            <Text style={{fontSize: 60, color: '#272D2F', fontWeight: '700'}}>
              Fast
            </Text>
            <Text
              style={{
                fontSize: 60,
                color: '#FE724C',
                fontStyle: 'normal',
                fontWeight: '700',
              }}>
              Food
            </Text>
            <Text style={{color: '#9796A1', fontSize: 18}}>
              80 type of pizza
            </Text>
          </View>
        </View>
      </ImageBackground>

      <View style={{flex: 1, alignItems: 'center', marginTop: 30, gap: 30}}>
        <View
          style={{
            backgroundColor: '#FFF',
            shadowOpacity: 10,
            elevation: 1,
            shadowColor: 'light-brown',
            borderRadius: 30,
          }}>
          <View style={{position: 'relative'}}>
            <Image
              source={require('../assets/pizaaviewfood.png')}
              style={{borderRadius: 30}}
            />
            <Image
              source={require('../assets/likeicons.png')}
              style={{position: 'absolute', top: '2%', right: '2%'}}
            />

            <View style={{position: 'absolute', top: '7%', left: '7%',flexDirection:"row",backgroundColor:'white',borderRadius:20,padding:'2.5%',alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:"#FE724C",fontWeight:'600',fontSize:18}}>$</Text>
               <Text style={{color:'#000',fontWeight:'600',fontSize:18}}>10.35</Text>
            </View>
            <View style={{position: 'absolute', bottom: '-12%', left: '7%',flexDirection:"row",backgroundColor:'white',borderRadius:20,padding:'2.5%',alignItems:'center',justifyContent:'center'}}>
               <Text style={{color:'#000',fontWeight:'600',fontSize:18}}>4.5</Text>
            </View>
          </View>
          <View style={{padding: '5%'}}>
            <Text style={{color: '#000', fontSize: 19, fontWeight: '600'}}>
              Chicken Hawaiian
            </Text>
            <Text style={{color: '#5B5B5E', fontSize: 15, fontWeight: '400'}}>
              Chicken,Cheese and pineapple
            </Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'center', marginTop: 30, gap: 30}}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            shadowOpacity: 10,
            elevation: 1,
            shadowColor: 'light-brown',
            borderRadius: 30,
          }}>
          <View style={{position: 'relative'}}>
            <Image
              source={require('../assets/pizaaviewfood.png')}
              style={{borderRadius: 30}}
            />
            <Image
              source={require('../assets/likeicons.png')}
              style={{position: 'absolute', top: '2%', right: '2%'}}
            />

            <View style={{position: 'absolute', top: '7%', left: '7%',flexDirection:"row",backgroundColor:'white',borderRadius:20,padding:'2.5%',alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:"#FE724C",fontWeight:'600',fontSize:18}}>$</Text>
               <Text style={{color:'#000',fontWeight:'600',fontSize:18}}>10.35</Text>
            </View>
            <View style={{position: 'absolute', bottom: '-12%', left: '7%',flexDirection:"row",backgroundColor:'white',borderRadius:20,padding:'2.5%',alignItems:'center',justifyContent:'center'}}>
               <Text style={{color:'#000',fontWeight:'600',fontSize:18}}>4.5</Text>
            </View>
          </View>
          <View style={{padding: '5%'}}>
            <Text style={{color: '#000', fontSize: 19, fontWeight: '600'}}>
              Chicken Hawaiian
            </Text>
            <Text style={{color: '#5B5B5E', fontSize: 15, fontWeight: '400'}}>
              Chicken,Cheese and pineapple
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ViewScreen;
