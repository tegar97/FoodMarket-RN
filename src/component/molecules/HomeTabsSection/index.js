/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {FoodDummy1, FoodDummy2, FoodDummy3} from '../../../assets';
import ItemListFood from '../ItemListFood';
import Rating from '../Rating';
import {useNavigation} from '@react-navigation/native';
const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#f2f2f2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);
const NewTaste = () => {
  const navigation = useNavigation();
  const {newTaste} = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoodDataByTypes('newTaste'));
  }, []);
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        {newTaste.map(item => {
          return (
            <ItemListFood
              key={item.id}
              type="product"
              name={item.name}
              price={item.price}
              image={{uri: `http://10.0.2.2:8000/storage/${item.picturePath}`}}
              rating={item.rate}
              onPress={() => navigation.navigate('FoodDetail', item)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  const {popular} = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoodDataByTypes('popular'));
  }, []);
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        {popular.map(item => {
          return (
            <ItemListFood
              key={item.id}
              type="product"
              name={item.name}
              price={item.price}
              image={{uri: `http://10.0.2.2:8000/storage/${item.picturePath}`}}
              rating={item.rate}
              onPress={() => navigation.navigate('FoodDetail', item)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};
const Recommended = () => {
  const navigation = useNavigation();
  const {recommended} = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoodDataByTypes('recommended'));
  }, []);
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        {recommended.map(item => {
          return (
            <ItemListFood
              key={item.id}
              type="product"
              name={item.name}
              price={item.price}
              image={{uri: `http://10.0.2.2:8000/storage/${item.picturePath}`}}
              rating={item.rate}
              onPress={() => navigation.navigate('FoodDetail', item)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: NewTaste,
  2: Popular,
  3: Recommended,
});
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {getFoodDataByTypes} from '../../../redux/action';

const HomeTabsSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: '#ffff'}}
    />
  );
};

export default HomeTabsSection;

const styles = StyleSheet.create({});
