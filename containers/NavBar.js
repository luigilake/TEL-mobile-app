import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          <Text style={styles.navbarTitle}>tel / {'All Solutions'}</Text><Image style={styles.icon} source={{uri: 'https://png.icons8.com/search/android/24/ffffff'}}/>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#58ba3c',
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
  },
  navbarTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  icon: {
    width: 25,
    height: 25,
  }
});
