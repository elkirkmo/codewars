function dontGiveMeFive(start, end)
{
	let arr = [];
	for (var i = start; i <= end; i++){
		if (i.toString().indexOf('5') > -1){
  		continue;
  	} 
  	arr.push(i);
	}
  return arr.length;
}