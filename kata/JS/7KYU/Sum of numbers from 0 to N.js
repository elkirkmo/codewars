var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
   if (count === 0)
    return count+'='+count
   else if (count < 0)
    return count+"<0"
   else {
   	let str = '', sum = 0;
    for (let i = 0; i <= count; i++){
    	let last = i === count ? i.toString()+" = " : i.toString()+"+";
    	str += last;
      sum += i
    }
    return str+sum.toString()
   }
   	
  };

  return SequenceSum;

})();