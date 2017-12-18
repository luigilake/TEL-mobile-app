import React from 'react';
import { Alert, TextInput, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import styles from '../../assets/styles/NavBarStyle'
import BeginSearch from '../components/BeginSearch'
import CancelSearch from '../components/CancelSearch'
import CurrentSearch from '../components/CurrentSearch'


export default class NavBar extends React.Component {
  render() {

    let title = <Text style={styles.selectedTab} numberOfLines={1}>{this.props.currentCategory}</Text>
    let searchIcon = <BeginSearch onSearch={this.props.onSearch}/>

    if(this.props.searchValue != '' || this.props.searching){
      searchIcon = <CancelSearch clearSearch={this.props.clearSearch}/>
      if(this.props.searching){
        title = <TextInput style={styles.textInput} autoFocus={true} selectionColor='white' onChangeText={this.props.onSearchChange} value={this.props.searchValue}/>
      } else {
        title = <CurrentSearch onSearch={this.props.onSearch} searchValue={this.props.searchValue}/>
      }
    }

    let getSolutions = () => {
      this.props.fetchSolutions()
    }

    let refresh = () => {
      Alert.alert(
        'Are you sure you want to update the database?',
        'Checking for updates requires an internet connection and may result in charges when not on WiFi.',
        [
          {text: 'Update', onPress: getSolutions},
          {text: 'Cancel', onPress: () => console.log('Cancelled'), style: 'cancel'},
        ],
        { cancelable: false }
      )
    }

    return (
      <View style={styles.container}>
        <View>
        <TouchableOpacity onPress={this.props.toggleMenu}>
          <Image style={styles.icon} source={require('../../assets/images/menu.png')}/>
        </TouchableOpacity>
        </View>
        <View style={styles.titleOrganizer} >
          <Text style={styles.navbarTitle}>tel / </Text>
          {title}
        </View>
        <View style={styles.imageOrganizer} >
            {searchIcon}
          <TouchableOpacity onPress={refresh}>
            <Image style={styles.icon} source={require('../../assets/images/refresh.png')}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
