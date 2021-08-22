import axios from 'axios';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {FoodDummy1} from '../../assets';
import {
  Button,
  Header,
  ItemListFood,
  ItemValue,
  Loading,
} from '../../component';
import {API_HOST} from '../../config';
import {getData} from '../../utils';
import {WebView} from 'react-native-webview';

const OrderSummary = ({navigation, route}) => {
  const {item, transaction, userProfile} = route.params;
  const [token, setToken] = useState('');

  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const [paymentUrl, setPaymentUrl] = useState('');

  const onNavChange = state => {
    const titleWeb = 'Example Domain';
    if (state.title === titleWeb) {
      navigation.reset({index: 0, routes: [{name: 'SuccessOrder'}]});
    }
  };
  const onCheckout = () => {
    const data = {
      food_id: item.id,
      user_id: userProfile.id,
      quantity: transaction.totalItem,
      total: transaction.total,
      status: 'PENDING',
    };
    getData('token').then(resToken => {
      axios
        .post(`${API_HOST.url}/checkout`, data, {
          headers: {
            Authorization: resToken.value,
          },
        })
        .then(res => {
          console.log('checkout success', res.data);
          setIsPaymentOpen(true);
          setPaymentUrl(res.data.data.payment_url);
        })
        .catch(err => {
          console.log('err', err);
        });
    });
  };
  if (isPaymentOpen) {
    return (
      <React.Fragment>
        <Header
          title="Payment"
          subTitle="You deverse better meal"
          onBack={() => setIsPaymentOpen(false)}
        />
        <WebView
          startInLoadingState={true}
          renderLoading={() => <Loading />}
          source={{uri: paymentUrl}}
          onNavigationStateChange={onNavChange}
        />
      </React.Fragment>
    );
  } else {
    return (
      <ScrollView>
        <View>
          <Header
            title="Payment"
            subTitle="You deverse better meal"
            onBack={() => navigation.goBack()}
          />
          <View style={styles.content}>
            <Text style={styles.label}>Order Summary</Text>
            <ItemListFood
              image={{uri: `http://10.0.2.2:8000/storage/${item.picturePath}`}}
              type="order-summary"
              name={item.name}
              price={item.price}
              items={item.totalItem}
            />
            <Text style={styles.label}>Detail Transaction</Text>
            <ItemValue
              label={item.name}
              value={transaction.totalPrice}
              type="currency"
            />
            <ItemValue
              label="Driver"
              value={transaction.Driver}
              type="currency"
            />
            <ItemValue
              label="Tax 10%"
              value={transaction.tax}
              type="currency"
            />
            <ItemValue
              type="currency"
              label="Total Price"
              valueColor="#1ABC9C"
              value={transaction.total}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.label}>Deliver to : </Text>
            <ItemValue label="Name" value={userProfile.name} />
            <ItemValue label="Phone No." value={userProfile.phoneNumber} />
            <ItemValue label="Adress" value={userProfile.address} />
            <ItemValue label="House Now" value={userProfile.houseNumber} />
            <ItemValue label="City" value={userProfile.city} />
          </View>
          <View style={styles.button}>
            <Button text="Checkout Now" onPress={() => onCheckout()} />
          </View>
        </View>
      </ScrollView>
    );
  }
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
