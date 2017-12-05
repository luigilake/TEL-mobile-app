import React from 'react';
import { Modal, Keyboard, TouchableWithoutFeedback, StyleSheet, Text, View } from 'react-native';
import SideMenu from 'react-native-side-menu';

import NavBar from './containers/NavBar'
import styles from '../assets/styles/GeneralStyle'
import SolutionsHandler from './containers/SolutionsHandler'
import Menu from './components/SideMenu'
import SolutionModal from './containers/SolutionModal'

export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searching: false,
      searchTerm: '',
      menuOpen: false,
      selectedCategory: 'All Solutions',
      modalOpen: false,
      selectedSolution: {},
      solutions: [],
      favorites: []
    }
    this.onSearch = this.onSearch.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.searchUnfocus = this.searchUnfocus.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  onSearch(){
    this.setState({ searching: !this.state.searching, menuOpen: false })
  }

  onSearchChange(text){
    this.setState({ searchTerm: text })
  }

  clearSearch(){
    this.setState({ searching: false, searchTerm: '', menuOpen: false })
  }

  searchUnfocus(){
    this.setState({ searching: false, menuOpen: false })
    Keyboard.dismiss
  }

  toggleMenu(){
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  selectCategory(category){
    this.setState({ selectedCategory: category, menuOpen: false })
  }

  openModal(item, favorited){
    this.setState({ modalOpen: true, selectedSolution: { item, favorited} })
  }

  closeModal(){
    this.setState({ modalOpen: false })
  }

  render() {
    console.log(this.state.selectedSolution)
    let menu = <Menu selectCategory={this.selectCategory}/>
    return (
      <SideMenu menu={menu} isOpen={this.state.menuOpen}>
        <TouchableWithoutFeedback onPress={this.searchUnfocus}>
          <View style={styles.container}>
            <View style={styles.topBar}></View>
            <NavBar
              currentCategory={this.state.selectedCategory}
              searching={this.state.searching}
              onSearch={this.onSearch}
              onSearchChange={this.onSearchChange}
              clearSearch={this.clearSearch}
              searchValue={this.state.searchTerm}
              toggleMenu={this.toggleMenu}
            />
            <SolutionsHandler
              selectedCategory={this.state.selectedCategory}
              openModal={this.openModal}
            />
            <SolutionModal
              modalOpen={this.state.modalOpen}
              closeModal={this.closeModal}
            />
          </View>
        </TouchableWithoutFeedback>
      </SideMenu>
    );
  }
}
