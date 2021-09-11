import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Colors from '../../res/colors';

const CoinDetailScreen = props => {
  const {coin} = props.route.params;
  const [coinDetails, setDetails] = useState(coin);
  props.navigation.setOptions({title: coin.name});
  console.log('details: ', coinDetails);

  const getSymbolIcon = nameStr => {
    if (nameStr) {
      const name = nameStr.toLowerCase().replace(' ', '-');
      return `https://c1.coinlore.com/img/25x25/${name}.png`;
    }
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.charade,
      flex: 1,
    },
    subHeader: {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      padding: 16,
      flexDirection: 'row',
    },
    titleText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
      marginLeft: 8,
    },
    iconImg: {
      width: 25,
      height: 25,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Image
          style={styles.iconImg}
          source={{uri: getSymbolIcon(coinDetails.name)}}
        />
        <Text style={styles.titleText}>{coinDetails.name}</Text>
      </View>
    </View>
  );
};

export default CoinDetailScreen;
