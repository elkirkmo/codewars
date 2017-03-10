function firstNonRepeatingLetter(s) {
  var letters = s.split('');
  var repeatLetter = [],
  index;
  
  for (var i = 0; i < letters.length; i++){
  	var char = letters[i];  	
     if (repeatLetter.indexOf(char.toUpperCase()) !== -1){
     		index = repeatLetter.indexOf(char.toUpperCase());
        repeatLetter.splice(index, 1);
     } else if (repeatLetter.indexOf(char.toLowerCase()) !== -1){
     		index = repeatLetter.indexOf(char.toLowerCase());
        repeatLetter.splice(index, 1);
     } else {
     		repeatLetter.push(char);
     }
  }

   	return repeatLetter.length > 0 ? repeatLetter[0].toString() : '';
}