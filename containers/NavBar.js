import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#66bb4f',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 65,
    shadowColor: '#414141',
    shadowOffset: { width: 0, height: 3},
    shadowOpacity: 0.4,
  },
  titleOrganizer: {
    flexDirection: 'row',
  },
  imageOrganizer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
  },
  navbarTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  selectedTab: {
    color: 'white',
    fontSize: 30,
    fontStyle: 'italic'
  },
  icon: {
    width: 25,
    height: 25,
  }
});
