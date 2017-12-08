export function contactEmail(text){
  let emailResults = text.match(/\[(.*?)([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)(.*?)(\])/g);
  let email = emailResults[0];
  email = email.slice(1,-1)
  return( `${email}\n\n` )
}

export function contactDetails(text){
  let results = text.match(/([^]*)(?=\[(.*?)([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)(.*?)\])/g)
  let result = results[0];
  return(
    result
  )
}
