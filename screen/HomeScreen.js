import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Header from '../components/Header';

//git remote add origin https://github.com/saajanrana/FooodHub.git

const HomeScreen = ({navigation}) => {
  const fliterdata = [
    {
      key: '1',
      name: 'Assian',
      src: require('../assets/asian.jpg'),
    },
    {
      key: '2',
      name: 'Burger',
      src: require('../assets/burger.png'),
    },
    {
      key: '3',
      name: 'Donat',
      src: require('../assets/donat.png'),
    },
    {
      key: '4',
      name: 'Maxican',
      src: require('../assets/mexican.png'),
    },
    {
      key: '5',
      name: 'Pizaa',
      src: require('../assets/pizaa.jpg'),
    },
  ];
  const featurerestdata = [
    {
      key: '1',
      name: 'McDonald’s',
      src: require('../assets/diss1.jpg'),
    },
    {
      key: '2',
      name: 'McDonald’s',
      src: require('../assets/diss1.jpg'),
    },
    {
      key: '3',
      name: 'McDonald’s',
      src: require('../assets/diss1.jpg'),
    },
    {
      key: '4',
      name: 'McDonald’s',
      src: require('../assets/diss1.jpg'),
    },
    {
      key: '5',
      name: 'McDonald’s',
      src: require('../assets/diss1.jpg'),
    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles?.filtericon}>
      <View>
        <Image source={item?.src} style={styles?.filterimgae} />
      </View>
      <View>
        <Text style={styles?.filtername}>{item?.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderfeaturerest = ({item}) => (
    <TouchableOpacity
      style={{width: 290, height: 240, borderRadius: 20, marginTop: 20}}
      onPress={()=>{navigation.navigate('FoodDetail')}}
      >
      <View style={{width: '100%', height: '60%'}}>
        <Image
          source={item.src}
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: '#FFF',
          padding: 10,
          width: '100%',
          height: '40%',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <View>
          <Text style={{color: '#000', fontSize: 15, fontWeight: '600'}}>
            {item.name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            justifyContent: 'space-',
          }}>
          <View>
            <Text style={{color: '#7E8392', fontSize: 12, fontWeight: '400'}}>
              Free delivery
            </Text>
          </View>
          <View>
            <Text style={{color: '#7E8392', fontSize: 12, fontWeight: '400'}}>
              10-15 mins
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              width: 70,
              flexWrap: 'wrap',
              backgroundColor: 'light-gray',
              borderRadius: 5,
              marginLeft: 10,
            }}>
            <Text
              style={{
                color: '#8A8E9B',
                fontSize: 12,
                fontWeight: 400,
                textAlign: 'center',
              }}>
              Burger
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <GestureHandlerRootView>
      <SafeAreaView
        style={{backgroundColor: '#FCFCFD', width: '100%', height: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
          }}>
          <Header
            onPressMenu={() => {
              // console.log('holaamigo')
            navigation.openDrawer();
            }}
            isMenu={true}
          />
          <View>
            <View>
              <Text>Delivery To --</Text>
            </View>
            <View>
              <Text>4102 Pretty View Lane</Text>
            </View>
          </View>
          <View>
            <Image
              style={{height: 50, width: 50, borderRadius: 20}}
              source={require('../assets/food.png')}
            />
          </View>
        </View>
        <View style={{marginLeft: 30, marginRight: 40}}>
          <Text style={{color: '#323643', fontWeight: '700', fontSize: 30}}>
            What would you like to order
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#EFEFEF',
              width: 300,
              height: 71,
              marginLeft: 30,
              justifyContent: 'center',
              borderRadius: 10,
              marginTop: 15,
            }}>
            <TextInput
              placeholder="Find for food or restaurant..."
              style={{
                color: '#9AA0B4',
                fontSize: 14,
                fontWeight: '400',
                marginLeft: 10,
              }}
            />
          </View>
          <View style={{height: '100%', width: '100%'}}>
            <TouchableOpacity>
              <Image
                source={require('../assets/fliter.png')}
                style={{width: 110, height: 110}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginLeft: 20}}>
          <FlatList
            data={fliterdata}
            keyExtractor={item => item?.key}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 25,
            paddingRight: 25,
          }}>
          <View>
            <Text style={{color: '#323643', fontSize: 18, fontWeight: '600'}}>
              {' '}
              Featured Restaurants{' '}
            </Text>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                color: '#F56844',
                fontWeight: '400',
                fontSize: 14,
                marginTop: 5,
              }}>
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={featurerestdata}
            keyExtractor={item => item?.key}
            renderItem={renderfeaturerest}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
          />
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  filtericon: {
    width: 70,
    height: 110,
    borderRadius: 40,
    backgroundColor: '#FFF',
    shadowColor: '#D3D1D8',
    shadowOpacity: 1,
    shadowRadius: 40,
    elevation: 5,
    alignItems: 'center',
  },
  filterimgae: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  filtername: {
    color: '#67666D',
    fontSize: 11,
    textAlign: 'center',
  },
  flatListContainer: {
    padding: 30,
    gap: 20,
    flexGrow: 1,
  },
});

export default HomeScreen;
