function order(words){
  let wordArray = words.split(" ");
  let sortedWords = {};
  let sortedString = "";
  
  if (!words.length)
  	return sortedString;
    
	wordArray.forEach(function(word){
		findNumber(word);    
  });
    
  for (var v in sortedWords) {
  	sortedString += sortedWords[v] + " ";
  }
  
  function findNumber(word){
  	var r = /\d+/;
    var key = word.match(r);
    sortedWords[key[0]] = key.input;
  }
  
  return sortedString.trim();
	
}