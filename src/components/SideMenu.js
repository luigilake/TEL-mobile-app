import React from 'react';
import { Image, Text, View, FlatList } from 'react-native';

import styles from '../../assets/styles/MenuStyle'
import menuTabs from './MenuData'

const Menu = props => {

  return(
    <View style={styles.container}>
      <View style={styles.topBar}></View>
      <Image style={styles.logo} resizeMode='contain' source={require('../../assets/images/TEL_logo.png')}/>

      <View style={styles.tileContainer}>
        <Image style={styles.image} source={require('../../assets/images/menuImages/all.png')}/>
        <Text style={styles.text}>All Solutions</Text>
      </View>

      <View style={styles.tileContainer}>
        <Image style={styles.image} source={require('../../assets/images/menuImages/all.png')}/>
        <Text style={styles.text}>All Solutions</Text>
      </View>

    </View>
  )
}

export default Menu;
