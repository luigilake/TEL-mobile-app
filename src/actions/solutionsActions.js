export function favoriteSolution(favoritesArray){
  return {
    type: "UPDATE_FAVORITES",
    payload: favoritesArray,
  }
}
