function makeParts(arr, chunkSize) {
	let newArr = [];
  for (var i = 0; i < arr.length;){
    newArr.push(arr.slice(i,i+chunkSize));
    i+=chunkSize;
  }
  return newArr;
}