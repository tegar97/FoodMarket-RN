/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Rating from '../Rating';

const ItemListFood = ({image, onPress, items, rating}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Soup Bumil</Text>
          <Text style={styles.price}>IDR 289.00</Text>
        </View>
        {items && !rating && <Text style={styles.items}>{items} items</Text>}
        {rating && !items && <Rating />}
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffff',
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  price: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
  items: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
});