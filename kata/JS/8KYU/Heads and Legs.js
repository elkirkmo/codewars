function animals(heads, legs){
  let cows = (legs/2) - heads;
  let chickens = heads - cows;
  if ((heads || legs || cows || chickens) < 0)
    return "No solutions"
  if (Number.isInteger(chickens) && Number.isInteger(cows) && chickens >=0 && cows >= 0){
    console.log("is greater than zero")
    return [chickens, cows]}
  else
    console.log('heads and legs, no chickens or cows')
    return "No solutions"
}