import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {FoodDummy1} from '../../assets';
import {Button, Header, ItemListFood, ItemValue} from '../../component';

const OrderSummary = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <Header
          title="Payment"
          subTitle="You deverse better meal"
          onBack={() => {}}
        />
        <View style={styles.content}>
          <Text style={styles.label}>Order Summary</Text>
          <ItemListFood image={FoodDummy1} />
          <Text style={styles.label}>Detail Transaction</Text>
          <ItemValue label="Cherry Healthy" value="IDR 18.390.00" />
          <ItemValue label="Driver" value="value" />
          <ItemValue label="Tax 10%" value="IDR 1.800.390" />
          <ItemValue
            label="Total Price"
            valueColor="#1ABC9C"
            value="IDR 390.803.000"
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Deliver to : </Text>
          <ItemValue label="Name" value="Tegar Akmal" />
          <ItemValue label="Phone No." value="085125125" />
          <ItemValue label="Adress" value="Setara Duta Palima" />
          <ItemValue label="House Now" value="A5 Hook" />
          <ItemValue label="City" value="Bandung" />
        </View>
        <View style={styles.button}>
          <Button
            text="Checkout Now"
            onPress={() => navigation.replace('SuccessOrder')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderSummary;

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
