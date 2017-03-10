function divisors(integer) {

 var divisorArray = [],
  quotient = 0;

  for(var i = 1; i <= integer; i++){
    quotient = integer/i;

    if(quotient === Math.floor(quotient)){
       if(quotient === 1 ||quotient === integer){continue;}
       divisorArray.push(i); 
    }
  }
  if (divisorArray.length > 0)
    return divisorArray;
  else
    return integer + " is prime";
};