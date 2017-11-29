import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import styles from '../../assets/styles/NavBarStyle'

const BeginSearch = props => {
  return (
    <TouchableOpacity onPress={props.onSearch}>
      <Image style={styles.icon} source={require('../../assets/images/search.png')} />
    </TouchableOpacity>
  );
}

export default BeginSearch;
