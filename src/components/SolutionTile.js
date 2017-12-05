import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../../assets/styles/SolutionTileStyle'

export default class SolutionTile extends React.PureComponent {
  render(){
    let favorited = <Image style={styles.icon} source={require('../../assets/images/blank-heart.png')} />
    if(this.props.favorited){
      favorited = <Image style={styles.icon} source={require('../../assets/images/filled-heart.png')} />
    }

    let handleFavorite = () => {
      this.props.handleFavorite(this.props.id);
    }

    let handleOpenModal = () => {
      this.props.openModal(this.props.id);
    }
    return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.accessSolution} onPress={handleOpenModal}>
            <Image style={styles.image}  resizeMode='contain' source={{uri: this.props.image}} />
            <View style={styles.textBox}>
              <Text style={styles.mainTitle}>{this.props.name}</Text>
              <Text style={styles.subTitle}>{this.props.contact}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFavorite}>
            {favorited}
          </TouchableOpacity>
        </View>
    );
  }
}
