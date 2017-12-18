export default function reducer(state={
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
  }
  return state;
}
