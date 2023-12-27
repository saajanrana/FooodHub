import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const ViewScreen = () => {
    return (
        <View>
            <View style={{flexDirection:"row"}}>
                <View style={{}}>
                    <Text style={{fontSize:60}}>Fast Food</Text>
                </View>
                <View style={{width:200,height:200,}}>
                    <Image source={require('../assets/viewscreen2.png')} style={{width:'100%',height:'100%'}}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ViewScreen;
