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
          <TouchableOpacity onPress={this.props.toggleModal}>
            <Image style={styles.closeIcon} source={require('../../assets/images/close.png')}/>
          </TouchableOpacity>
        </Modal>
    );
  }
}
