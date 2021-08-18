import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, OrderTabSection} from '../../component';
import EmptyOrder from '../../component/molecules/EmptyOrder';

const Order = () => {
  const [isEmpty] = useState(false);
  return (
    <View style={styles.page}>
      {isEmpty ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <Header title="Your orders" subTitle="Wait for the beast meals" />
          <View style={styles.tabContainer}>
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    marginTop: 24,
  },
});
