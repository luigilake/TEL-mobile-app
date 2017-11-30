import React from 'react';
import { Alert, TextInput, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

import styles from '../../assets/styles/SolutionsIndexStyle'
import SolutionTile from '../components/SolutionTile'

export default class SolutionsIndex extends React.Component {
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
    let favorites = this.state.favorites
    let favoritesArray;
    if(favorites.includes(id)){
      favoritesArray = favorites.filter(favorite => favorite.id != id )
    } else {
      favoritesArray << id
    }
    this.setState({ favorites: favoritesArray })
  }

  render() {
    let data = this.state.solutions.map((solution, index) => {
      let favorited = false;
      if(this.state.favorites.includes(solution.id)){
        favorited = true;
      }
      return(
        { key: solution.id,
          name: solution.name,
          contact: solution["#contact"]["name"],
          image: `https://images.techxlab.org/${solution.image}`,
          favorited: favorited,
        }
      )
    })

    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) =>
            <SolutionTile
              key={item.key}
              name={item.name}
              contact={item.contact}
              image={item.image}
            />
          }
        />
      </View>
    );
  }
}
