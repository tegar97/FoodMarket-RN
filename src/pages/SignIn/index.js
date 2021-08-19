import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../component';
import {useForm} from '../../utils';
import Axios from 'axios';
const SignIn = ({navigation}) => {
  const {page, container} = styles;
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    console.log(form);
    Axios.post('http://10.0.2.2:8000/api/login', form)
      .then(res => {
        console.log('success', res);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  return (
    <View style={page}>
      <Header title="Sign in" subTitle="Find Your Best ever meal" />
      <View style={container}>
        <TextInput
          placeholder="Type Your Email Adress"
          label="Email Adress"
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
        <Button text="Sign In" onPress={() => onSubmit()} color="#FFC700" />
        <Gap height={13} />
        <Button
          text="Create new Account "
          onPress={() => navigation.navigate('SignUp')}
          color="#8D92A3"
          textColor="#ffff"
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
