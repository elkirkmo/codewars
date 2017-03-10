function passed (list) { 
  var arr = [];
  for (var i = 0; i < list.length; i++){
  	if (list[i] <= 18)
    	arr.push(list[i]);
  }
  
  return (arr.length === 0 ? 'No pass scores registered.' : Math.round(arr.reduce((a,b) => a+b, 0)/arr.length))
} 