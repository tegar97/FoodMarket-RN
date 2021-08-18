import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {FoodDummy1, FoodDummy2, FoodDummy3} from '../../assets';
import {FoodCard, Gap, HomeProfile, HomeTabsSection} from '../../component';

const Home = () => {
  const {FoodCardContainer, page, tabContainer} = styles;
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={page}>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={FoodCardContainer}>
              <Gap width={24} />
              <FoodCard image={FoodDummy1} />
              <FoodCard image={FoodDummy2} />
              <FoodCard image={FoodDummy3} />
              <Gap width={24} />
            </View>
          </ScrollView>
        </View>
        <View style={tabContainer}>
          <HomeTabsSection />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },

  FoodCardContainer: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  tabContainer: {
    flex: 1,
  },
});
