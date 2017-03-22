function triangleType(a, b, c){
	var sorted = [a,b,c].sort((a,b) => a-b);
  var a = sorted[0];
  var b = sorted[1];
  var c = sorted[2];
  if (a + b <= c){
 		return 0;
  }
  
  if (a*a + b*b === c*c){
  	return 2;
  } else if (a*a + b*b > c*c){
  	return 1;
  } else if (a*a + b*b < c*c){
  	return 3;
  } else {
  	return 0;
  }
}