const allNonConsecutive = (arr) => {
  const newArr = [];
  arr.forEach((a, b) => {
    if (b > 0) {
      a === arr[b - 1] + 1 ? null : newArr.push({ i: b, n: a });
    }
  });
  return newArr;
};
