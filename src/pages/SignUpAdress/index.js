import Axios from 'axios';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {useSelector} from 'react-redux';
import {Button, Gap, Header, Select, TextInput} from '../../component';
import {useForm} from '../../utils';

const SignUpAdress = ({navigation}) => {
  const {page, container} = styles;
  const registerReducer = useSelector(state => state.registerReducer);
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Bandung',
  });
  const onSubmit = () => {
    console.log(form);
    const data = {
      ...registerReducer,
      ...form,
    };
    Axios.post('http://10.0.2.2:8000/api/register', data)
      .then(res => {
        showMessage('Register Success', 'success');

        navigation.replace('SuccessSignUp');
      })
      .catch(err => {
        console.log('error', err.response.data);
        showToast(err?.response?.data?.message);
      });
  };

  const showToast = (message, type) => {
    showMessage({
      message: message,
      type: type === 'success' ? '#1ABC9C' : '#D9435E',
    });
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View styles={page}>
        <Header title="Adress" subTitle="Make sure it valid!" onBack={true} />

        <View style={container}>
          <TextInput
            placeholder="Type Your Phone Number"
            label="Phone No"
            value={form.phoneNumber}
            onChangeText={value => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            placeholder="Type Your Adress "
            label=" Adress "
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            placeholder="Type Your House number"
            label="House No."
            value={form.houseNumber}
            onChangeText={value => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label="city"
            value={form.city}
            onSelectChange={value => setForm('city', value)}
          />
          <Gap height={24} />

          <Button
            text="Sign Up Now"
            color="#FFC700"
            onPress={() => onSubmit()}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAdress;

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
});
