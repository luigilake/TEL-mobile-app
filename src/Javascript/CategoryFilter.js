let renderSolution = (solution, favorites) => {
  let favorited = false;
  if(favorites.includes(solution.id)){
    favorited = true;
  }
  return(
    {
      key: solution.id,
      name: solution.name,
      contact: solution["#contact"]["name"],
      image: `https://images.techxlab.org/${solution.image}`,
      favorited: favorited,
    }
  );
}

export function categoryFilter(solutions, favorites, category){
  let data;
  let newSolutions;
  switch(category){
    case "All Solutions":
      newSolutions = solutions;
      break;
    case "Favorites":
      newSolutions = solutions.filter( solution => {
        return(favorites.includes(solution.id))
      })
      break;
    case "Agriculture & Tools":
      newSolutions = solutions.filter( solution => {
        return(solution.category.includes("agriculture"))
      })
      break;
    case "Energy & Cooking":
      newSolutions = solutions.filter( solution => {
        return(solution.category.includes("energy"))
      })
      break;
    case "Health & Medical":
      newSolutions = solutions.filter( solution => {
        return(solution.category.includes("medical"))
      })
      break;
    case "Education & Connectivity":
      newSolutions = solutions.filter( solution => {
        return(solution.category.includes("education"))
      })
      break;
    case "Housing & Transport":
      newSolutions = solutions.filter( solution => {
        return(solution.category.includes("housing"))
      })
      break;
    case "Water & Sanitation":
      newSolutions = solutions.filter( solution => {
        return(solution.category.includes("water"))
      })
      break;
    case "Additional Solutions":
      newSolutions = solutions.filter( solution => {
        return(solution.category.includes("other"))
      })
      break;
  }
  data = newSolutions.map((solution) => {
    return(
      renderSolution(solution, favorites)
    )
  })
  return( data )
}

export default categoryFilter
