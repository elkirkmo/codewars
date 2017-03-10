function longest(words) {
let wordLengths = [];
  for (var i = 0; i < words.length; i++){
    wordLengths.push(words[i].length);
  }  
return Math.max.apply(null, wordLengths);
}