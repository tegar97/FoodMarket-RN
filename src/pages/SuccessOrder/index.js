import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlSuccessOrder, IlSuccessSignUp} from '../../assets';
import {Button, Gap} from '../../component';

const SuccessOrder = ({navigation}) => {
  const {page, title, subTitle, buttonContainer} = styles;

  return (
    <View style={page}>
      <IlSuccessOrder />
      <Text style={title}>You've Made Order</Text>
      <Text style={subTitle}>Just stay at home while we are</Text>
      <Text style={subTitle}>preparing your best foods</Text>
      <Gap height={16} />
      <View style={buttonContainer}>
        <Button
          text="Order Other Foods"
          onPress={() => navigation.replace('MainApp')}
        />
        <Gap height={12} />
        <Button
          text="View My Order"
          onPress={() => navigation.replace('MainApp')}
          color="#8D92A3"
          textColor="white"
        />
      </View>
    </View>
  );
};

export default SuccessOrder;

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
