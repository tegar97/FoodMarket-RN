/* eslint-disable react-native/no-inline-styles */
import React from 'react';
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
const InProgress = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood
          image={FoodDummy1}
          rating={3}
          onPress={() => navigation.navigate('FoodDetail')}
          type="past-orders"
          items={3}
          price="2.000.000"
          name="Sop bumil"
        />
        <ItemListFood
          image={FoodDummy2}
          rating={3}
          onPress={() => navigation.navigate('FoodDetail')}
          type="in-progress"
          items={3}
          price="2.000.000"
          name="Sop bumil"
        />
        <ItemListFood
          image={FoodDummy3}
          rating={3}
          onPress={() => navigation.navigate('FoodDetail')}
          type="in-progress"
          items={3}
          price="2.000.000"
          name="Sop bumil"
        />
        <ItemListFood
          image={FoodDummy3}
          rating={3}
          onPress={() => navigation.navigate('FoodDetail')}
          type="in-progress"
          items={3}
          price="2.000.000"
          name="Sop bumil"
        />
      </View>
    </ScrollView>
  );
};

const PastOrder = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood
          image={FoodDummy1}
          rating={3}
          onPress={() => navigation.navigate('FoodDetail')}
          type="past-orders"
          items={3}
          price="2.000.000"
          name="Sop bumil"
          date="jun 12 , 14:00"
        />
        <ItemListFood
          image={FoodDummy2}
          rating={3}
          onPress={() => navigation.navigate('FoodDetail')}
          type="past-orders"
          items={3}
          price="2.000.000"
          name="Sop bumil"
          date="jun 11 , 11:00"
          status="Cancel"
        />
        <ItemListFood
          image={FoodDummy3}
          rating={3}
          onPress={() => navigation.navigate('FoodDetail')}
          type="past-orders"
          items={3}
          price="2.000.000"
          name="Sop bumil"
          date="jun 11 , 11:00"
          status="Cancel"
        />
        <ItemListFood
          image={FoodDummy3}
          rating={3}
          onPress={() => navigation.navigate('FoodDetail')}
          type="past-orders"
          items={3}
          price="2.000.000"
          date="jun 15 , 11:00"
          status="Cancel"
          name="Sop bumil"
        />
      </View>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: InProgress,
  2: PastOrder,
});
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Order'},
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

export default OrderTabSection;

const styles = StyleSheet.create({});
