function smallestInteger(m) {
  const newArr = [];
  const merged = [].concat(...m)
  .sort((a, b) => a - b)
  .forEach((a) => { if (a >= 0) { return newArr.indexOf(a) > -1 ? null : newArr.push(a); } });
  if (newArr.length === 0) {
    return 0;
  }
  for (let i = 0; i < newArr.length; i += 1) {
    const a = newArr[i];
    if (i === 0 && a > 0) {
      return 0;
    } else if (a + 1 !== newArr[i + 1]) {
      return a + 1;
    }
  }
}
