function mixFruit (arr) {
  const a = arr.map(b => b.toLowerCase());
  const FRUIT = {
    banana: 5,
    orange: 5,
    apple: 5,
    lemon: 5,
    grapes: 5,
    avocado: 7,
    strawberry: 7,
    mango: 7,
  };
  let sum = 0;
  a.forEach(c => FRUIT[c] !== undefined ? sum += FRUIT[c] : sum += 9);
  return Math.round(sum / arr.length);
}
