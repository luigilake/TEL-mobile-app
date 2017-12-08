import React from 'react';
import { Linking, Animated, ScrollView, Modal, View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../../assets/styles/ModalStyle'
import ModalText from './ModalText'


const SolutionDetails = props => {
  let history;
  let availability;
  let specifications;
  let additionalInfo;
  let contact;

  if(props.data["#history-and-development"]){
    history = <ModalText title={'History & Development'} text={props.data["#history-and-development"]["_txt"]}/>
  }
  if(props.data["#availability"]){
    availability = <ModalText title={'Availability'} text={props.data["#availability"]["_txt"]}/>
  }
  if(props.data["#specifications"]){
    specifications = <ModalText title={'Specifications'} text={props.data["#specifications"]["_txt"]}/>
  }
  if(props.data["#additional-information"]){
    additionalInfo = <ModalText title={'Additional Information'} text={props.data["#additional-information"]["_txt"]}/>
  }
  if(props.data["#contact"]){
    contact = <ModalText title={'Contact'} text={props.data["#contact"]["_txt"]}/>
  }

  return (
    <ScrollView
      bounces={false}
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: props.scrollY}}}]
      )}
    >
      <View style={styles.scrollView}>
        <ModalText title={'Solution Overview & Benefits'} text={props.data["_txt"]}/>
        {history}
        {availability}
        {specifications}
        {additionalInfo}
        {contact}
      </View>
    </ScrollView>
  );
}

export default SolutionDetails;
