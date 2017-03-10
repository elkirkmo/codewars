# return the two oldest/oldest ages within the array of ages passed in.
twoOldestAges = (ages) -> 
	ages.sort (a,b) -> a-b
	ages.slice(ages.length-2, ages.length)