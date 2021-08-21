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
        star.push(<IcStarOn key={i} />);
      } else {
        star.push(<IcStarOff key={i} />);
      }
    }
    return star;
  };
  return (
    <View style={ratingContainer}>
      <View style={startContainer}>{renderStart()}</View>
      <Number number={number} type="decimal" style={styles.numberRating} />
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  startContainer: {
    flexDirection: 'row',
    marginRight: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  numberRating: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
});
