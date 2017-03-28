const remove = (s) => {
	let arr = s.split('');
  while (arr[arr.length-1] === "!"){
  	arr.pop();
  }
  return arr.join('');
}