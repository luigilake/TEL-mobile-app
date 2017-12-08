import React from 'react';
import { Linking, Animated, ScrollView, Modal, View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../../assets/styles/AboutUsStyle'


const AboutUs = props => {

    return (
        <Modal
          visible={true}
          animationType='slide'
        >
          <View style={styles.topBar}></View>
          <Image style={styles.logo} resizeMode='contain' source={require('../../assets/images/TEL_logo.png')}/>
          <View style={styles.titleView}>
            <Text style={styles.title}>About Us</Text>
            <Text style={styles.title}>Contact Us</Text>
          </View>
        </Modal>
    );
}

export default AboutUs

// toggle modal props.modalOpen
