export function parseMailto(data){
  if(data["#contact"]["_txt"].includes('mailto')){
    return(
      'hello world'
    )
  } else {
    return(
      `mailto: notifications@techxlab.org?subject=Requesting Information on ${data["name"]} from ${data["#contact"]["name"]}`
    )
  }
}

export default parseMailto;
