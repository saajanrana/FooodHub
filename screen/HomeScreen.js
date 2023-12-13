
import { View, StyleSheet, Text, Image, ImageBackground,SafeAreaView } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';




const HomeScreen = ({navigation}) => {
  return (
    <GestureHandlerRootView>
    <SafeAreaView style={{backgroundColor:'#FCFCFD',width:'100%',height:'100%'}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',padding:15}}>
        <View>
          <TouchableOpacity >
        <Image
        source={require('../assets/drawericon.png')} 
        style={{ width: 90, height: 90 }} 
      />
      </TouchableOpacity>
        </View>
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
      <View style={{marginLeft:30,marginRight:40}} >
        <Text style={{color:'#323643',fontWeight:'700',fontSize:30}}>What would you like to order</Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <View style={{borderWidth:1,borderColor:'#EFEFEF',width:300,height:71,marginLeft:30,justifyContent:'center',borderRadius:10,marginTop:15}}>
        <TextInput placeholder='Find for food or restaurant...' style={{color:'#9AA0B4',fontSize:14,fontWeight:'400',marginLeft:10}} />
      </View>
      <View style={{height:'100%',width:'100%'}}>
            <TouchableOpacity>
            <Image
        source={require('../assets/fliter.png')} 
        style={{ width: 110, height: 110 }} 
      />
            </TouchableOpacity>
      </View>
      </View>
      <View>
    
        
      </View>
    </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
