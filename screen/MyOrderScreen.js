import React,{useState} from 'react';
import {View, StyleSheet, Text,Switch,TouchableOpacity} from 'react-native';


const MyOrderScreen = () => {

    return (
        <View style={{backgroundColor:'#FFF',width:'100%',height:'100%'}} >
            <View style={{borderWidth:2,borderColor:'#F2EAEA',width: 400,height:60,borderRadius:30,marginTop:20}}>

                <TouchableOpacity style={{backgroundColor:'#FE724C',width: 150,height:40,borderRadius:20}}>
                      <Text>Upcoming</Text>
                </TouchableOpacity>
                
            </View>
         </View>
    );
}

const styles = StyleSheet.create({})

export default MyOrderScreen;
