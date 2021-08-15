import React from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';

const TextInput = props => {
  const {label, input} = styles;
  return (
    <View>
      <Text style={label}>{props.label}</Text>
      <TextInputRN style={input} placeholder={props.placeholder} />
    </View>
  );
};

export default TextInput;

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
    padding: 10,
  },
});
