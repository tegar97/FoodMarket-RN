import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ProfileDummy} from '../../assets';

const Home = () => {
  const {profile, profileContainer, desc, appName} = styles;
  return (
    <View>
      <View style={profileContainer}>
        <View>
          <Text style={appName}>FoodMarket</Text>
          <Text style={desc}>Let's get some foods</Text>
        </View>
        <Image source={ProfileDummy} style={profile} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: 'white',
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  appName: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8d92a3',
  },
});
