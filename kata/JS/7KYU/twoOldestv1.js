// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  console.log(ages.sort((a,b)=> a-b));
  console.log(ages.slice(ages.length-2, ages.length));
  return ages.slice(ages.length-2, ages.length); 
}