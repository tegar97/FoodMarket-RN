import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlSuccessSignUp} from '../../assets';
import {Button, Gap} from '../../component';

const SuccessSignUp = ({navigation}) => {
  const {page, title, subTitle, buttonContainer} = styles;
  return (
    <View style={page}>
      <IlSuccessSignUp />
      <Text style={title}>Yeay! Complated</Text>
      <Text style={subTitle}>Now you are able to order</Text>
      <Text style={subTitle}>some foods as a self-reward</Text>
      <Gap height={16} />
      <View style={buttonContainer}>
        <Button
          text="Find Foods"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
