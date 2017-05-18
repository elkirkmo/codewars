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
  for (const k in a) {
    if (FRUIT[a[k]] !== undefined) {
      sum += FRUIT[a[k]];
    } else {
      sum += 9;
    }
  }
  return Math.round(sum / arr.length);
}
