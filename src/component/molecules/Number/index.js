import React from 'react';
import {Text} from 'react-native';
import NumberFormat from 'react-number-format';
const Number = ({number, type}) => {
  if (type === 'decimal') {
    return (
      <NumberFormat
        value={number}
        renderText={value => <Text>{value}</Text>}
        decimalSeparator=","
        displayType="text"
        decimalScale={1}
        fixedDecimalScale
      />
    );
  }
  return (
    <NumberFormat
      value={number}
      thousandSeparator="."
      renderText={value => <Text>{value}</Text>}
      decimalSeparator=","
      displayType="text"
      prefix="IDR "
    />
  );
};

export default Number;
