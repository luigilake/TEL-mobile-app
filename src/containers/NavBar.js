import React from 'react';
import { TextInput, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import styles from '../../assets/styles/NavBarStyle'

export default class NavBar extends React.Component {
  render() {

    let title = <Text style={styles.selectedTab}>All Solutions</Text>
    if(this.props.searching){
      title = <TextInput style={{height: 30, width: 190, color: 'white', fontSize: 25}} autoFocus={true} selectionColor='white' />
    }

    return (
      <View style={styles.container}>

        <Image style={styles.icon} source={require('../../assets/images/menu.png')}/>

        <View style={styles.titleOrganizer} >
          <Text style={styles.navbarTitle}>tel / </Text>
          {title}
        </View>

        <View style={styles.imageOrganizer} >
          <TouchableOpacity onPress={this.props.onSearch}>
            <Image style={styles.icon} source={require('../../assets/images/search.png')}
            />
          </TouchableOpacity>

          <Image style={styles.icon} source={require('../../assets/images/refresh.png')}/>
        </View>

      </View>
    );
  }
}
