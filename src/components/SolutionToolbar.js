import React from 'react';
import { TouchableOpacity, Animated, View, Text, Image, Linking } from 'react-native';

import styles from '../../assets/styles/ModalStyle'


const SolutionToolbar = props => {

  return (
    <View style={styles.topBar}>
      <TouchableOpacity onPress={props.closeModal}>
        <Image style={styles.closeIcon} source={require('../../assets/images/close.png')}/>
      </TouchableOpacity>
      <View style={styles.headerDiv}>
        <TouchableOpacity onPress={() => Linking.openURL(props.telLink)}>
          <Text style={styles.headerTEL}>tel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(props.mailto)}>
          <Image style={styles.icons} source={require('../../assets/images/mail.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(props.solutionLink)}>
          <Image style={styles.icons} source={require('../../assets/images/globe.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.favorite}>
          {props.favorited}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SolutionToolbar;
