import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from '../../assets/styles/MenuStyle'

const Menu = props => {
  return(
    <View style={styles.container}>
      <View style={styles.topBar}></View>
      <Image style={styles.logo} resizeMode='contain' source={require('../../assets/images/TEL_logo.png')}/>
    </View>
  )
}

export default Menu;
