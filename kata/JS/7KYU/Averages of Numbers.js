const averages = (n) => {
  const arr = [];
  if (n === null || n.length < 2) {
    return arr;
  }
  n.forEach((a, b) => {
    if (b < n.length - 1) {
      arr.push((a + n[b + 1]) / 2);
    }
  });
  return arr;
};
