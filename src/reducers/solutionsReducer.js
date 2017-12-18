export default function reducer(state={
  solutions: [],
  favorites: []
}, action){
  switch(action.type){
    case "UPDATE_FAVORITES":
    let newArray;
    if(!state.favorites.includes(action.payload)){
      newArray = [...state.favorites, action.payload];
    } else {
      newArray = state.favorites.filter( favorite => favorite != action.payload )
    }
      return {
        ...state,
        favorites: newArray,
      }
    case "UPDATE_SOLUTIONS":
      return {
        ...state,
        solutions: action.payload,
      }
  }
  return state;
}
