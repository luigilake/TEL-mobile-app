import React from 'react';
import { Linking, Animated, ScrollView, Modal, View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../../assets/styles/AboutUsStyle'


const AboutUs = props => {
  let aboutText = 'TEL is a nonprofit organization dedicated to bringing communities out of poverty by driving the adoption of innovative, cost-effective, and sustainable solutions that improve lives at the bottom of the pyramid.\n\nInterested in implementing appropriate technology solutions in developing communities?\n\nContact us and tell us about your project!'

  let mailto = 'mailto:notifications@techxlab.org'

  return (
    <Modal
      visible={true}
      animationType='slide'
    >
      <View style={styles.topBar}></View>
      <Image style={styles.logo} resizeMode='contain' source={require('../../assets/images/TEL_logo.png')}/>
      <View style={styles.titleView}>
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.text}>{aboutText}</Text>
        <Text style={styles.title}>Contact Us</Text>
        <View style={styles.contactView}>
          <Image style={styles.icons} source={require('../../assets/images/dark-globe.png')}/>
          <Text style={styles.contactText}>Email us at: </Text>
          <TouchableOpacity onPress={() => Linking.openURL(mailto)}>
            <Text style={styles.linkText}>Contact@techxlab.com</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.closeButton}>
        <Image style={styles.closeIcon} source={require('../../assets/images/dark-close.png')}/>
      </TouchableOpacity>
    </Modal>
  );
}

export default AboutUs

// toggle modal props.modalOpen
