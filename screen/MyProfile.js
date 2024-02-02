import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  PermissionsAndroid,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Modal from 'react-native-modal';
import {url} from '../components/url';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const MyProfile = props => {
  const profiledata = useSelector(state => state.auth.profiledata);
  const usertoken = useSelector(state => state.auth.usertoken);

  const [filePath, setFilePath] = useState({});
  const [selectedImageUri, setSelectedImageUri] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

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
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const profilepicadded = async () => {
    try {
      const formData = new FormData();
      console.log('formdata>>>>', formData);
      formData.append('profileImage', {
        uri: selectedImageUri,
        type: 'image/jpeg',
        name: 'profile.jpg',
      });
      console.log('formdata2>>>>', formData);
      const response = await fetch(`${url}api/addimage`, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: usertoken,
        },
      });

      console.log('res>>>>>', response);
    } catch (error) {
      console.error('Error updating :', error);
    }
  };

  const captureImage = async type => {
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
          if (response.didCancel) {
            alert('User cancelled camera picker');
            return;
          } else if (response.errorCode === 'others') {
            alert(response.errorMessage);
            return;
          }
          // console.log('base64 -> ', response.base64);
          // console.log('uri -> ', response.uri);
          // console.log('width -> ', response.width);
          // console.log('height -> ', response.height);
          // console.log('fileSize -> ', response.fileSize);
          // console.log('type -> ', response.type);
          // console.log('fileName -> ', response.fileName);
          // handleImageResponse(response);
          setFilePath(response);
          const selectedUri = response?.assets[0]?.uri;
          console.log('img>>>.', response.assets[0]);
          setSelectedImageUri(selectedUri);
          profilepicadded();
        });
      }
    } catch (error) {
      console.error('Error capturing image:', error);
    }
  };

  const chooseFile = async type => {
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
        // console.log('base64 -> ', response.base64);
        // console.log('uri -> ', response.uri);
        // console.log('width -> ', response.width);
        // console.log('height -> ', response.height);
        // console.log('fileSize -> ', response.fileSize);
        // console.log('type -> ', response.type);
        // console.log('fileName -> ', response.fileName);
        // handleImageResponse(response);
        setFilePath(response);
        const selectedUri = response?.assets[0]?.uri;
        setSelectedImageUri(selectedUri);
        console.log('img>>>.', response.assets[0].uri);
        profilepicadded();
      });
    } catch (error) {
      console.error('Error choosing file:', error);
    }
  };

  return (
    <ScrollView style={styles.maincontainer}>
      {/* <View style={styles.headercontainer}>
        <TouchableOpacity
          onPress={() => props.snavigation.goBack()}
          style={styles.headertouchbtn}>
          <Icon name="chevron-back-sharp" style={styles.backbtn} color="black" />
        </TouchableOpacity>
        <Text style={styles.headertxt}>My Profile</Text>
      </View> */}
      <View>
        <Image
          source={require('../assets/profilescreenbg.png')}
          style={styles.profileibg}
        />
        <TouchableOpacity
          onPress={() => props.snavigation.goBack()}
          style={styles.headertouchbtn}>
          <Icon
            name="arrow-back-ios"
            style={styles.backbtn}
            color="black"
          />
        </TouchableOpacity>
        <View style={styles.profilecontainer}>
          <View style={styles.profileimgcontainer}>
            <Image
              source={
                selectedImageUri
                  ? {uri: selectedImageUri}
                  : require('../assets/newprofile.jpg')
              }
              style={styles.profileimg}
              
            />
            <TouchableOpacity style={styles.camerabtn} onPress={toggleModal}>
              <Icon name="add-a-photo" color="gray" style={styles.cameraicon} />
            </TouchableOpacity>
          </View>
          <View style={styles.profilecontainertow}>
            <Text style={styles.profilename}>{profiledata?.fullName}</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('EditProfileScreen')}>
              <Text style={styles.edittxt}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* <Modal isVisible={isModalVisible}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{backgroundColor: 'white', padding: 20, borderRadius: 10}}>
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
      </Modal> */}

      
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Full name</Text>
          <TextInput
            style={styles.input}
            placeholder={profiledata?.fullName}
            placeholderTextColor={'#111719'}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder={profiledata?.email}
            placeholderTextColor={'#111719'}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder={profiledata?.phone}
            placeholderTextColor={'#111719'}
          />
        </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headercontainer: {
    height: responsiveHeight(8),
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(10),

    borderWidth: 2,
  },
  headertouchbtn: {
    backgroundColor: '#FFFFFF',
    elevation: 5,
    shadowColor: 'light-brown',
    width: responsiveWidth(Dimensions.get('window').width >= 600 ? 10 : 13),
    height: responsiveHeight(7),
    borderRadius: responsiveWidth(2.5),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: responsiveHeight(2),
    left: responsiveWidth(12),
  },
  headertxt: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
  },
  backbtn: {
    marginLeft:responsiveWidth(2),
    fontSize: responsiveFontSize(4),
  },
  profileibg: {
    flex: 1,
    width: responsiveWidth(100),
    height: responsiveHeight(30),
    position: 'relative',
  },
  profilecontainer: {
  
    width:responsiveWidth(25),
    alignItems: 'center',
    gap: responsiveWidth(2),
    position: 'absolute',
    left: responsiveWidth(30),
    bottom: responsiveHeight(-2),
  },
  profileimgcontainer: {
    borderRadius: responsiveWidth(25),
    borderColor: '#FFFFFF',
    position: 'relative',
  },
  profileimg: {
    width: responsiveWidth(Dimensions.get('window').width >= 600?25:25),
    height: responsiveHeight(Dimensions.get('window').width >= 600?18:13),
    borderRadius:responsiveWidth(10),
  },
  profilecontainertow: {gap: 8},
  cameraicon:{
    fontSize:responsiveFontSize(4)
  },

  camerabtn: {position: 'absolute', bottom:responsiveHeight(0), right:responsiveWidth(-1)},
  profilename: {
    color: '#000',
    fontSize:responsiveFontSize(3),
    fontFamily:'Gilroy-Bold',
    textAlign: 'center',
  },
  edittxt: {
    fontSize:responsiveFontSize(1.8),
    fontFamily:'Gilroy-Regular',
    textAlign: 'center',
    color: '#9796A1',
  },
  inputContainer: {
   
    marginTop:responsiveHeight(3),
    flexDirection: 'column',
    marginLeft:responsiveWidth(5),
    marginRight:responsiveWidth(5)
  },
  inputLabel: {
    fontSize:responsiveFontSize(2.5),
    fontFamily:'Gilroy-SemiBold',
    marginLeft:responsiveWidth(1)
    
  },
  input: {
    borderWidth: responsiveFontSize(0.11),
    borderColor: '#B3B3B3',
    width: responsiveWidth(90),
    height: responsiveHeight(9),
    marginTop: responsiveHeight(1),
    fontSize: responsiveFontSize(2.4),
    borderRadius: responsiveWidth(2),
    paddingLeft: responsiveWidth(5),
    fontFamily: 'Gilroy-Medium',
    color: 'black',
  },
});

export default MyProfile;
