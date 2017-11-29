import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../../assets/styles/SolutionTileStyle'

const SolutionTile = props => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image style={styles.image}  source={{uri: 'https://i.kinja-img.com/gawker-media/image/upload/s--xRg7an24--/c_scale,fl_progressive,q_80,w_800/dbe0s31ooccsxjtcb9ps.png'}} />
        <View style={styles.textBox}>
          <Text style={styles.mainTitle}>{props.name}</Text>
          <Text style={styles.subTitle}>{props.contact}</Text>
        </View>
        <Image style={styles.icon}  source={require('../../assets/images/blank-heart.png')} />
      </View>
    </TouchableOpacity>
  );
}

export default SolutionTile;
