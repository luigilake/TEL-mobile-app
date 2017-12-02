import React from 'react';
import { TouchableOpacity, Image, Text, View, FlatList } from 'react-native';

import styles from '../../assets/styles/MenuStyle'
import menuTabs from './MenuData'

const Menu = props => {

  return(
    <View style={styles.container}>
      <View style={styles.topBar}></View>
      <Image style={styles.logo} resizeMode='contain' source={require('../../assets/images/TEL_logo.png')}/>

      <TouchableOpacity>
        <View style={styles.tileContainer}>
          <Image style={styles.image} source={require('../../assets/images/menuImages/all.png')}/>
          <Text style={styles.text}>All Solutions</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.tileContainer}>
          <Image style={styles.image} source={require('../../assets/images/menuImages/favorites.png')}/>
          <Text style={styles.text}>Favorites</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.tileContainer}>
          <Image style={styles.image} source={require('../../assets/images/menuImages/agriculture.png')}/>
          <Text style={styles.text}>Agriculture & Tools</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.tileContainer}>
          <Image style={styles.image} source={require('../../assets/images/menuImages/energy.png')}/>
          <Text style={styles.text}>Energy & Cooking</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.tileContainer}>
          <Image style={styles.image} source={require('../../assets/images/menuImages/health.png')}/>
          <Text style={styles.text}>Health & Medicine</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.tileContainer}>
          <Image style={styles.image} source={require('../../assets/images/menuImages/education.png')}/>
          <Text style={styles.text}>Education & Connectivity</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.tileContainer}>
          <Image style={styles.image} source={require('../../assets/images/menuImages/housing.png')}/>
          <Text style={styles.text}>Housing & Transport</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.tileContainer}>
          <Image style={styles.image} source={require('../../assets/images/menuImages/water.png')}/>
          <Text style={styles.text}>Water & Sanitation</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.tileContainer}>
          <Image style={styles.image} source={require('../../assets/images/menuImages/misc.png')}/>
          <Text style={styles.text}>Additional Solutions</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.tileContainer}>
          <Image style={styles.image} source={require('../../assets/images/menuImages/about.png')}/>
          <Text style={styles.text}>About Us</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}

export default Menu;
