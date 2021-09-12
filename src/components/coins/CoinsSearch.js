import React, {useState} from 'react';
import {TextInput, StyleSheet, Platform, View} from 'react-native';
import Colors from '../../res/colors';

const CoinsSearch = props => {
  const [query, setQuery] = useState('');

  const handleText = query => {
    setQuery(query);
    if (props.onChange) {
      props.onChange(query);
    }
  };

  const styles = StyleSheet.create({
    textInput: {
      height: 46,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      paddingLeft: 16,
      color: '#fff',
    },
    textInputAndroid: {
      borderBottomWidth: 2,
      borderBottomColor: Colors.zircon,
    },
    textInputIOS: {
      margin: 8,
      borderRadius: 8,
    },
  });

  return (
    <View>
      <TextInput
        style={[
          styles.textInput,
          Platform.OS == 'ios' ? styles.textInputIOS : styles.textInputAndroid,
        ]}
        onChangeText={handleText}
        value={query}
        placeholder="Search coin..."
        placeholderTextColor="#fff"
      />
    </View>
  );
};

export default CoinsSearch;
