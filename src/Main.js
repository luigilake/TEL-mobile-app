import React from 'react';
import { Modal, Keyboard, TouchableWithoutFeedback, StyleSheet, Text, View } from 'react-native';
import SideMenu from 'react-native-side-menu';
import { connect } from "react-redux"

import NavBar from './containers/NavBar'
import styles from '../assets/styles/GeneralStyle'
import SolutionsHandler from './containers/SolutionsHandler'
import Menu from './components/SideMenu'
import SolutionModal from './containers/SolutionModal'
import categoryFilter from './Javascript/CategoryFilter'
import AboutUs from './components/AboutUs'

import { favoriteSolution } from './actions/solutionsActions'

@connect((store) => {
  return {
    favorites: store.solutions.favorites,
    menuOpen: store.solutions.menuOpen,
    modalOpen: store.solutions.modalOpen,
    searchTerm: store.solutions.searchTerm,
    searching: store.solutions.searching,
    selectedCategory: store.solutions.selectedCategory,
    selectedSolution: store.solutions.selectedSolution,
    solutions: store.solutions.solutions
  }
})


export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searching: false,
      searchTerm: '',
      menuOpen: false,
      selectedCategory: 'All Solutions',
      modalOpen: false,
      selectedSolution: null,
      solutions: [],
    }
    this.onSearch = this.onSearch.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.searchUnfocus = this.searchUnfocus.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setFavorites = this.setFavorites.bind(this);
    this.closeAboutUs = this.closeAboutUs.bind(this);
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

  openModal(id){
    this.setState({ modalOpen: true, selectedSolution: id })
  }

  closeModal(){
    this.setState({ modalOpen: false, selectedSolution: null })
  }

  setFavorites(id){
    const { favorites } = this.props;
    let favoritesArray = []
    if(!favorites.includes(id)){
      favoritesArray = favorites.concat(id)
    } else {
      favoritesArray = favorites.filter( favorite => favorite != id )
    }
    this.props.dispatch(favoriteSolution(favoritesArray))
  }

  closeAboutUs(){
    this.setState({ selectedCategory: 'All Solutions' })
  }

  render() {
    const { favorites, solutions } = this.props;
    console.log("solutions:", solutions)
    console.log("favorites:", favorites)


    let data = categoryFilter(this.state.solutions, favorites, this.state.selectedCategory, this.state.searchTerm)

    let aboutUs = false;
    if(this.state.selectedCategory == 'About Us'){
      aboutUs = true;
    }

    let menu = <Menu selectCategory={this.selectCategory}/>
    let selectedSolutionData;
    let modal;
    if(this.state.selectedSolution){
      selectedSolutionData = this.state.solutions.find( solution => solution.id == this.state.selectedSolution)
      modal = <SolutionModal
        modalOpen={this.state.modalOpen}
        closeModal={this.closeModal}
        data={selectedSolutionData}
        favorites={favorites}
        setFavorites={this.setFavorites}
      />
    }

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
              openModal={this.openModal}
              setFavorites={this.setFavorites}
              data={data}
            />
            {modal}
            <AboutUs
              modalOpen={aboutUs}
              close={this.closeAboutUs}
            />
          </View>
        </TouchableWithoutFeedback>
      </SideMenu>
    );
  }
}
