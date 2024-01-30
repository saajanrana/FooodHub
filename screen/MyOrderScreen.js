import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Switch,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {url} from '../components/url';
import {useSelector} from 'react-redux';
import Shimmer from 'react-native-shimmer-kit';

const MyOrderScreen = () => {


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
        paddingTop: '5%',
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
              borderRadius: 30,
              width: 350,
              gap: 10,
              height: 260,
              padding: 10,
              flexWrap: 'wrap',
              marginTop: 20,
              marginLeft: 30,
            }}
            key={item.index}>
            <Shimmer
              width={330}
              height={140}
              borderRadius={20}
              duration={2000}
              colors={['#e1e2e3', '#f0f1f2', '#f0f1f2', '#e1e2e3']}
            />
            <Shimmer
              width={250}
              height={20}
              borderRadius={15}
              duration={2000}
              colors={['#e1e2e3', '#f0f1f2', '#f0f1f2', '#e1e2e3']}
            />
            <Shimmer
              width={230}
              height={20}
              borderRadius={15}
              duration={2000}
              colors={['#e1e2e3', '#f0f1f2', '#f0f1f2', '#e1e2e3']}
            />
            <Shimmer
              width={200}
              height={20}
              borderRadius={15}
              duration={2000}
              colors={['#e1e2e3', '#f0f1f2', '#f0f1f2', '#e1e2e3']}
            />
          </View>
        ))
      ) : (
        <>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
             
            }}>
            <View
              style={{
                borderWidth: 2,
                borderColor: '#F2EAEA',
                width: '90%',
                height: 70,
                borderRadius: 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1%',
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: clicktab === 0 ? '#FE724C' : '#FFF',
                  width: '50%',
                  height: 60,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => setClicktab(0)}>
                <Text style={{color: clicktab === 0 ? '#FFF' : '#FE724C'}}>
                  Updates
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: clicktab === 0 ? '#FFF' : '#FE724C',
                  width: '50%',
                  height: 60,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => setClicktab(1)}>
                <Text style={{color: clicktab === 0 ? '#FE724C' : '#FFF'}}>
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
                      marginTop: '5%',
                      backgroundColor: '#FFFFFF',
                      shadowOpacity: 10,
                      elevation: 6,
                      shadowColor: 'light-brown',
                      borderRadius: 20,
                    }}>
                    <View style={{padding: '7%', gap: 10}}>
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
                          <Image
                            source={item?.imgsrc}
                            style={{width: 100, height: 80, borderRadius: 20}}
                          />
                        </View>
                        <View>
                          <Text
                            style={{
                              color: '#9796A1',
                              fontSize: 13,
                              fontWeight: '500',
                            }}>
                            3 Items
                          </Text>
                          <Text
                            style={{
                              color: '#000',
                              fontSize: 16,
                              fontWeight: '600',
                            }}>
                            Starbuck
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              color: '#FE724C',
                              fontSize: 16,
                              fontWeight: '400',
                            }}>
                            ${item?.price}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginTop: 10,
                        }}>
                        <Text
                          style={{
                            color: '#9796A1',
                            fontSize: 13,
                            fontWeight: '500',
                          }}>
                          Estimated Arrival
                        </Text>
                        <Text
                          style={{
                            color: '#9796A1',
                            fontSize: 13,
                            fontWeight: '500',
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
                              fontSize: 40,
                              fontWeight: '600',
                            }}>
                            25
                          </Text>
                          <View
                            style={{
                              alignItems: 'flex-end',
                              justifyContent: 'flex-end',
                            }}>
                            <Text style={{color: '#000'}}>min</Text>
                          </View>
                        </View>
                        <View>
                          <Text
                            style={{
                              color: '#000',
                              fontWeight: '400',
                              fontSize: 14,
                            }}>
                            Food on the way
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
                            width: '45%',
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
                            Cancel
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#FE724C',
                            width: '45%',
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

const styles = StyleSheet.create({});

export default MyOrderScreen;
