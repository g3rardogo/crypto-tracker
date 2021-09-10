import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import Http from '../../libs/http';
import CoinsItem from './CoinsItem';
import Colors from '../../res/colors';

const CoinsScreen = props => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePress = coin => {
    props.navigation.navigate('CoinDetail', {coin});
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.charade,
    },
    titleText: {
      color: '#fff',
      textAlign: 'center',
    },
    btn: {
      padding: 8,
      backgroundColor: 'blue',
      borderRadius: 8,
      margin: 16,
    },
    btnText: {
      color: '#fff',
      textAlign: 'center',
    },
    loader: {
      marginTop: 60,
    },
  });

  const getData = async () => {
    setLoading(true);
    const coins = await Http.instance.get(
      'https://api.coinlore.net/api/tickers/',
    );
    setCoins(coins.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator color="#fff" style={styles.loader} size="large" />
      ) : null}
      <FlatList
        data={coins}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CoinsItem item={item} onPress={() => handlePress(item)} />
        )}
      />
    </View>
  );
};

export default CoinsScreen;
