String.prototype.toJadenCase = function () {
	let arr:string[] = this.split('');
  arr.forEach(function(value, i){
  	if (value === ' '){
      arr[i+1] = arr[i+1].toUpperCase();
    }
  });
  arr[0] = arr[0].toUpperCase();
  return arr.join('');
};
