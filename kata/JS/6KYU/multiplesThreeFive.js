function solution(number){
let sum = 0;
	for (i = 1; i < number; i++){
		if (i % 3 === 0){
    	sum = sum + i;
    }else if( i % 5 === 0){
    	sum = sum + i;
  	} else {
    	continue;
    }
   }
   return sum;
}