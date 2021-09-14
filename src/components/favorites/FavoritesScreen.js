import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import CoinsItem from '../coins/CoinsItem';
import FavoritesEmptyState from './FavoritesEmptyState';
import Colors from '../../res/colors';
import Storage from '../../libs/storage';

const FavoritesScreen = props => {
  const [favorites, setFavories] = useState([]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      getFavorites();
    });
    return unsubscribe;
  }, [props.navigation]);

  const getFavorites = async () => {
    try {
      const allKeys = await Storage.instance.getAllKeys();
      const keysFiltered = allKeys.filter(key => key.includes('favorite-'));
      const favs = await Storage.instance.multiGet(keysFiltered);
      const favorites = favs.map(fav => JSON.parse(fav[1]));
      setFavories(favorites);
    } catch (error) {
      console.log('Get favorites error: ', error);
    }
  };

  const handlePress = coin => {
    props.navigation.navigate('CoinDetail', {coin});
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.charade,
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      {favorites.length == 0 ? (
        <FavoritesEmptyState />
      ) : (
        <FlatList
          data={favorites}
          renderItem={({item}) => (
            <CoinsItem item={item} onPress={() => handlePress(item)} />
          )}
        />
      )}
    </View>
  );
};

export default FavoritesScreen;
