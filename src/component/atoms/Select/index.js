import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {View, Text, StyleSheet} from 'react-native';

const Select = props => {
  const {label, input} = styles;
  return (
    <View>
      <Text style={label}>{props.label}</Text>
      <View style={input}>
        <Picker>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
  },
});
