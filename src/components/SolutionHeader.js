import React from 'react';
import { Linking, Animated, ScrollView, Modal, View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../../assets/styles/ModalStyle'
import ModalText from './ModalText'


const SolutionHeader = props => {

  return (
    <Animated.View
      style={[styles.animated, {height: props.headerHeight}]}
    >
      <Animated.Image
        resizeMode='contain'
        style={[styles.mainImage, {opacity: props.imageOpacity, transform: [{translateY: props.imageTranslate}]},]}
        source={{uri: props.image}}
      >
        <View style={styles.titleDiv}>
          <View>
            <Text style={styles.solutionTitle}>{props.data.name}</Text>
            <Text style={styles.solutionContact}>{props.data['#contact']['name']}</Text>
          </View>
        </View>
      </Animated.Image>
    </Animated.View>
  );
}

export default SolutionHeader;
