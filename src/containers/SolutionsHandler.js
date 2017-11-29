import React from 'react';
import { Alert, TextInput, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

import styles from '../../assets/styles/SolutionsIndexStyle'
import SolutionTile from '../components/SolutionTile'

export default class SolutionsIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      solutions: [],
    }
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
      this.setState({ solutions: response["Solutions"] })
    })
  }

  render() {
    let data = this.state.solutions.map((solution, index) => {
      return(
        { key: index, name: solution.name, contact: solution["#contact"]["name"]}
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
            />
          }
        />
      </View>
    );
  }
}
