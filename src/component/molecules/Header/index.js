import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcBack} from '../../../assets';

const Header = props => {
  const {title, subTtitle, container, back} = styles;
  return (
    <View style={container}>
      {props.onBack && (
        <TouchableOpacity activeOpacity={0.7}>
          <View style={back}>
            <IcBack />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={title}>{props.title}</Text>
        <Text style={subTtitle}>{props.subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  subTtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  back: {
    padding: 16,
    marginRight: 16,
    marginLeft: -10,
  },
});
