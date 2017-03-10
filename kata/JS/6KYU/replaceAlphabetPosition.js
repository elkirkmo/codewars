function alphabetPosition(text) {
	if (typeof text != "string"){
  	return;
  }
  let textString = text;
  var text = "";
  let textArray = textString.split("");
  for (i=0; i<textArray.length; i++){
    var letterNum = textArray[i].charCodeAt(0);
    if (letterNum >= 97 && letterNum <= 122){
      letterNum = letterNum - 96;  
    } else if (letterNum >=65 && letterNum <= 90){
      letterNum = letterNum - 64;
    } else {
    	continue;
     }
        
    if (textArray.length === 1) {
        text += letterNum.toString();
        break;
    }
     	text += letterNum.toString();
    	text += " ";
  }
 
  	return text.trim();
}

alphabetPosition("This is The text");