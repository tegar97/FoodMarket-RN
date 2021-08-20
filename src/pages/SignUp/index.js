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
import {useDispatch, useSelector} from 'react-redux';
import {Button, Gap, Header, TextInput} from '../../component';
import {useForm} from '../../utils';
import {chooseFile} from '../../utils/imagePicker';
const SignUp = ({navigation}) => {
  const [filePath, setFilePath] = useState({});

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

  const PickImage = () => {
    chooseFile('photo', setFilePath);
    const dataImage = {
      uri: filePath.uri,
      type: filePath.type,
      name: filePath.fileName,
    };
    dispatch({type: 'SET_PHOTO', value: dataImage});
    dispatch({type: 'SET_UPLOAD_STATUS', value: true});
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View styles={page}>
        <Header title="Sign Up" subTitle="Register and eat" onBack={true} />
        <View style={container}>
          <View style={photo}>
            <TouchableOpacity onPress={() => PickImage()}>
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
