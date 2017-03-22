function vowelShift(text, n) {
  if (text === null || text === '')
    return text
  var text = text.split(''),
  newStr = '',
  location = [];
  for (var i = 0; i < text.length; i++){
    if (/[aeiouAEIOU]/.test(text[i])){
		  newStr += text[i];
      location.push(i);
	  }
  }
  
  while( n < 0){
    n = newStr.length + n;
  }
  n %= newStr.length
  newStr = newStr.substring(newStr.length - n) + newStr.substring(0, newStr.length-n);
  
  for (var i = 0; i < location.length; i++){
    text[location[i]] = newStr[i];
  }
  return text.join('');
}