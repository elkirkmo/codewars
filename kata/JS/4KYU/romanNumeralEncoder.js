function solution(number){
	var ROMAN_NUMERALS = {"M":1000,"CM": 900,"D":500,"CD":400,"C":100,"XC":90,"L":50,"XL":40,"X":10,"IX":9,"V":5,"IV":4,"I":1};
  var roman= "";
 	for (var k in ROMAN_NUMERALS){
		while (number >= ROMAN_NUMERALS[k]){
    	roman += k;
      number -= ROMAN_NUMERALS[k];
    }
   }
   return roman;
}