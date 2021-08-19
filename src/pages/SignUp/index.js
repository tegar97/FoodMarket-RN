import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Gap, Header, TextInput} from '../../component';
import {useForm} from '../../utils';

const SignUp = ({navigation}) => {
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
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
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
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
});
