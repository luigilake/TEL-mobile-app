import React from 'react';
import { Modal, View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../../assets/styles/ModalStyle'

export default class SolutionModal extends React.Component {
  render(){
    let data = this.props.data
    let image = `https://images.techxlab.org/${data.image}`

    return (
        <Modal
          visible={this.props.modalOpen}
          animationType='slide'
          style={styles.container}
        >
          <View style={styles.topBar}></View>
            <View>
              <Image resizeMode='contain' style={styles.mainImage} source={{uri: image}} />
              <Text>
                {data.name}
              </Text>
            </View>
            <View style={styles.closeView}>
              <TouchableOpacity onPress={this.props.closeModal}>
              <Image style={styles.closeIcon} source={require('../../assets/images/close.png')}/>
              </TouchableOpacity>
            </View>
        </Modal>
    );
  }
}
