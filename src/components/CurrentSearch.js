import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import styles from '../../assets/styles/NavBarStyle'

const CurrentSearch = props => {
  return (
    <TouchableWithoutFeedback onPress={props.onSearch}>
      <View>
        <Text style={styles.search}>{props.searchValue}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CurrentSearch;
