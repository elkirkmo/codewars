function findMissingLetter(a){
	for (var i = 0; i < a.length-1; i++){
  	if (a[i].charCodeAt(0) != (a[i+1].charCodeAt(0)-1))
    	return String.fromCharCode(a[i].charCodeAt(0)+1)
  }
}