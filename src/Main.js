import React from 'react';
import { Keyboard, TouchableWithoutFeedback, StyleSheet, Text, View } from 'react-native';

import NavBar from './containers/NavBar'
import styles from '../assets/styles/GeneralStyle'

export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searching: false
    }
    this.onSearch = this.onSearch.bind(this);
    this.cancelSearch = this.cancelSearch.bind(this);
  }

  onSearch(){
    this.setState({ searching: !this.state.searching })
  }

  cancelSearch(){
    Keyboard.dismiss
    this.setState({ searching: false })
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.cancelSearch}>
        <View style={styles.container}>
          <View style={styles.topBar}>
          </View>
          <NavBar
            searching={this.state.searching}
            onSearch={this.onSearch}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
