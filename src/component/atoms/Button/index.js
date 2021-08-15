import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = props => {
  const {container, text} = styles;
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
      <View style={container(props.color)}>
        <Text style={text(props.textColor)}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color ? color : '#FFC700',
    padding: 12,
    borderRadius: 8,
  }),
  text: color => ({
    fontSize: 14,
    fontFamily: 'Poppins-Nedium',
    color: color ? color : '#020202',
    textAlign: 'center',
  }),
});
