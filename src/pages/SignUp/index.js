/* eslint-disable no-alert */
import React, {useState} from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  View,
  Image,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Gap, Header, TextInput} from '../../component';
import {useForm} from '../../utils';
import {chooseFile} from '../../utils/imagePicker';
const SignUp = ({navigation}) => {
  const [filePath, setFilePath] = useState({});
  console.log(filePath.uri);
  const {page, container, photoContainer, addPhoto, borderPhoto, photo} =
    styles;
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const onSubmit = () => {
    console.log(form);
    dispatch({type: 'SET_REGISTER', value: form});
    navigation.navigate('SignUpAdress');
  };
  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 200,
      maxHeight: 200,
      quality: 0.4,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        showMessage('User cancel pick image');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        showMessage('Camera not available in your device');
        return;
      } else if (response.errorCode == 'permission') {
        showMessage('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        showMessage(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.assets[0]);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response.assets[0]);
      const dataImage = {
        uri: response.assets[0].uri,
        type: response.assets[0].type,
        name: response.assets[0].fileName,
      };
      console.log(dataImage);
      dispatch({type: 'SET_PHOTO', value: dataImage});
      dispatch({type: 'SET_UPLOAD_STATUS', value: true});
    });
  };

  // const PickImage = async () => {
  //   console.log('ini', chooseFile('photo', setFilePath));
  // };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View styles={page}>
        <Header
          title="Sign Up"
          subTitle="Register and eat"
          onBack={() => navigation.goBack()}
        />
        <View style={container}>
          <View style={photo}>
            <TouchableOpacity onPress={() => chooseFile('photo')}>
              <View style={borderPhoto}>
                {filePath ? (
                  <Image
                    source={{uri: filePath.uri}}
                    style={styles.photoContainer}
                  />
                ) : (
                  <View style={photoContainer}>
                    <Text style={addPhoto}>Add Photo</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder="Type Your Full Name"
            label="Full Name"
            value={form.name}
            onChangeText={value => setForm('name', value)}
          />
          <Gap height={16} />

          <TextInput
            placeholder="Type Your Email Address "
            label=" Email Address "
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={16} />
          <TextInput
            placeholder="Type Your Password"
            label="Password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={24} />
          <Button text="Continue" color="#FFC700" onPress={() => onSubmit()} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,

    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },

  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});
