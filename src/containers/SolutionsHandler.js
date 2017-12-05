import React from 'react';
import { Alert, TextInput, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

import styles from '../../assets/styles/SolutionsIndexStyle'
import SolutionTile from '../components/SolutionTile'
import categoryFilter from '../Javascript/CategoryFilter'

export default class SolutionsHandler extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.data}
          renderItem={({item}) =>
            <SolutionTile
              key={item.key}
              id={item.key}
              name={item.name}
              contact={item.contact}
              image={item.image}
              favorited={item.favorited}
              handleFavorite={this.props.setFavorites}
              openModal={this.props.openModal}
            />
          }
        />
      </View>
    );
  }
}
