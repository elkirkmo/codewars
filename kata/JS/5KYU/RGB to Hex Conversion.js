function rgb(r, g, b){
 var arr = [toHex(r), toHex(g), toHex(b)];
 return arr.join('');
}

function toHex(s){
	if (parseInt(s) > 255){
  	s = 255;
  } else if (parseInt(s) < 0){
  	s = 0;
  }
	return s.toString(16).toUpperCase() === '0' ? '00': s.toString(16).toUpperCase();
}