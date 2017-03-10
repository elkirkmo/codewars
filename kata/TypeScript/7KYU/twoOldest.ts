// return the two oldest/oldest ages within the array of ages passed in.
// it should return the two ages as a sorted array, youngest age first
export function twoOldestAges(ages){
	ages.sort((a,b)=>a-b);
  return ages.slice(ages.length-2, ages.length);
}