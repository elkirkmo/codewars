function buildObject(string){
		var data = {};
    var string = string.split(/\r?\n/);
    for (var i = 0; i < string.length; i++){
    	var str = string[i].split(':');
      var town = str[0];
      var numbers = str[1].replace(/[^\d,.]/g,'').split(',');
      data[town] = numbers;
    }
    return data;
}
function mean(town, strng) {
  var data = buildObject(strng);
  var mean = 0;
  for (var k in data){
  	if(k === town){
    	var shmeep = data[k];
      for (var i =0; i < shmeep.length; i++){
      	mean += parseFloat(shmeep[i])
      }
      return mean/shmeep.length;
  	}
  }
  return -1
}

function variance(town, strng) {
 var data = buildObject(strng);
  var m = mean(town, strng);
  var sum = 0;
  for (var k in data){
  	if(k === town){
    	var shmeep = data[k];
      for (var i =0; i < shmeep.length; i++){
      	sum += Math.pow(parseFloat(shmeep[i])-m,2)
      }
      return sum/shmeep.length;
  	}
  }
  return -1
 }