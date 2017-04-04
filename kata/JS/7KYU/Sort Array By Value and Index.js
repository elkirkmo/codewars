const sortByValueAndIndex = (array) => {
  return array.map((a, i) => {
    return [a, a * (i + 1)]
  }).sort((a, b) => a[1] - b[1]).map(a => +a[0]);
};
