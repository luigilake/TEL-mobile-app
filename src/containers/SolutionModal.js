import React from 'react';
import { ScrollView, Modal, View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../../assets/styles/ModalStyle'
import ModalText from '../components/ModalText'

export default class SolutionModal extends React.Component {
  render(){
    let data = this.props.data
    let image = `https://images.techxlab.org/${data.image}`
    let history;
    let availability;
    let specifications;
    if(data["#history-and-development"]){
      history = <ModalText title={'History & Development'} text={data["#history-and-development"]["_txt"]}/>
    }
    if(data["#availability"]){
      availability = <ModalText title={'Availability'} text={data["#availability"]["_txt"]}/>
    }
    if(data["#specifications"]){
      specifications = <ModalText title={'Specifications'} text={data["#specifications"]["_txt"]}/>
    }

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
              <ModalText title={'Solution Overview & Benefits'} text={data["_txt"]}/>
              {history}
              {availability}
              {specifications}
            </ScrollView>
        </Modal>
    );
  }
}
