import React, {useState} from 'react';
import {View, Text, Image, SectionList, StyleSheet} from 'react-native';
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
    </View>
  );
};

export default CoinDetailScreen;
