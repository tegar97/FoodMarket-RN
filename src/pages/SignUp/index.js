import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../component';

const SignUp = ({navigation}) => {
  const {page, container, photoContainer, addPhoto, borderPhoto, photo} =
    styles;

  return (
    <View styles={page}>
      <Header title="Sign Up" subTitle="Register and eat" onBack={true} />

      <View style={container}>
        <View style={photo}>
          <View style={borderPhoto}>
            <View style={photoContainer}>
              <Text style={addPhoto}>Add Photo</Text>
            </View>
          </View>
        </View>
        <TextInput placeholder="Type Your Full Name" label="Full Name" />
        <Gap height={16} />
        <TextInput
          placeholder="Type Your Email Address "
          label=" Email Address "
        />
        <Gap height={16} />
        <TextInput placeholder="Type Your Password" label="Password" />
        <Gap height={24} />
        <Button
          text="Continue"
          color="#FFC700"
          onPress={() => navigation.navigate('SignUpAdress')}
        />
      </View>
    </View>
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
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
});
