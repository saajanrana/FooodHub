import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {RadioButton} from 'react-native-paper';

const FoodDetailScreen = ({navigation}) => {
  const [checked, setChecked] = useState('first');
  return (
    <View style={{backgroundColor: '#FFF', height: '100%', width: '100%'}}>
      <View>
        <View style={{height: 242, width: 428, borderRadius: 10, padding: 20}}>
          <Image
            source={require('../assets/diss1.jpg')}
            style={{
              height: '100%',
              width: '100%',
              borderRadius: 10,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          />
        </View>
        <View style={{paddingLeft: 20, paddingRight: 20}}>
          <Text style={{color: '#323643', fontSize: 28, fontWeight: '600'}}>
            Ground Beef Tacos
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 20,
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          <View>
            <Text
              style={{
                color: 'var(--ffffff, #111719)',
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
            paddingLeft: 20,
            paddingRight: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#FE724C',
                fontSize: 17,
                fontWeight: '500',
                marginTop: 18,
              }}>
              $
            </Text>
            <Text style={{color: '#FE724C', fontSize: 31, fontWeight: '600'}}>
              9.5
            </Text>
          </View>
          <View style={{flexDirection: 'row', gap: 20, marginTop: 10}}>
            <Text
              style={{
                borderWidth: 1,
                height: 30,
                width: 30,
                borderRadius: 30,
                textAlign: 'center',
                color: '#FE724C',
              }}>
              +
            </Text>
            <Text style={{color: 'black', fontSize: 18, fontWeight: '600'}}>
              02
            </Text>
            <Text
              style={{
                borderWidth: 1,
                height: 30,
                width: 30,
                borderRadius: 30,
                textAlign: 'center',
                backgroundColor: '#FE724C',
                color: 'white',
              }}>
              -
            </Text>
          </View>
        </View>
      </View>

      <View style={{padding: 20}}>
        <Text style={{color: '#858992'}}>
          Brown the beef better. Lean ground beef – I like to use 85% lean
          angus. Garlic – use fresh chopped. Spices – chili powder, cumin, onion
          powder.
        </Text>
      </View>
      <View>
        <View style={{marginLeft: 20}}>
          <Text style={{color: '#323643', fontSize: 18, fontWeight: '600'}}>
            Choice of Add On
          </Text>
        </View>

        <View style={{marginTop: 15}}>
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
                <View>
                  <RadioButton color="#FE724C" value="third" />
                </View>
              </View>
            </View>
          </RadioButton.Group>
        </View>
      </View>
         <TouchableOpacity style={{marginLeft:'25%',marginTop:60}} onPress={()=>navigation.navigate('AddToCartScreen')}  >
             <Image source={require('../assets/addtocart.png')}/>
             <Text style={{position:'absolute',top:32,left:85,color:'#FFF'}}>Add To Cart</Text>
         </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({});

export default FoodDetailScreen;
