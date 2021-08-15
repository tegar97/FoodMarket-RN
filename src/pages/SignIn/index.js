import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../component';

const SignIn = ({navigation}) => {
  const {page, container} = styles;
  return (
    <View style={page}>
      <Header title="Sign in" subTitle="Find Your Best ever meal" />
      <View style={container}>
        <TextInput placeholder="Type Your Email Adress" label="Email Adress" />
        <Gap height={16} />
        <TextInput placeholder="Type Your Password" label="Password" />
        <Gap height={24} />
        <Button text="Sign In" color="#FFC700" />
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
