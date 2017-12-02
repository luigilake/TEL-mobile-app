import React from 'react';
import { TouchableOpacity, Image, Text, View, FlatList } from 'react-native';

import styles from '../../assets/styles/MenuStyle'

const Menu = props => {
  let select = (category) => {
    props.selectCategory(category);
  }

  return(
    <View style={styles.container}>
      <View style={styles.topBar}></View>
      <Image style={styles.logo} resizeMode='contain' source={require('../../assets/images/TEL_logo.png')}/>

      <TouchableOpacity onPress={() => select('All Solutions')} >
        <View style={styles.tileContainer}>
          <Image style={styles.image} source={require('../../assets/images/menuImages/all.png')}/>
          <Text style={styles.text}>All Solutions</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => select('Favorites')} >
        <View style={styles.tileContainer}>
          <Image style={styles.image} source={require('../../assets/images/menuImages/favorites.png')}/>
          <Text style={styles.text}>Favorites</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => select('Agriculture & Tools')} >
        <View style={styles.tileContainer}>
          <Image style={styles.image} source={require('../../assets/images/menuImages/agriculture.png')}/>
          <Text style={styles.text}>Agriculture & Tools</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => select('Energy & Cooking')} >
        <View style={styles.tileContainer}>
          <Image style={styles.image} source={require('../../assets/images/menuImages/energy.png')}/>
          <Text style={styles.text}>Energy & Cooking</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => select('Health & Medicine')} >
        <View style={styles.tileContainer}>
          <Image style={styles.image} source={require('../../assets/images/menuImages/health.png')}/>
          <Text style={styles.text}>Health & Medicine</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => select('Education & Connectivity')} >
        <View style={styles.tileContainer}>
          <Image style={styles.image} source={require('../../assets/images/menuImages/education.png')}/>
          <Text style={styles.text}>Education & Connectivity</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => select('Housing & Transport')} >
        <View style={styles.tileContainer}>
          <Image style={styles.image} source={require('../../assets/images/menuImages/housing.png')}/>
          <Text style={styles.text}>Housing & Transport</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => select('Water & Sanitation')} >
        <View style={styles.tileContainer}>
          <Image style={styles.image} source={require('../../assets/images/menuImages/water.png')}/>
          <Text style={styles.text}>Water & Sanitation</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => select('Additional Solutions')} >
        <View style={styles.tileContainer}>
          <Image style={styles.image} source={require('../../assets/images/menuImages/misc.png')}/>
          <Text style={styles.text}>Additional Solutions</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => select('About Us')} >
        <View style={styles.tileContainer}>
          <Image style={styles.image} source={require('../../assets/images/menuImages/about.png')}/>
          <Text style={styles.text}>About Us</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}

export default Menu;
