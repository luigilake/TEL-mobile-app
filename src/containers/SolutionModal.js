import React from 'react';
import { ScrollView, Modal, View, Text, Image, TouchableOpacity } from 'react-native';

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
            <ScrollView bounces={false}>
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
              <View style={styles.details}>
                <Text style={styles.overViewTitle}>Solution Overview & Benefits</Text>
                <Text style={styles.text}>{data["_txt"]}</Text>
              </View>
            </ScrollView>
        </Modal>
    );
  }
}
