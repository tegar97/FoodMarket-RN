import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#1ABC9C" />
      <Text style={styles.text}>Loading</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.1)',
  },
  text: {fontSize: 18, fontFamily: 'Poppins-Regular', marginTop: 12},
});
