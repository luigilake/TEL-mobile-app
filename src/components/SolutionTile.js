import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../../assets/styles/SolutionTileStyle'

export default class SolutionTile extends React.PureComponent {
  render(){
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <Image style={styles.image}  resizeMode='contain' source={{uri: this.props.image}} />
          <View style={styles.textBox}>
            <Text style={styles.mainTitle}>{this.props.name}</Text>
            <Text style={styles.subTitle}>{this.props.contact}</Text>
          </View>
          <Image style={styles.icon} source={require('../../assets/images/blank-heart.png')} />
        </View>
      </TouchableOpacity>
    );
  }
}
