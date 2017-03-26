function vowel2index(str) {
 var arr = str.split('');
 var vowels = ['a','e','i','o','u', 'A','E','I','O','U'];
 for (var i = 0; i < arr.length; i++){
		for (var v in vowels){
    	if (vowels[v] === arr[i]){
      	arr[i] = i+1
      }
    }
	}
  return arr.join('');
}

