
function calculateProbability(n){
	const original = 1 - Math.exp(-0.5111111111111111112 * n * ( n - 1 ) / 365 )
  return Math.round(original*100)/100
}