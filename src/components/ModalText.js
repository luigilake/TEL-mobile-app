import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../assets/styles/ModalStyle'
import { contactEmail, contactDetails } from '../Javascript/ContactMailtoParser'

const ModalText = props => {
  let text = <Text style={styles.text}>{props.text}</Text>
  if(props.title == 'Contact' && props.text.includes('mailto')){
    let email = contactEmail(props.text)
    let details = contactDetails(props.text)
    text = <View><Text style={styles.text}>{details}</Text><Text style={styles.text}>{email}</Text></View>
  }
  return (
    <View style={styles.details}>
      <Text style={styles.overViewTitle}>{props.title}</Text>
      {text}
    </View>
  );
}

export default ModalText;
