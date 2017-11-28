import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NavBar from './containers/NavBar'
import styles from './assets/styles/GeneralStyle'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
        </View>
        <NavBar />
      </View>
    );
  }
}
