import React from 'react';
import { Alert, TextInput, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

import styles from '../../assets/styles/SolutionsIndexStyle'
import SolutionTile from '../components/SolutionTile'
import categoryFilter from '../Javascript/CategoryFilter'

export default class SolutionsHandler extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      solutions: [],
      favorites: []
    }
    this.favoriteSolutions = this.favoriteSolutions.bind(this);
  }

  componentDidMount(){
    fetch('https://www.techxlab.org/pages.json')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(response => {
      let validSolutions = response["Solutions"].filter( solution => {
        if(solution["publish"]){
          return(solution["publish"].includes("tel"))
        }
      })
      this.setState({ solutions: validSolutions })
    })
  }

  favoriteSolutions(id){
    let favoritesArray = []
    if(!this.state.favorites.includes(id)){
      favoritesArray = this.state.favorites.concat(id)
    } else {
      favoritesArray = this.state.favorites.filter( favorite => favorite != id )
    }
    this.setState({ favorites: favoritesArray })
  }

  render() {
    let selectedCategory = this.props.selectedCategory;
    let favorites = this.state.favorites;
    let data = categoryFilter(this.state.solutions, favorites, selectedCategory)

    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) =>
            <SolutionTile
              key={item.key}
              id={item.key}
              name={item.name}
              contact={item.contact}
              image={item.image}
              favorited={item.favorited}
              handleFavorite={this.favoriteSolutions}
              toggleModal={this.props.toggleModal}
            />
          }
        />
      </View>
    );
  }
}
