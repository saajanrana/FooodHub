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





  const viewallitem = [

    {
      id: 1,
      foodname: 'Ground Beef Tacos',
      price: '9.5',
      fooddetails: 'Brown the beef better. Lean ground beef – I like to use 85% leanangus. Garlic – use fresh chopped. Spices – chili powder, cumin, onion powder.',
      rating: '4.5',
      imgsrc: require('../assets/somemoredis.jpg'),
      taxandfee: '5.30',
      delivery: '1.00',
      featured:true
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
      featured:true
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
      featured:true
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
      featured:true
    },
    {
      id: 5,
      foodname: 'Grilled Salmon',
      price: '15.99',
      fooddetails: 'Freshly grilled salmon with lemon and herbs.',
      rating: '4.9',
      imgsrc: require('../assets/dissss1.jpg'),
      taxandfee: '7.00',
      delivery: '1.75',
      featured:true
    },
    {
      id: 6,
      foodname: 'Vegetarian Sushi Roll',
      price: '11.50',
      fooddetails: 'Delicious vegetarian sushi roll with avocado and cucumber.',
      rating: '4.6',
      imgsrc: require('../assets/dissss2.jpg'),
      taxandfee: '5.50',
      delivery: '1.20',
    },
    {
      id: 7,
      foodname: 'Cheeseburger',
      price: '8.99',
      fooddetails: 'Classic cheeseburger with beef patty, cheese, lettuce, and tomato.',
      rating: '4.5',
      imgsrc: require('../assets/dissss2.jpg'),
      taxandfee: '4.50',
      delivery: '0.80',
    },
    {
      id: 8,
      foodname: 'Caesar Wrap',
      price: '7.50',
      fooddetails: 'Caesar salad wrapped in a tortilla for a convenient and tasty meal.',
      rating: '4.3',
      imgsrc: require('../assets/dissss3.jpg'),
      taxandfee: '3.50',
      delivery: '0.60',
    },
    {
      id: 9,
      foodname: 'BBQ Chicken Wings',
      price: '11.99',
      fooddetails: 'Spicy and flavorful BBQ chicken wings, perfect for sharing.',
      rating: '4.7',
      imgsrc: require('../assets/dissss4.jpg'),
      taxandfee: '5.25',
      delivery: '1.10',
    },
    {
      id: 10,
      foodname: 'Mango Tango Smoothie',
      price: '5.99',
      fooddetails: 'Refreshing smoothie with mango, banana, and a hint of lime.',
      rating: '4.4',
      imgsrc: require('../assets/dissss5.jpg'),
      taxandfee: '2.50',
      delivery: '0.50',
    },

    {
      id: 11,
      foodname: 'Vegetable Stir-Fry',
      price: '9.99',
      fooddetails: 'Assorted vegetables stir-fried to perfection with a savory sauce.',
      rating: '4.5',
      imgsrc: require('../assets/dissss6.jpg'),
      taxandfee: '4.20',
      delivery: '0.90',
    },
    {
      id: 12,
      foodname: 'Caprese Salad',
      price: '8.50',
      fooddetails: 'Classic Caprese salad with fresh tomatoes, mozzarella, and basil.',
      rating: '4.8',
      imgsrc: require('../assets/dissss7.jpg'),
      taxandfee: '3.75',
      delivery: '0.70',
    },
    {
      id: 13,
      foodname: 'Shrimp Scampi Pasta',
      price: '14.75',
      fooddetails: 'Delicious pasta dish with garlic, white wine, and succulent shrimp.',
      rating: '4.7',
      imgsrc: require('../assets/dissss8.jpg'),
      taxandfee: '6.00',
      delivery: '1.20',
    },
    {
      id: 14,
      foodname: 'Avocado Toast',
      price: '6.99',
      fooddetails: 'Healthy and tasty avocado toast with a sprinkle of salt and pepper.',
      rating: '4.6',
      imgsrc: require('../assets/dissss9.jpg'),
      taxandfee: '3.00',
      delivery: '0.50',
    },
    {
      id: 15,
      foodname: 'Beef and Broccoli',
      price: '11.25',
      fooddetails: 'Savory beef and broccoli stir-fry served with steamed rice.',
      rating: '4.9',
      imgsrc: require('../assets/dissss10.jpg'),
      taxandfee: '5.50',
      delivery: '1.10',
    },
    {
      id: 16,
      foodname: 'Mediterranean Hummus Wrap',
      price: '10.50',
      fooddetails: 'Wrap filled with hummus, roasted vegetables, and feta cheese.',
      rating: '4.5',
      imgsrc: require('../assets/dissss1.jpg'),
      taxandfee: '4.80',
      delivery: '0.95',
    },
    {
      id: 17,
      foodname: 'Chocolate Lava Cake',
      price: '7.99',
      fooddetails: 'Indulgent chocolate lava cake with a gooey center.',
      rating: '4.8',
      imgsrc: require('../assets/dissss2.jpg'),
      taxandfee: '3.50',
      delivery: '0.60',
    },
    {
      id: 18,
      foodname: 'Greek Gyro',
      price: '12.50',
      fooddetails: 'Authentic Greek gyro with seasoned meat, tzatziki, and veggies.',
      rating: '4.6',
      imgsrc: require('../assets/dissss3.jpg'),
      taxandfee: '5.75',
      delivery: '1.25',
    },
    {
      id: 19,
      foodname: 'Berry Blast Smoothie Bowl',
      price: '8.25',
      fooddetails: 'Acai bowl with a blend of berries, granola, and coconut.',
      rating: '4.7',
      imgsrc: require('../assets/dissss4.jpg'),
      taxandfee: '3.80',
      delivery: '0.75',
    },
    {
      id: 20,
      foodname: 'Crispy Tofu Tacos',
      price: '10.99',
      fooddetails: 'Tacos filled with crispy tofu, salsa, and fresh toppings.',
      rating: '4.4',
      imgsrc: require('../assets/dissss5.jpg'),
      taxandfee: '4.50',
      delivery: '1.00',
    },

  ]







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

     { viewallitem.map((item)=>{
      return (
        <View key={item.id} style={{flex: 1, alignItems: 'center', marginTop: 30, gap: 30,marginBottom:10}} >
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
              source={item.imgsrc}
              style={{borderRadius: 30,height:160,width:'100%'}}
            />
            <Image
              source={require('../assets/likeicons.png')}
              style={{position: 'absolute', top: '2%', right: '2%'}}
            />

            <View style={{position: 'absolute', top: '7%', left: '7%',flexDirection:"row",backgroundColor:'white',borderRadius:20,padding:'2.5%',alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:"#FE724C",fontWeight:'600',fontSize:18}}>$</Text>
               <Text style={{color:'#000',fontWeight:'600',fontSize:18}}>{item.price}</Text>
            </View>
            <View style={{position: 'absolute', bottom: '-12%', left: '7%',flexDirection:"row",backgroundColor:'white',borderRadius:20,padding:'2.5%',alignItems:'center',justifyContent:'center'}}>
               <Text style={{color:'#000',fontWeight:'600',fontSize:18}}>{item.rating}</Text>
            </View>
          </View>
          <TouchableOpacity style={{padding: '5%'}} onPress={()=> navigation.navigate('FoodDetail',{foodId:item?.id})}>
            <Text style={{color: '#000', fontSize: 19, fontWeight: '600'}}>
              {item.foodname}
            </Text>
            <Text style={{color: '#5B5B5E', fontSize: 15, fontWeight: '400'}}>
              Chicken,Cheese and pineapple
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      )
     })  
}

    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ViewScreen;
