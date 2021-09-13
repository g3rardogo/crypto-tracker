import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../../res/colors';
import FavoritesEmptyState from './FavoritesEmptyState';

const FavoritesScreen = () => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.charade,
      flex: 1,
    },
  });
  return (
    <View style={styles.container}>
      <FavoritesEmptyState />
    </View>
  );
};

export default FavoritesScreen;
