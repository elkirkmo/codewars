const selReverse = (a, l) => {
  if (l < 1) {
    return a;
  }
  const newArr = [];
  for (let i = 0, j = a.length; i < j; i += l) {
    newArr.push(a.slice(i, i + l).reverse());
  }
  return [].concat(...newArr);
};
