/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Number from '../Number';
import Rating from '../Rating';

/*

TYPE :
1.PRODUCT
2.order-summary
3.in progress
4.past order
*/
const ItemListFood = ({
  image,
  onPress,
  items,
  rating,
  price,
  type,
  name,
  date,
  status,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        return (
          <React.Fragment>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Number number={price} style={styles.price} />
            </View>
            <Rating number={rating} />
          </React.Fragment>
        );
      case 'order-summary':
        return (
          <React.Fragment>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Number number={price} style={styles.price} />
            </View>
            <Text style={styles.items}>{items} items</Text>
          </React.Fragment>
        );
      case 'in-progress':
        return (
          <React.Fragment>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <View style={styles.row}>
                <Text style={styles.price}>{items} items</Text>
                <View style={styles.dot} />
                <Number number={price} style={styles.price} />
              </View>
            </View>
          </React.Fragment>
        );
      case 'past-orders':
        const formatedDate = new Date(date).toDateString();
        return (
          <React.Fragment>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <View style={styles.row}>
                <Text style={styles.price}>{items} items</Text>
                <View style={styles.dot} />
                <Number number={price} style={styles.price} />
              </View>
            </View>
            <View>
              <Text style={styles.date}>{formatedDate}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </React.Fragment>
        );
      default:
        return (
          <React.Fragment>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>

              <Number number={price} style={styles.price} />
            </View>
            <Rating />
          </React.Fragment>
        );
    }
  };
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        {renderContent()}
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
  date: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  status: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#D9435E',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 3,
    backgroundColor: '#8D92A3',
    marginHorizontal: 4,
  },
});
