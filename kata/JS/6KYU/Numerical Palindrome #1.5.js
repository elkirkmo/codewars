const palindrome = (num, s) => {
  if (num < 0 || typeof num !== 'number' || typeof s !== 'number') {
    return 'Not valid';
  }
  const arr = [];
  let i = 0;
  let n = num;
  while (i < s) {
    if (n > 10 && n.toString().split('').reverse().join('') === n.toString()) {
      arr.push(n);
      i += 1;
    }
    n += 1;
  }
  return arr;
};
