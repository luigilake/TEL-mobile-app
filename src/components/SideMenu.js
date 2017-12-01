import React from 'react';
import { Image, Text, View, FlatList } from 'react-native';

import styles from '../../assets/styles/MenuStyle'
import menuTabs from './MenuData'
import MenuTabTile from './MenuTabTile'

const Menu = props => {
  return(
    <View style={styles.container}>
      <View style={styles.topBar}></View>
      <Image style={styles.logo} resizeMode='contain' source={require('../../assets/images/TEL_logo.png')}/>
      <FlatList
        data={menuTabs}
        renderItem={({item}) =>
        <MenuTabTile />
      }
      />
    </View>
  )
}

export default Menu;
