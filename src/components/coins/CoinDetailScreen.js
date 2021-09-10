import React from 'react';
import {View, Text} from 'react-native';

const CoinDetailScreen = props => {
  return (
    <View>
      {console.log('coin: ', props.route.params)}
      <Text>Coin Detail Screen</Text>
    </View>
  );
};

export default CoinDetailScreen;
