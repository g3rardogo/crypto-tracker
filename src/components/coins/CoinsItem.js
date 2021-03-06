import React from 'react';
import {View, Text, Pressable, Image, StyleSheet, Platform} from 'react-native';
import Colors from '../../res/colors';

const CoinsItem = ({item, onPress}) => {
  const getImageArrow = () => {
    if (item.percent_change_1h > 0) {
      return require('../../assets/arrow_up.png');
    } else {
      return require('../../assets/arrow_down.png');
    }
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 16,
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: Colors.zircon,
      marginLeft: Platform.OS == 'ios' ? 16 : 0,
    },
    row: {
      flexDirection: 'row',
    },
    symbolText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
      marginRight: 12,
    },
    nameText: {
      color: '#fff',
      fontSize: 14,
      marginRight: 16,
    },
    percentText: {
      color: '#fff',
      fontSize: 12,
      marginRight: 8,
    },
    priceText: {
      color: '#fff',
      fontSize: 14,
    },
    imgIcon: {
      width: 22,
      height: 22,
    },
  });
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.row}>
        <Text style={styles.symbolText}>{item.symbol}</Text>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.priceText}>{`$${item.price_usd}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.percentText}>{item.percent_change_1h}</Text>
        <Image source={getImageArrow()} style={styles.imgIcon} />
      </View>
    </Pressable>
  );
};

export default CoinsItem;
