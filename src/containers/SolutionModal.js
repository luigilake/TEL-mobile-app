import React from 'react';
import { Modal, View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../../assets/styles/ModalStyle'

export default class SolutionModal extends React.Component {
  render(){
    return (
        <Modal
          visible={this.props.modalOpen}
          animationType='slide'
          style={styles.container}
        >
          <View style={styles.topBar}></View>
          <Text>X x</Text>
        </Modal>
    );
  }
}
