import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcStarOff, IcStarOn} from '../../../assets';
import Number from '../Number';

const Rating = ({number}) => {
  const {startContainer, ratingContainer} = styles;
  const renderStart = () => {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= number) {
        star.push(<IcStarOn />);
      } else {
        star.push(<IcStarOff />);
      }
    }
    return star;
  };
  return (
    <View style={ratingContainer}>
      <View style={startContainer}>{renderStart()}</View>
      <Number number={number} type="decimal" />
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  startContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginRight: 4,
  },
});
