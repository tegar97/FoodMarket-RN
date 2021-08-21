import Axios from 'axios';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Gap, Header, Select, TextInput} from '../../component';
import {setLoading, signUpAction} from '../../redux/action';
import {showMessage, useForm} from '../../utils';

const SignUpAdress = ({navigation}) => {
  const {page, container} = styles;
  const {registerReducer, photoReducer} = useSelector(state => state);
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Bandung',
  });
  const dispatch = useDispatch();
  const onSubmit = () => {
    console.log(photoReducer);
    const data = {
      ...registerReducer,
      ...form,
    };
    dispatch(setLoading(true));
    dispatch(signUpAction(data, photoReducer, navigation));
    // Axios.post('http://10.0.2.2:8000/api/register', data)
    //   .then(res => {
    //     console.log(res);
    //     if (photoReducer.isUploadPhoto) {
    //       const photoForUpload = new FormData();
    //       photoForUpload.append('file', photoReducer);
    //       Axios.post('http://10.0.2.2:8000/api/user/photo', photoForUpload, {
    //         headers: {
    //           Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
    //           'Content-Type': 'multipart/form-data',
    //         },
    //       })
    //         .then(resUpload => {
    //           console.log('Success upload', resUpload);
    //         })
    //         .catch(err => {
    //           dispatch(setLoading(false));
    //           console.log('error', err);
    //           // showMessage('err', err?.response?.data?.message);
    //         });
    //     }
    //     showMessage('Register Success', 'success');
    //     dispatch(setLoading(false));

    //     navigation.replace('SuccessSignUp');
    //   })
    //   .catch(err => {
    //     dispatch(setLoading(false));
    //     console.log(err.response);
    //     showMessage('err', err?.response?.data?.message);
    //   });
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View styles={page}>
        <Header
          title="Adress"
          subTitle="Make sure it valid!"
          onBack={() => navigation.goBack()}
        />

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
