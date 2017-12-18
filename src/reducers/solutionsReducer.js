export default function reducer(state={
  searching: false,
  searchTerm: '',
  menuOpen: false,
  selectedCategory: 'All Solutions',
  modalOpen: false,
  selectedSolution: null,
  solutions: [],
  favorites: []
}, action){
  switch(action.type){
    case "UPDATE_FAVORITES":
      return {
        ...state,
        favorites: action.payload,
        menuOpen: false,
      }
    case "OPEN_MODAL":
      return {
        ...state,
        modalOpen: true,
        selectedSolution: action.payload,
      }
    case "CLOSE_MODAL":
      return {
        ...state,
        modalOpen: false,
        selectedSolution: null,
      }
  }
  return state;
}
