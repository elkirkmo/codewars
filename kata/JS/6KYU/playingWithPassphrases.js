function playPass(s, n) {
	var a = s.split(''),
      b = [],
      c = '';
  for (var i=0; i < a.length; i++){
  	if (a[i].charCodeAt(0) >= 65 && a[i].charCodeAt(0) <= 90){
      c = a[i].charCodeAt(0)+n > 90 ? String.fromCharCode(65+(a[i].charCodeAt(0)+n - 91)) : String.fromCharCode((a[i].charCodeAt(0)+n))
      i % 2 === 0 ? b.push(c) : b.push(c.toLowerCase());
    } else if(parseInt(a[i])||a[i]==="0"){
      c = Number(a[i]) === 0 ? "9" : (9-Number(a[i])).toString(); 
      b.push(c);
    } else {
    	b.push(a[i]);
    }
  }
  return b.reverse().join('');
}