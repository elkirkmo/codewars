function invert(array) {
   return array.map((x)=>x > 0 ? -Math.abs(x) : Math.abs(x));
}