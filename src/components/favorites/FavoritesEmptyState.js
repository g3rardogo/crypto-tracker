import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FavoritesEmptyState = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 18,
      alignSelf: 'center',
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You don't have any favorite yet</Text>
    </View>
  );
};

export default FavoritesEmptyState;
