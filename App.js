import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NavBar from './containers/NavBar'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: 50,
  },
  topBar: {
    backgroundColor: '#59a345',
    height: 22,
  }
});
