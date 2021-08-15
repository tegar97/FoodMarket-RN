import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Select, TextInput} from '../../component';

const SignUpAdress = ({navigation}) => {
  const {page, container} = styles;

  return (
    <View styles={page}>
      <Header title="Adress" subTitle="Make sure it valid!" onBack={true} />

      <View style={container}>
        <TextInput placeholder="Type Your Phone Number" label="Phone No" />
        <Gap height={16} />
        <TextInput placeholder="Type Your Adress " label=" Adress " />
        <Gap height={16} />
        <TextInput placeholder="Type Your House number" label="House No." />
        <Gap height={16} />
        <Select label="city" />
        <Gap height={24} />

        <Button
          text="Sign Up Now"
          color="#FFC700"
          onPress={() => navigation.replace('SuccessSignUp')}
        />
      </View>
    </View>
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
