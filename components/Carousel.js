import React, {useEffect, useState,useRef} from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Carousel = () => {

    const flatlistRef = useRef();

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [activeindex, setActiveindex] = useState(0);







  const carouseldata = [
    {
      id: 1,
      image: require('../assets/offerone.jpg'),
    },
    {
      id: 2,
      image: require('../assets/offertwo.jpg'),
    },
    {
      id: 3,
      image: require('../assets/offerone.jpg'),
    },
  ];



  //



  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeindex + 1) % carouseldata.length;
      flatlistRef.current.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
      setActiveindex(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  });

  const getItemLayout = (_, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index,
  });
  //rendring item
  const renderItem = ({item, index}) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{height: responsiveHeight(30), width: responsiveWidth(100)}}
        />
      </View>
    );
  };

  const handleScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setActiveindex(index);
  };

  

  return (
    <View>
      <FlatList
        data={carouseldata}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
        style={{flex:1,backgroundColor:'white',position:'relative'}}

      />
      <View
        style={{
          position:'absolute',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: responsiveWidth(2),
          marginTop: responsiveHeight(2),
          bottom:responsiveHeight(1),
          left:responsiveWidth(45)

        }}>
        {carouseldata.map((dot, index) =>
          activeindex === index ? (
            <View
              key={index}
              style={{
                width: responsiveWidth(5),
                height: responsiveHeight(0.5),
                borderRadius: responsiveWidth(1),
                backgroundColor: '#FE724C',
              }}></View>
          ) : (
            <View
              key={index}
              style={{
                width: responsiveWidth(1),
                height: responsiveHeight(0.5),
                borderRadius: responsiveWidth(.5),
                backgroundColor: 'gray',
              }}></View>
          ),
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Carousel;
