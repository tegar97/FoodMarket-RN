import axios from 'axios';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {FoodDummy1} from '../../assets';

import {Button, Header, ItemListFood, ItemValue} from '../../component';
import {API_HOST} from '../../config';
import {getData} from '../../utils';
const OrderDetail = ({navigation, route}) => {
  const order = route.params;

  const onCancel = () => {
    const data = {
      status: 'CANCELLED',
    };
    getData('token')
      .then(resToken => {
        axios.post(`${API_HOST.url}/transaction/${order.id}`, data, {
          headers: {
            Authorization: resToken.value,
          },
        });
      })
      .then(res => {
        console.log('success cancel order');
        navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <ScrollView>
      <View>
        <Header
          title="Payment"
          subTitle="You deverse better meal"
          onBack={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.content}>
          <Text style={styles.label}>Order Summary</Text>
          <ItemListFood
            image={{
              uri: `http://10.0.2.2:8000/storage/${order.food.picturePath}`,
            }}
            type="order-summary"
            name={order.food.name}
            price={order.food.price}
            items={order.quantity}
          />
          <Text style={styles.label}>Detail Transaction</Text>
          <ItemValue
            label={order.food.name}
            value={order.food.price * order.quantity}
            type="currency"
          />
          <ItemValue label="Driver" value={5000} type="currency" />
          <ItemValue
            label="Tax 10%"
            value={(10 / 100) * order.total}
            type="currency"
          />
          <ItemValue
            label="Total Price"
            valueColor="#1ABC9C"
            value={order.total}
            type="currency"
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Deliver to : </Text>
          <ItemValue label="Name" value={order.user.name} />
          <ItemValue label="Phone No." value={order.user.phoneNumber} />
          <ItemValue label="Adress" value={order.user.address} />
          <ItemValue label="House Now" value={order.user.houseNumber} />
          <ItemValue label="City" value={order.user.city} />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Order Status : </Text>
          <ItemValue
            label={`# ${order.id}`}
            value={order.status}
            valueColor={order.status === 'CANCELLED' ? '#D9435E' : '#1ABC9C'}
          />
        </View>
        <View style={styles.button}>
          {order.status === 'PENDING' && (
            <Button
              text="Cancel My Order"
              color="#D9435E"
              textColor="white"
              onPress={() => onCancel()}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderDetail;
const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    paddingBottom: 8,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    marginTop: 24,
  },
});
