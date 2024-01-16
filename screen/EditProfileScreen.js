import React,{useState,useEffect} from 'react';
import {View, StyleSheet,Text,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import { useSelector } from 'react-redux';
import { url } from '../components/url';


const EditProfileScreen = ({navigation}) => {
   const [user,setUser] = useState({});
  const usertoken = useSelector(state => state.auth.usertoken);
  

  useEffect(() => {
    const fetchdata = async () =>{
      console.log('ueeee>>>.',usertoken);
      try {
        const response = await fetch(`${url}api/profile`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
             Authorization: usertoken,
          },
        });
  
        console.log('token inside>>>>>>>>>>', usertoken);
        console.log('res>>>>>>>>>>>>>>', response);
  
        if (response.ok) {
          const userData = await response.json();
          console.log('userdatrainside>>>>>>>', userData);
          setUser(userData);
        } else {
          console.error('Error fetching user profile:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error.message);
      }
    }
  
    fetchdata(); 
     
  },[navigation]);

   const changedata = async()=>{


    console.log('userdataafterupdate>>>>>>>>>',user);

    try {
      const response = await fetch(`${url}api/edit`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
           Authorization: usertoken,
        },
        body: JSON.stringify({
          fullName: user?.fullName,
          email:user?.email,
          password:user?.password,
          phone:user?.phone,
          city:user?.city,
          state:user?.state,
        }),
      });

   

      if (response.ok) {
        console.log('Contact details (including image) updated successfully');
      } else {
        console.error('Error fetching user profile:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error.message);
    }
        


   }




  console.log('user>>>>',user);

    return (
        <ScrollView >
        <View style={{justifyContent:"center"}} >
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Full name</Text>
            <TextInput style={styles.input} value={user?.fullName} onChangeText={text =>
          setUser({...user, fullName: text})
        } />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>E-mail</Text>
            <TextInput style={styles.input} value={user?.email} onChangeText={text =>
          setUser({...user,email:text})
        }  />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <TextInput style={styles.input} value={user?.phone} onChangeText={text =>
          setUser({...user, phone:text})
        }  />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>City</Text>
            <TextInput style={styles.input} value={user?.city} onChangeText={text =>
          setUser({...user, city:text })
        }   />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>State</Text>
            <TextInput style={styles.input} value={user?.state}  onChangeText={text =>
          setUser({...user, state:text})
        }  />
          </View>
        </View>
        <View style={{marginTop:'5%',alignItems:'center',marginBottom:'5%'}}>
            <TouchableOpacity style={{width:'70%',height:60,backgroundColor:"#FE724C",borderRadius:30,justifyContent:'center',alignItems:'center'}} onPress={changedata}>
                  <Text style={{color:'#FFF',fontSize:15,fontWeight:'600'}}>Save</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    )
  };
  
  const styles = StyleSheet.create({
    inputContainer: {
      marginTop: '4%',
      marginLeft: '6%',
    },
    inputLabel: {
      marginLeft: '3%',
    },
    input: {
      borderWidth: 1,
      borderColor: '#B3B3B3',
      width: '90%',
      height: 70,
      marginTop: 10,
      fontSize: 20,
      borderRadius: 20,
      paddingLeft: 20,
      
    },
  });

export default EditProfileScreen;
