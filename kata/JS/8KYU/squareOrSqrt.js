function squareOrSquareRoot(array) {
let newArray = [];
	for (i = 0; i < array.length; i++){
    (Math.sqrt(array[i])%1===0 ? newArray.push(Math.sqrt(array[i])):newArray.push(array[i]*array[i]))
  }
  return newArray;  
}