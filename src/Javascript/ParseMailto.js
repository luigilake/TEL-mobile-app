export function parseMailto(data){
  let mailto;
  if(data["#contact"]["_txt"].includes('mailto')){
    let results = data["#contact"]["_txt"].match(/\((.*?)(?=\))/g);
    let mailtoResult = results.find( result => result.includes('mailto'));
    if(mailtoResult[0] == '('){
      mailtoResult = mailtoResult.slice(1)
    }
    mailto = mailtoResult
  } else {
    mailto = `mailto:notifications@techxlab.org?subject=Requesting Information on ${data["name"]} from ${data["#contact"]["name"]}`
  }
  console.log(mailto)
  return(
    mailto
  );
}

export default parseMailto;
