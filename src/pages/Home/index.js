import React, {useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FoodDummy1, FoodDummy2, FoodDummy3} from '../../assets';
import {FoodCard, Gap, HomeProfile, HomeTabsSection} from '../../component';
import {getFoodData} from '../../redux/action';

const Home = ({navigation}) => {
  const {FoodCardContainer, page, tabContainer} = styles;
  const {food} = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFoodData());
  }, [dispatch]);
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={page}>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={FoodCardContainer}>
              <Gap width={24} />
              {food.map(itemFood => {
                return (
                  <FoodCard
                    key={itemFood.id}
                    name={itemFood.name}
                    rating={itemFood.rate}
                    onPress={() => navigation.navigate('FoodDetail', itemFood)}
                    image={{
                      uri: `http://10.0.2.2:8000/storage/${itemFood.picturePath}`,
                    }}
                  />
                );
              })}

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
