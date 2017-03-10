decodeMorse = function(morseCode){
  var code = morseCode.split(" "),
  morse = MORSE_CODE,
  decode = [];

  for (var i = 0; i < code.length; i++){
    if (code[i].length === 0){
      (i < code.length-1?(code[i+1].length === 0?decode.push(matchMorseCode(code[i])):null):null);
    } else{
      decode.push(matchMorseCode(code[i]));
    }
  }
  return decode.join("").trim();

  function matchMorseCode(morseCode){
    if (morseCode === "")
      return " ";
    for (var k in morse){
      if (morseCode === k)
        return morse[k];
    }
  }
}