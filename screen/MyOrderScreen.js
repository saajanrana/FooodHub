import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Switch,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
import {url} from '../components/url';
import {useSelector} from 'react-redux';
import Shimmer from 'react-native-shimmer-kit';
import { responsiveHeight, responsiveWidth,responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';


const MyOrderScreen = ({navigation}) => {


  console.log('myorderscreen render>>>>>>>>>>>>>>>>>>>>>>>>');
  const [clicktab, setClicktab] = useState(0);
  const usertoken = useSelector(state => state.auth.usertoken);

  const [userfood, setUserfood] = useState();

  const [simmertime, setSimmertime] = useState(0);

  const simmerarr = [0, 1, 2, 3, 4, 5, 6];

  useEffect(() => {

    console.log('render shimmmer>>>>>>>>>>');
    setTimeout(() => {
      setSimmertime(1);
    }, 3000);
  },[]);

  useEffect(() => {

    console.log('useeffect render in myorderscreen>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
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
          // console.log('userdata fooood >>>>>>>', userfooddata);
          console.log('data is send from my order screen>>>>>>>>>>>>>>>>>>>');
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

  console.log('myorderscreen render>>>>>>>>>>>>>>>>>>>>>>>>');



  return (
    <ScrollView
      style={{
        flex:1,
        backgroundColor: '#FFF',
        height:'100%'
      }}>
      {simmertime == 0 ? (
        simmerarr.map(item => (
          <View
            style={{
              backgroundColor: '#FFF',
              shadowOpacity: 10,
              elevation: 1,
              shadowColor: 'light-brown',
              borderRadius:responsiveWidth(5),
              width:responsiveWidth(80),
              gap: responsiveWidth(2),
              height:responsiveHeight(38),
              padding:responsiveHeight(1.5),
              flexWrap: 'wrap',
              marginTop:responsiveHeight(2),
              marginLeft: responsiveWidth(7),
            }}
            key={item.index}>
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
          <Icon name="arrow-back-ios" style={styles.backbtn} color="black" />
        </TouchableOpacity>
       { clicktab === 0? <Text style={styles.headertxt}>My orders</Text>:<Text style={styles.headertxt}>History</Text>}
      </View>
          <View
            style={{
              marginTop:responsiveHeight(2),
              alignItems: 'center',
             
             
            }}>
              
            <View
              style={{
                borderWidth:responsiveWidth(0.2),
                borderColor: '#F2EAEA',
                width:responsiveWidth(90),
                height:responsiveHeight(8),
                borderRadius:responsiveWidth(20),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding:responsiveWidth(1),
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: clicktab === 0 ? '#FE724C' : '#FFF',
                  width:responsiveWidth(40),
                  height:responsiveHeight(7),
                  borderRadius:responsiveWidth(20),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => setClicktab(0)}>
                <Text style={{color: clicktab === 0 ? '#FFF' : '#FE724C',fontSize:responsiveFontSize(2.4),fontFamily:'Gilroy-SemiBold'}}>
                  Updates
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: clicktab === 0 ? '#FFF' : '#FE724C',
                  width:responsiveWidth(40),
                  height:responsiveHeight(7),
                  borderRadius:responsiveWidth(20),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => setClicktab(1)}>
                <Text style={{color: clicktab === 0 ? '#FE724C' : '#FFF',fontSize:responsiveFontSize(2.4),fontFamily:'Gilroy-SemiBold'}}>
                  History
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {clicktab === 0 ? (
            <View style={{alignItems: 'center',flex:1}}>
              {!userfood ? (
                <View style={{
                justifyContent:"center",alignItems:'center'
                
                }}>
                  <View style={{padding:20}}>
                  <Text style={{color:"#000",fontSize:25,fontWeight:'600'}}>You did not get any food food yet </Text>
                  <Text style={{color:"#000",fontSize:25,fontWeight:'600'}}>Go and take ur food......</Text>
                </View>
                </View>
              ) : (
                userfood.map(item => (
                  <View
                    key={item?.id}
                    style={{
                      flex:1,
                      marginTop:responsiveHeight(2),
                      backgroundColor: '#FFFFFF',
                      shadowOpacity: 10,
                      elevation: 6,
                      shadowColor: 'light-brown',
                      borderRadius:responsiveWidth(3),
                      marginBottom:responsiveHeight(5),
                      
                    }}>
                    <View style={{padding:responsiveWidth(5)}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View
                          style={{
                            width:responsiveWidth(30),
                            height: responsiveHeight(10),
                            shadowOpacity: 10,
                            elevation: 6,
                            backgroundColor: '#FFF',
                            shadowColor: 'light-brown',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius:responsiveWidth(2),
                          }}>
                          <Image
                            source={item?.imgsrc}
                            style={{width:responsiveWidth(30), height:responsiveHeight(10), borderRadius:responsiveWidth(2)}}
                          />
                        </View>
                        <View>
                          <Text
                            style={{
                              color: '#9796A1',
                              fontSize:responsiveFontSize(2),
                              fontFamily:'Gilroy-Medium',
                            }}>
                            3 Items
                          </Text>
                          <Text
                            style={{
                              color: '#000',
                              fontSize:responsiveFontSize(2),
                              fontFamily:'Gilroy-SemiBold',
                            }}>
                            Starbuck
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              color: '#FE724C',
                              fontSize:responsiveFontSize(2),
                              fontFamily:'Gilroy-SemiBold',
                            }}>
                            ${item?.price}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginTop:responsiveHeight(1),
                        }}>
                        <Text
                          style={{
                            color: '#9796A1',
                            fontSize:responsiveFontSize(2),
                            fontFamily:'Gilroy-SemiBold'
                          }}>
                          Estimated Arrival
                        </Text>
                        <Text
                          style={{
                            color: '#9796A1',
                            fontSize:responsiveFontSize(2),
                            fontFamily:'Gilroy-SemiBold',
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
                              fontSize:responsiveFontSize(4),
                            fontFamily:'Gilroy-Bold',
                            }}>
                            25
                          </Text>
                          <View
                            style={{
                              alignItems: 'flex-end',
                              justifyContent: 'flex-end',
                            }}>
                            <Text style={{color: '#000', fontSize:responsiveFontSize(2),fontFamily:'Gilroy-SemiBold',}}>min</Text>
                          </View>
                        </View>
                        <View>
                          <Text
                            style={{
                              color: '#000',
                              fontSize:responsiveFontSize(2),fontFamily:'Gilroy-SemiBold'
                            }}>
                            Food on the way
                          </Text>
                        </View>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginTop:responsiveHeight(1),
                          gap:responsiveWidth(2)
                        }}>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#FFF',
                            borderWidth: 1,
                            width:responsiveWidth(40) ,
                            height:responsiveHeight(7),
                            borderRadius:responsiveWidth(20),
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderColor: '#F1F2F3',
                          }}>
                          <Text
                            style={{
                              color: '#000',
                              fontSize:responsiveFontSize(2.2),
                              fontFamily:'Gilroy-Bold',
                            }}>
                            Cancel
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#FE724C',
                            width:responsiveWidth(40),
                            height:responsiveHeight(7),
                            borderRadius:responsiveWidth(20),
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              color: '#FFF',
                              fontSize:responsiveFontSize(2.2),
                              fontFamily:'Gilroy-Bold',
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
              <View style={{marginTop: '7%', marginLeft: '8%'}}>
                <Text
                  style={{color: '#111719', fontWeight: '600', fontSize: 18}}>
                  Lasted Orders
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    marginTop: '5%',
                    backgroundColor: '#FFFFFF',
                    shadowOpacity: 10,
                    elevation: 6,
                    shadowColor: 'light-brown',
                    borderRadius: 20,
                  }}>
                  <View style={{padding: '5%', gap: 10}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{
                          width: '30%',
                          height: 80,
                          shadowOpacity: 10,
                          elevation: 6,
                          backgroundColor: '#FFF',
                          shadowColor: 'light-brown',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 20,
                        }}>
                        <Image source={require('../assets/subwayicon.png')} />
                      </View>
                      <View>
                        <Text
                          style={{
                            color: '#9796A1',
                            fontSize: 13,
                            fontWeight: '500',
                          }}>
                          20 jun, 10:30
                        </Text>
                        <Text
                          style={{
                            color: '#000',
                            fontSize: 16,
                            fontWeight: '600',
                          }}>
                          Subway
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            color: '#FE724C',
                            fontSize: 16,
                            fontWeight: '400',
                          }}>
                          $17.10
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity
                        style={{
                          backgroundColor: '#FFF',
                          borderWidth: 1,
                          width: '40%',
                          height: 55,
                          borderRadius: 30,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderColor: '#F1F2F3',
                        }}>
                        <Text
                          style={{
                            color: '#000',
                            fontSize: 16,
                            fontWeight: '600',
                          }}>
                          Rate
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          backgroundColor: '#FE724C',
                          width: '40%',
                          height: 55,
                          borderRadius: 30,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            color: '#FFF',
                            fontSize: 16,
                            fontWeight: '600',
                          }}>
                          Re-Order
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    marginTop: '5%',
                    backgroundColor: '#FFFFFF',
                    shadowOpacity: 10,
                    elevation: 6,
                    shadowColor: 'light-brown',
                    borderRadius: 20,
                  }}>
                  <View style={{padding: '5%', gap: 10}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{
                          width: '30%',
                          height: 80,
                          shadowOpacity: 10,
                          elevation: 6,
                          backgroundColor: '#FFF',
                          shadowColor: 'light-brown',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 20,
                        }}>
                        <Image source={require('../assets/subwayicon.png')} />
                      </View>
                      <View>
                        <Text
                          style={{
                            color: '#9796A1',
                            fontSize: 13,
                            fontWeight: '500',
                          }}>
                          20 jun, 10:30
                        </Text>
                        <Text
                          style={{
                            color: '#000',
                            fontSize: 16,
                            fontWeight: '600',
                          }}>
                          Subway
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            color: '#FE724C',
                            fontSize: 16,
                            fontWeight: '400',
                          }}>
                          $17.10
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity
                        style={{
                          backgroundColor: '#FFF',
                          borderWidth: 1,
                          width: '40%',
                          height: 55,
                          borderRadius: 30,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderColor: '#F1F2F3',
                        }}>
                        <Text
                          style={{
                            color: '#000',
                            fontSize: 16,
                            fontWeight: '600',
                          }}>
                          Rate
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          backgroundColor: '#FE724C',
                          width: '40%',
                          height: 55,
                          borderRadius: 30,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            color: '#FFF',
                            fontSize: 16,
                            fontWeight: '600',
                          }}>
                          Re-Order
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>

              <View style={{alignItems: 'center', marginBottom: '10%'}}>
                <View
                  style={{
                    marginTop: '5%',
                    backgroundColor: '#FFFFFF',
                    shadowOpacity: 10,
                    elevation: 6,
                    shadowColor: 'light-brown',
                    borderRadius: 20,
                  }}>
                  <View style={{padding: '5%', gap: 10}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{
                          width: '30%',
                          height: 80,
                          shadowOpacity: 10,
                          elevation: 6,
                          backgroundColor: '#FFF',
                          shadowColor: 'light-brown',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 20,
                        }}>
                        <Image source={require('../assets/subwayicon.png')} />
                      </View>
                      <View>
                        <Text
                          style={{
                            color: '#9796A1',
                            fontSize: 13,
                            fontWeight: '500',
                          }}>
                          20 jun, 10:30
                        </Text>
                        <Text
                          style={{
                            color: '#000',
                            fontSize: 16,
                            fontWeight: '600',
                          }}>
                          Subway
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            color: '#FE724C',
                            fontSize: 16,
                            fontWeight: '400',
                          }}>
                          $17.10
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity
                        style={{
                          backgroundColor: '#FFF',
                          borderWidth: 1,
                          width: '40%',
                          height: 55,
                          borderRadius: 30,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderColor: '#F1F2F3',
                        }}>
                        <Text
                          style={{
                            color: '#000',
                            fontSize: 16,
                            fontWeight: '600',
                          }}>
                          Rate
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          backgroundColor: '#FE724C',
                          width: '40%',
                          height: 55,
                          borderRadius: 30,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            color: '#FFF',
                            fontSize: 16,
                            fontWeight: '600',
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
    paddingLeft: responsiveWidth(5),
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
    marginLeft: responsiveWidth(15),
  },
});

export default MyOrderScreen;
