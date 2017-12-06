import React from 'react';
import { Animated, ScrollView, Modal, View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../../assets/styles/ModalStyle'
import ModalText from '../components/ModalText'

export default class SolutionModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
    }
  }
  render(){
    let data = this.props.data
    let image = `https://images.techxlab.org/${data.image}`
    let history;
    let availability;
    let specifications;
    let additionalInfo;
    let contact;

    if(data["#history-and-development"]){
      history = <ModalText title={'History & Development'} text={data["#history-and-development"]["_txt"]}/>
    }
    if(data["#availability"]){
      availability = <ModalText title={'Availability'} text={data["#availability"]["_txt"]}/>
    }
    if(data["#specifications"]){
      specifications = <ModalText title={'Specifications'} text={data["#specifications"]["_txt"]}/>
    }
    if(data["#additional-information"]){
      additionalInfo = <ModalText title={'Additional Information'} text={data["#additional-information"]["_txt"]}/>
    }
    if(data["#contact"]){
      contact = <ModalText title={'Contact'} text={data["#contact"]["_txt"]}/>
    }

    let headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, 300],
      outputRange: [380, 60],
      extrapolate: 'clamp',
    })
    let imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, 320 / 2, 320],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    let imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, 320],
      outputRange: [0, -50],
      extrapolate: 'clamp',
    });

    return (
        <Modal
          visible={this.props.modalOpen}
          animationType='slide'
          style={styles.container}
        >
          <View style={styles.topBar}></View>

              <ScrollView
                bounces={false}

                scrollEventThrottle={16}
                onScroll={Animated.event(
                  [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
                )}
              >
                <View style={styles.scrollView}>
                  <ModalText title={'Solution Overview & Benefits'} text={data["_txt"]}/>
                  {history}
                  {availability}
                  {specifications}
                  {additionalInfo}
                  {contact}
                </View>


            </ScrollView>
            <Animated.View
              style={[styles.animated, {height: headerHeight}]}
            >

                <Animated.Image
                  resizeMode='contain'
                  style={[styles.mainImage, {opacity: imageOpacity, transform: [{translateY: imageTranslate}]},]} 
                  source={{uri: image}}
                >
                  <View style={styles.titleDiv}>
                    <TouchableOpacity onPress={this.props.closeModal}>
                      <Image style={styles.closeIcon} source={require('../../assets/images/close.png')}/>
                    </TouchableOpacity>
                    <View>
                      <Text style={styles.solutionTitle}>{data.name}</Text>
                      <Text style={styles.solutionContact}>{data['#contact']['name']}</Text>
                    </View>
                  </View>
                </Animated.Image>

              </Animated.View>
        </Modal>
    );
  }
}
