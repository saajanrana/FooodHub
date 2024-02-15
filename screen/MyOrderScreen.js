import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Switch,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {url} from '../components/url';
import {useSelector} from 'react-redux';
import Shimmer from 'react-native-shimmer-kit';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const MyOrderScreen = ({navigation}) => {
  const profiledata = useSelector(state => state.auth.profiledata);
  const [clicktab, setClicktab] = useState(0);
  const usertoken = useSelector(state => state.auth.usertoken);

  const [userfood, setUserfood] = useState();

  const [simmertime, setSimmertime] = useState(0);

  const simmerarr = [0, 1, 2, 3, 4, 5, 6];

  
  useEffect(() => {
    setTimeout(() => {
      setSimmertime(1);
    }, 3000);
  }, []);

  useEffect(() => {
    const getFood = async () => {
      try {
        const response = await fetch(`${url}api/userfood`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: usertoken,
          },
        });

        if (response.ok) {
          const userfooddata = await response.json();

          setUserfood(userfooddata?.data);
        } else {
          console.error(
            'Error fetching data:',
            response.status,
            response.statusText,
          );
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Call the function to fetch data
    getFood();
  }, []);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        height: '100%',
      }}>
      {simmertime == 0 ? (
        simmerarr.map((item, index) => (
          <View
            key={index}
            style={{
              backgroundColor: '#FFF',
              shadowOpacity: 10,
              elevation: 1,
              shadowColor: 'light-brown',
              borderRadius: responsiveWidth(5),
              width: responsiveWidth(80),
              gap: responsiveWidth(2),
              height: responsiveHeight(38),
              padding: responsiveHeight(1.5),
              flexWrap: 'wrap',
              marginTop: responsiveHeight(2),
              marginLeft: responsiveWidth(7),
            }}>
            <Shimmer
              width={responsiveWidth(75)}
              height={responsiveHeight(20)}
              borderRadius={responsiveWidth(2)}
              duration={2000}
              colors={['#e1e2e3', '#f0f1f2', '#f0f1f2', '#e1e2e3']}
            />
            <Shimmer
              width={responsiveWidth(65)}
              height={responsiveHeight(2)}
              borderRadius={responsiveWidth(2)}
              duration={2000}
              colors={['#e1e2e3', '#f0f1f2', '#f0f1f2', '#e1e2e3']}
            />
            <Shimmer
              width={responsiveWidth(55)}
              height={responsiveHeight(2)}
              borderRadius={responsiveWidth(2)}
              duration={2000}
              colors={['#e1e2e3', '#f0f1f2', '#f0f1f2', '#e1e2e3']}
            />
            <Shimmer
              width={responsiveWidth(40)}
              height={responsiveHeight(2)}
              borderRadius={responsiveWidth(2)}
              duration={2000}
              colors={['#e1e2e3', '#f0f1f2', '#f0f1f2', '#e1e2e3']}
            />
            <Shimmer
              width={responsiveWidth(30)}
              height={responsiveHeight(2)}
              borderRadius={responsiveWidth(2)}
              duration={2000}
              colors={['#e1e2e3', '#f0f1f2', '#f0f1f2', '#e1e2e3']}
            />
          </View>
        ))
      ) : (
        <>
          <View style={styles.headercontainer}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.headertouchbtn}>
              <Icon
                name="arrow-back-ios"
                style={styles.backbtn}
                color="black"
              />
            </TouchableOpacity>
            {clicktab === 0 ? (
              <Text style={styles.headertxt}>My orders</Text>
            ) : (
              <Text style={styles.headertxt}>History</Text>
            )}

          <TouchableOpacity
          onPress={() => navigation.navigate('MyProfileScreen')}>
          <Image

            style={styles.profileImage}
            source={profiledata?.imgurl
              ? { uri: `${url}${profiledata?.imgurl}` }
              : require('../assets/newprofile.jpg')}
          />
        </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: responsiveHeight(2),
              alignItems: 'center',
            }}>
            <View
              style={{
                borderWidth: responsiveWidth(0.2),
                borderColor: '#F2EAEA',
                width: responsiveWidth(90),
                height: responsiveHeight(8),
                borderRadius: responsiveWidth(20),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: responsiveWidth(1),
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: clicktab === 0 ? '#FE724C' : '#FFF',
                  width: responsiveWidth(40),
                  height: responsiveHeight(7),
                  borderRadius: responsiveWidth(20),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => setClicktab(0)}>
                <Text
                  style={{
                    color: clicktab === 0 ? '#FFF' : '#FE724C',
                    fontSize: responsiveFontSize(2.4),
                    fontFamily: 'Gilroy-SemiBold',
                  }}>
                  Updates
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: clicktab === 0 ? '#FFF' : '#FE724C',
                  width: responsiveWidth(40),
                  height: responsiveHeight(7),
                  borderRadius: responsiveWidth(20),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => setClicktab(1)}>
                <Text
                  style={{
                    color: clicktab === 0 ? '#FE724C' : '#FFF',
                    fontSize: responsiveFontSize(2.4),
                    fontFamily: 'Gilroy-SemiBold',
                  }}>
                  History
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {clicktab === 0 ? (
            <View style={{alignItems: 'center', flex: 1}}>
              {!userfood ? (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={{padding: 20}}>
                    <Text
                      style={{
                        color: '#000',
                        fontSize: responsiveFontSize(2.5),
                        fontFamily: 'Gilroy-Bold',
                      }}>
                      You did not get any food food yet{' '}
                    </Text>
                    <Text
                      style={{
                        color: '#000',
                        fontSize: responsiveFontSize(2.5),
                        fontFamily: 'Gilroy-Bold',
                      }}>
                      Go and take ur food......
                    </Text>
                  </View>
                </View>
              ) : (
                userfood.map(item => (
                  <View
                    key={item?.id}
                    style={{
                      flex: 1,
                      marginTop: responsiveHeight(2),
                      backgroundColor: '#FFFFFF',
                      shadowOpacity: 10,
                      elevation: 6,
                      shadowColor: 'light-brown',
                      borderRadius: responsiveWidth(3),
                      marginBottom: responsiveHeight(5),
                    }}>
                    <View style={{padding: responsiveWidth(5)}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View
                          style={{
                            width: responsiveWidth(30),
                            height: responsiveHeight(10),
                            shadowColor: '#000',
                            shadowOffset: {
                              width: 0,
                              height: 6,
                            },
                            shadowOpacity: 0.39,
                            shadowRadius: 8.3,

                            elevation: 13,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: responsiveWidth(2),
                          }}>
                          <Image
                            source={item?.imgsrc}
                            style={{
                              width: responsiveWidth(29),
                              height: responsiveHeight(9),
                              borderRadius: responsiveWidth(2),
                            }}
                          />
                        </View>
                        <View>
                          <Text
                            style={{
                              color: '#9796A1',
                              fontSize: responsiveFontSize(2),
                              fontFamily: 'Gilroy-Medium',
                            }}>
                            3 Items
                          </Text>
                          <Text
                            style={{
                              color: '#000',
                              fontSize: responsiveFontSize(2),
                              fontFamily: 'Gilroy-SemiBold',
                            }}>
                            Starbuck
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              color: '#FE724C',
                              fontSize: responsiveFontSize(2),
                              fontFamily: 'Gilroy-SemiBold',
                            }}>
                            ${item?.price}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginTop: responsiveHeight(1),
                        }}>
                        <Text
                          style={{
                            color: '#9796A1',
                            fontSize: responsiveFontSize(2),
                            fontFamily: 'Gilroy-SemiBold',
                          }}>
                          Estimated Arrival
                        </Text>
                        <Text
                          style={{
                            color: '#9796A1',
                            fontSize: responsiveFontSize(2),
                            fontFamily: 'Gilroy-SemiBold',
                          }}>
                          Now
                        </Text>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View style={{flexDirection: 'row'}}>
                          <Text
                            style={{
                              color: '#000',
                              fontSize: responsiveFontSize(4),
                              fontFamily: 'Gilroy-Bold',
                            }}>
                            25
                          </Text>
                          <View
                            style={{
                              alignItems: 'flex-end',
                              justifyContent: 'flex-end',
                            }}>
                            <Text
                              style={{
                                color: '#000',
                                fontSize: responsiveFontSize(2),
                                fontFamily: 'Gilroy-SemiBold',
                              }}>
                              min
                            </Text>
                          </View>
                        </View>
                        <View>
                          <Text
                            style={{
                              color: '#000',
                              fontSize: responsiveFontSize(2),
                              fontFamily: 'Gilroy-SemiBold',
                            }}>
                            Food on the way
                          </Text>
                        </View>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginTop: responsiveHeight(1),
                          gap: responsiveWidth(2),
                        }}>
                        <TouchableOpacity
                          style={{
                            borderWidth: responsiveWidth(0.3),
                            width: responsiveWidth(40),
                            height: responsiveHeight(7),
                            borderRadius: responsiveWidth(20),
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderColor: '#F1F2F3',
                            
                            
                          }}>
                          <Text
                            style={{
                              color: '#000',
                              fontSize: responsiveFontSize(2.2),
                              fontFamily: 'Gilroy-Bold',
                            }}>
                            Cancel
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#FE724C',
                            shadowColor: '#FE724C',
                            shadowOffset: {
                              width: 0,
                              height: 12,
                            },
                            shadowOpacity: 0.58,
                            shadowRadius: 16.0,

                            elevation: 24,
                            width: responsiveWidth(40),
                            height: responsiveHeight(7),
                            borderRadius: responsiveWidth(30),
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              color: '#FFF',
                              fontSize: responsiveFontSize(2.2),
                              fontFamily: 'Gilroy-Bold',
                            }}>
                            Track Order
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                ))
              )}
            </View>
          ) : (
            <>
              <View
                style={{
                  marginTop: responsiveHeight(2),
                  marginLeft: responsiveWidth(8),
                }}>
                <Text
                  style={{
                    color: '#111719',
                    fontFamily: 'Gilroy-Bold',
                    fontSize: responsiveFontSize(3),
                  }}>
                  Lasted Orders
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginBottom: responsiveHeight(5),
                }}>
                <View
                  style={{
                    marginTop: responsiveHeight(2),
                    backgroundColor: '#FFFFFF',
                    shadowOpacity: 10,
                    elevation: 6,
                    shadowColor: 'light-brown',
                    borderRadius: responsiveWidth(2),
                  }}>
                  <View
                    style={{
                      padding: responsiveWidth(5),
                      gap: responsiveWidth(2),
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{
                          width: responsiveWidth(20),
                          height: responsiveHeight(10),
                          shadowOpacity: 10,
                          elevation: 6,
                          backgroundColor: '#FFF',
                          shadowColor: 'light-brown',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: responsiveWidth(2),
                        }}>
                        <Image
                          source={require('../assets/subwayicon.png')}
                          style={{
                            width: responsiveWidth(8),
                            height: responsiveHeight(5),
                          }}
                          resizeMode="contain"
                        />
                      </View>
                      <View style={{justifyContent:"space-between",
                          height: responsiveHeight(10),}}>
                        <Text
                          style={{
                            color: '#9796A1',
                            fontSize: responsiveFontSize(2),
                            fontFamily: 'Gilroy-Medium',
                          }}>
                          20 jun, 10:30
                        </Text>
                        <Text
                          style={{
                            color: '#000',
                            fontSize: responsiveFontSize(2.2),
                            fontFamily: 'Gilroy-Bold',
                          }}>
                          Subway
                        </Text>
                        <View style={{flexDirection:'row',alignItems:'center',gap:responsiveWidth(1)}}>
                          <View style={{width:responsiveWidth(2),height:responsiveHeight(1),borderRadius:responsiveWidth(10),backgroundColor:'lightgreen'}}></View>
                        <Text style={{color:'lightgreen',fontFamily:'Gilroy-Regular',fontSize:responsiveFontSize(2)}}>Order Delivered</Text>
                        </View>
                      </View>
                      <View>
                        <Text
                          style={{
                            color: '#FE724C',
                            fontSize: responsiveFontSize(2.2),
                            fontFamily: 'Gilroy-SemiBold',
                          }}>
                          $17.10
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: responsiveWidth(5),
                        marginTop:responsiveHeight(2)
                      }}>
                      <TouchableOpacity
                        style={{
                          backgroundColor: '#FFF',
                          borderWidth: 1,
                          width: responsiveWidth(35),
                          height: responsiveHeight(6),
                          borderRadius: responsiveWidth(20),
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderColor: '#F1F2F3',
                          shadowColor: '#000',
                          shadowOffset: {
                            width: 0,
                            height: 6,
                          },
                          shadowOpacity: 0.37,
                          shadowRadius: 7.49,

                          elevation: 12,
                        }}>
                        <Text
                          style={{
                            color: '#000',
                            fontSize: responsiveFontSize(2.2),
                            fontFamily: 'Gilroy-Bold',
                          }}>
                          Rate
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          backgroundColor: '#FE724C',
                          width: responsiveWidth(35),
                          height: responsiveHeight(6),
                          borderRadius: responsiveWidth(20),
                          justifyContent: 'center',
                          alignItems: 'center',
                          shadowColor: '#FE724C',
                          shadowOffset: {
                            width: 0,
                            height: 12,
                          },
                          shadowOpacity: 0.58,
                          shadowRadius: 16.0,

                          elevation: 24,
                        }}>
                        <Text
                          style={{
                            color: '#FFF',
                            fontSize: responsiveFontSize(2.2),
                            fontFamily: 'Gilroy-Bold',
                          }}>
                          Re-Order
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </>
          )}
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
   
    paddingLeft:responsiveWidth(5),
    paddingRight:responsiveWidth(5),
    justifyContent:'space-between',
    marginTop: responsiveHeight(2),
  },
  headertouchbtn: {
    backgroundColor: '#FFFFFF',
    elevation: 5,
    shadowColor: 'light-brown',
    width: responsiveWidth(Dimensions.get('window').width >= 600 ? 10 : 13),
    height: responsiveHeight(6),
    borderRadius: responsiveWidth(2.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  backbtn: {
    marginLeft: responsiveWidth(2),
    fontSize: responsiveFontSize(3),
  },
  headertxt: {
    fontSize: responsiveFontSize(3),
    fontFamily: 'Gilroy-Bold',
    color: 'black',
    textAlign: 'center',
   
  },
  profileImage: {
    height: responsiveHeight(7),
    width: responsiveWidth(12),
    borderRadius: responsiveWidth(2),
  },
});

export default MyOrderScreen;
