import React from 'react';
import { Keyboard, TouchableWithoutFeedback, StyleSheet, Text, View } from 'react-native';

import NavBar from './containers/NavBar'
import styles from '../assets/styles/GeneralStyle'

export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searching: false,
      searchTerm: ''
    }
    this.onSearch = this.onSearch.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.searchUnfocus = this.searchUnfocus.bind(this);
  }

  onSearch(){
    this.setState({ searching: !this.state.searching })
  }

  onSearchChange(text){
    this.setState({ searchTerm: text })
  }

  clearSearch(){
    this.setState({ searching: true, searchTerm: '' })
  }

  searchUnfocus(){
    Keyboard.dismiss
    this.setState({ searching: false })
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.searchUnfocus}>
        <View style={styles.container}>
          <View style={styles.topBar}>
          </View>
          <NavBar
            searching={this.state.searching}
            onSearch={this.onSearch}
            onSearchChange={this.onSearchChange}
            clearSearch={this.clearSearch}
            searchValue={this.state.searchTerm}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
