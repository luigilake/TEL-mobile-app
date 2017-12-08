import React from 'react';
import { Linking, Animated, ScrollView, Modal, View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../../assets/styles/ModalStyle'
import ModalText from '../components/ModalText'
import parseMailto from '../Javascript/ParseMailto'
import SolutionDetails from '../components/SolutionDetails'
import SolutionHeader from '../components/SolutionHeader'
import SolutionToolbar from '../components/SolutionToolbar'

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
    let solutionLink = data["#additional-information"]["producturl"]
    let telLink = `https://www.techxlab.org${data["_href"]}`
    let favorited = <Image style={styles.icons} source={require('../../assets/images/clear-heart.png')}/>
    if(this.props.favorites.includes(data.id)){
      favorited = <Image style={styles.icons} source={require('../../assets/images/clear-heart-filled.png')}/>
    }
    let mailto = parseMailto(data);

    let headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, 300],
      outputRange: [380, 70],
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

    let favorite = () => {
      this.props.setFavorites(data.id);
    }

    return (
        <Modal
          visible={this.props.modalOpen}
          animationType='slide'
          style={styles.container}
        >
          <SolutionDetails
            data={data}
            scrollY={this.state.scrollY}
          />
          <SolutionHeader
            data={data}
            headerHeight={headerHeight}
            imageOpacity={imageOpacity}
            imageTranslate={imageTranslate}
            image={image}
          />
          <SolutionToolbar
            closeModal={this.props.closeModal}
            telLink={telLink}
            mailto={mailto}
            solutionLink={solutionLink}
            favorite={favorite}
            favorited={favorited}
          />
        </Modal>
    );
  }
}
