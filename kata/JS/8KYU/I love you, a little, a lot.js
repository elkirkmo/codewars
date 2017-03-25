function howMuchILoveYou(nbPetals) {
  let arr = ['I love you', 'a little','a lot','passionately','madly','not at all']; 
  let str;
  for (let i = 0; i < nbPetals; i++){
  	str = arr[i%arr.length];
  }
  return str;
}
