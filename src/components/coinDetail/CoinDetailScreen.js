import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  SectionList,
  FlatList,
  StyleSheet,
} from 'react-native';
import Colors from '../../res/colors';
import Http from '../../libs/http';
import CoinMarketItem from './CoinMarketItem';

const CoinDetailScreen = props => {
  const {coin} = props.route.params;
  const [coinDetails, setDetails] = useState(coin);
  const [markets, setMarkets] = useState([]);
  props.navigation.setOptions({title: coin.name});
  console.log('details: ', coinDetails);

  useEffect(() => {
    getMarkets(coin.id);
  }, []);

  const getSymbolIcon = nameStr => {
    if (nameStr) {
      const name = nameStr.toLowerCase().replace(' ', '-');
      return `https://c1.coinlore.com/img/25x25/${name}.png`;
    }
  };

  const getSections = coin => {
    const sections = [
      {
        title: 'Market cap',
        data: [coin.market_cap_usd],
      },
      {
        title: 'Volume 24h',
        data: [coin.volume24],
      },
      {
        title: 'Change 24h',
        data: [coin.percent_change_24h],
      },
    ];
    return sections;
  };

  const getMarkets = async coinId => {
    const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`;
    const markets = await Http.instance.get(url);
    setMarkets(markets);
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
    marketsTitle: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 16,
      marginLeft: 16,
    },
    iconImg: {
      width: 25,
      height: 25,
    },
    section: {
      maxHeight: 220,
    },
    list: {
      maxHeight: 100,
      paddingLeft: 16,
    },
    sectionHeader: {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      padding: 8,
    },
    sectionItem: {
      padding: 8,
    },
    itemText: {
      color: '#fff',
      fontSize: 14,
    },
    sectionText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
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
      <SectionList
        style={styles.section}
        sections={getSections(coinDetails)}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <View style={styles.sectionItem}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionText}>{section.title}</Text>
          </View>
        )}
      />
      <Text style={styles.marketsTitle}>Markets</Text>
      <FlatList
        style={styles.list}
        horizontal={true}
        data={markets}
        renderItem={({item}) => <CoinMarketItem item={item} />}
      />
    </View>
  );
};

export default CoinDetailScreen;