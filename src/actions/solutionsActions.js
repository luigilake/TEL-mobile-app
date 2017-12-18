export function favoriteSolution(favoritesArray){
  return {
    type: "UPDATE_FAVORITES",
    payload: favoritesArray,
  }
}

export function updateSolutions(solutionsArray){
  return {
    type: "UPDATE_SOLUTIONS",
    payload: solutionsArray
  }
}
