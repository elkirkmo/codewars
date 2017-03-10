function titleCase(title, minorWords) {
  let titleWords = title.toLowerCase().split(" ");
  let newTitle = "";
  let v = (minorWords ? minorWords.toLowerCase().split(" "):"")
  if (title.length === 0)
  	return newTitle;
    
	if (titleWords.length === 1){
    return capitalizeFirstLetter(title).trim();
  }
  
  titleWords.forEach(function(word, i){
    if (v && i > 0) {
			newTitle += checkAvailability(v, word);
    } else {
    	newTitle += capitalizeFirstLetter(word);      
    }
  });
  
  function capitalizeFirstLetter(word){
  
      let uppercaseWord = word.split('');
      uppercaseWord[0] = uppercaseWord[0].toUpperCase();
      return uppercaseWord.join('') + " " ;      
      }
      
      function checkAvailability(arr, val) {
        if (arr.some(arrVal => val === arrVal))
        	return val + " ";
        else
        	return capitalizeFirstLetter(val)
      }
      
  return newTitle.trim();
  
  
}