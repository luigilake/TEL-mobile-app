import React from 'react';
import { Modal, View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../../assets/styles/ModalStyle'

export default class SolutionModal extends React.Component {
  render(){
    let data = this.props.data
    return (
        <Modal
          visible={this.props.modalOpen}
          animationType='slide'
          style={styles.container}
        >
          <View style={styles.topBar}></View>
          <TouchableOpacity onPress={this.props.closeModal}>
            <View style={styles.closeView}>
              <Image style={styles.closeIcon} source={require('../../assets/images/close.png')}/>
            </View>
            <View>
              <Text>
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        </Modal>
    );
  }
}
