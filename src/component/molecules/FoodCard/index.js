import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {FoodDummy1, IcStarOff, IcStarOn} from '../../../assets';
import Rating from '../Rating';

const FoodCard = ({image, name, rating}) => {
  const {
    container,
    text,

    content,
    imageStyle,
  } = styles;

  return (
    <View style={container}>
      <Image style={imageStyle} source={image} />
      <View style={content}>
        <Text style={text}>{name}</Text>
        <Rating number={rating} />
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
    marginHorizontal: 12,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },

  content: {
    padding: 12,
  },
  imageStyle: {
    width: 200,
    height: 140,
    resizeMode: 'cover',
  },
});
