import React,{useState,useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  PermissionsAndroid
} from 'react-native';
import { useSelector } from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Modal from 'react-native-modal';

const MyProfile = (props) => {
  const profiledata = useSelector(state => state.auth.profiledata);
  const [filePath, setFilePath] = useState({});
  const [selectedImageUri, setSelectedImageUri] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);




  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs camera permission',
        },
      );
      // If CAMERA Permission is granted
      // console.log('ingranted>>>>', granted);
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const captureImage = async(type) => {
    try {
      const isCameraPermitted = await requestCameraPermission();
      if (isCameraPermitted) {
        console.log('okk2>>>>>>');
        let options = {
          mediaType: 'photo',
          maxWidth: 300,
          maxHeight: 550,
          quality: 1,
          saveToPhotos: true,
        };

        launchCamera(options, response => {
          console.log('okk3>>>>>>');
          console.log('Response = ', response);

          if (response.didCancel) {
            alert('User cancelled camera picker');
            return;
          } else if (response.errorCode === 'others') {
            alert(response.errorMessage);
            return;
          }
          console.log('base64 -> ', response.base64);
          console.log('uri -> ', response.uri);
          console.log('width -> ', response.width);
          console.log('height -> ', response.height);
          console.log('fileSize -> ', response.fileSize);
          console.log('type -> ', response.type);
          console.log('fileName -> ', response.fileName);
          // handleImageResponse(response);
          setFilePath(response);
          const selectedUri = response?.assets[0]?.uri;
          setSelectedImageUri(selectedUri);
        });
      }
    } catch (error) {
      console.error('Error capturing image:', error);
    }
  };

  const chooseFile = async(type) => {
    try {
      let options = {
        mediaType: 'photo',
        maxWidth: 300,
        maxHeight: 550,
        quality: 1,
      };

      launchImageLibrary(options, response => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode === 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode === 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode === 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        // handleImageResponse(response);
        setFilePath(response);
        const selectedUri = response?.assets[0]?.uri;
        setSelectedImageUri(selectedUri);
      });
    } catch (error) {
      console.error('Error choosing file:', error);
    }
  };

  console.log('img>>>>',selectedImageUri);
  
  // require('../assets/profile.png')
  return (
    <ScrollView style={{flex:1,backgroundColor:'#FFFFFF'}}>
      <View style={{alignItems: 'center',marginTop:"4%",gap:10}}>
        <View style={{borderRadius:50,borderWidth:5,borderColor:'#FFFFFF',position:'relative'}}>
          <Image source={(selectedImageUri)?({uri:selectedImageUri}):(require('../assets/profile.png'))} style={{width:100,height:100,borderRadius:50}} />
          <TouchableOpacity style={{position:'absolute',bottom:'-15%',right:'-4%'}} onPress={toggleModal}>
                    <Image source={require('../assets/cameraicon1.png')}  />
          </TouchableOpacity>
        </View>
        <View>
          <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <TouchableOpacity onPress={chooseFile}>
              <Text>Select Image</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={captureImage}>
              <Text>Open Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal}>
              <Text>cancle</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </Modal>

          </View>
        <View style={{gap:8}}>
          <Text style={{color: '#000', fontSize: 20, fontWeight: '600',textAlign: 'center'}}>
          {profiledata?.fullName}
          </Text>
          <TouchableOpacity onPress={()=> props.navigation.navigate('EditProfileScreen')}>
            <Text
              style={{fontSize: 16, fontWeight: '400', textAlign: 'center',color:'#9796A1'}}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Full name</Text>
          <TextInput style={styles.input} placeholder={profiledata?.fullName} placeholderTextColor={"#111719"}/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>E-mail</Text>
          <TextInput style={styles.input} placeholder={profiledata?.email} placeholderTextColor={"#111719"} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Phone Number</Text>
          <TextInput style={styles.input} placeholder={profiledata?.phone}  placeholderTextColor={"#111719"} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: '4%',
    flexDirection:'column',
    marginLeft:'8%'
  },
  inputLabel: {
    fontSize:16,
    fontWeight:"400",
     textAlign:'left',
     marginLeft:'4%'
  },
  input: {
    borderWidth: 2,
    borderColor: '#B3B3B3',
    width: '90%',
    height: 70,
    marginTop: '3%',
    fontSize: 20,
    borderRadius: 15,
    paddingLeft:'5%',
    
    
  },
});

export default MyProfile;
