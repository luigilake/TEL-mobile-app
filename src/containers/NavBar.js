import React from 'react';
import { TouchableWithoutFeedback, TextInput, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import styles from '../../assets/styles/NavBarStyle'
import BeginSearch from '../components/BeginSearch'
import CancelSearch from '../components/CancelSearch'
import CurrentSearch from '../components/CurrentSearch'


export default class NavBar extends React.Component {
  render() {

    let title = <Text style={styles.selectedTab}>All Solutions</Text>
    let searchIcon = <BeginSearch onSearch={this.props.onSearch}/>

    if(this.props.searchValue != '' || this.props.searching){
      searchIcon = <CancelSearch clearSearch={this.props.clearSearch}/>
      if(this.props.searching){
        title = <TextInput style={styles.textInput} autoFocus={true} selectionColor='white' onChangeText={this.props.onSearchChange} value={this.props.searchValue}/>
      } else {
        title = <CurrentSearch onSearch={this.props.onSearch} searchValue={this.props.searchValue}/>
      }
    }

    return (
      <View style={styles.container}>
        <Image style={styles.icon} source={require('../../assets/images/menu.png')}/>
        <View style={styles.titleOrganizer} >
          <Text style={styles.navbarTitle}>tel / </Text>
          {title}
        </View>
        <View style={styles.imageOrganizer} >
            {searchIcon}
          <Image style={styles.icon} source={require('../../assets/images/refresh.png')}/>
        </View>
      </View>
    );
  }
}
