export function favoriteSolution(favoritesArray){
  return {
    type: "UPDATE_FAVORITES",
    payload: favoritesArray,
  }
}

export function openModal(id){
  return {
    type: "OPEN_MODAL",
    payload: id,
  }
}

export function closeModal(){
  return {
    type: "CLOSE_MODAL",
  }
}
