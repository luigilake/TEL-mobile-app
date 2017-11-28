import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import styles from '../assets/styles/NavBarStyle'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.icon} source={require('../assets/images/menu.png')}/>
        <View style={styles.titleOrganizer} >
          <Text style={styles.navbarTitle}>tel /</Text>
          <Text style={styles.selectedTab}> {'All Solutions'}</Text>
        </View>
        <View style={styles.imageOrganizer} >
          <Image style={styles.icon} source={require('../assets/images/search.png')}/>
          <Image style={styles.icon} source={require('../assets/images/refresh.png')}/>
        </View>
      </View>
    );
  }
}
