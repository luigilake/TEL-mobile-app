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
      data = solutions.map((solution) => {
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
      })
      break;
    case "Favorites":
      newSolutions = solutions.filter( solution => {
        return(favorites.includes(solution.id))
      })
      data = newSolutions.map((solution) => {
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
      })
      break;
    case "Agriculture & Tools":
      newSolutions = solutions.filter( solution => {
        return(solution.category.includes("agriculture"))
      })
      data = newSolutions.map((solution) => {
        return(
          renderSolution(solution,favorites)
        );
      })
      break;
    case "Energy & Cooking":
      newSolutions = solutions.filter( solution => {
        return(solution.category.includes("energy"))
      })
      data = newSolutions.map((solution) => {
        return(
          renderSolution(solution,favorites)
        );
      })
      break;
    case "Health & Medical":
      newSolutions = solutions.filter( solution => {
        return(solution.category.includes("medical"))
      })
      data = newSolutions.map((solution) => {
        return(
          renderSolution(solution,favorites)
        );
      })
      break;
    case "Education & Connectivity":
      newSolutions = solutions.filter( solution => {
        return(solution.category.includes("education"))
      })
      data = newSolutions.map((solution) => {
        return(
          renderSolution(solution,favorites)
        );
      })
      break;
    case "Housing & Transport":
      newSolutions = solutions.filter( solution => {
        return(solution.category.includes("housing"))
      })
      data = newSolutions.map((solution) => {
        return(
          renderSolution(solution,favorites)
        );
      })
      break;
    case "Housing & Transport":
      newSolutions = solutions.filter( solution => {
        return(solution.category.includes("housing"))
      })
      data = newSolutions.map((solution) => {
        return(
          renderSolution(solution,favorites)
        );
      })
      break;

  }
  return( data )
}

export default categoryFilter
