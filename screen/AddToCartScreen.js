import React from 'react';
import {View, StyleSheet,Text,Image} from 'react-native';


const AddToCartScreen = () => {
    return (
        <View>
            <View>
                <View style={{height:100,width: 100,borderRadius:20}}>
                    <Image source={require('../assets/diss1.jpg')} style={{height:'100%',width:'100%',borderRadius:20}} />
                </View>
                <View>
                    <Text style={{color:"#000",fontSize:18,fontWeight:'800'}}>Red n hot pizza</Text>
                    <Text style={{color:'#8C8A9D',fontSize:14,fontWeight:300}}>Spicy chicken</Text>
                    <Text style={{color:'#FE724C',fontSize:16,fontWeight:'600'}}>$15.30</Text>
                </View>
                <View>
                      
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default AddToCartScreen;
