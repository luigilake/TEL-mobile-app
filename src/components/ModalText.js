import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../assets/styles/ModalStyle'

const ModalText = props => {
  return (
    <View style={styles.details}>
      <Text style={styles.overViewTitle}>{props.title}</Text>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

export default ModalText;
