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
              <Image resizeMode='contain' style={styles.mainImage} source={{uri: image}}>
                <View style={styles.titleDiv}>
                  <TouchableOpacity onPress={this.props.closeModal}>
                    <Image style={styles.closeIcon} source={require('../../assets/images/close.png')}/>
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.solutionTitle}>{data.name}</Text>
                    <Text style={styles.solutionContact}>{data['#contact']['name']}</Text>
                  </View>
                </View>
              </Image>
              <Text>Solution Overview & Benefits</Text>

            </View>
        </Modal>
    );
  }
}
