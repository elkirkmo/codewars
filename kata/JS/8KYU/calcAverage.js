function find_average(array) {
  return array.reduce(function(sum, a){return sum + a}, 0 )/(array.length||1);
}