function createArrayOfTiers(num) {
  const n = num.toString();
  let arr = [];
  arr.push(n.substr(0,1));
  for (let i = 1; i < n.length; i += 1) {
    arr.push(arr[i - 1] + n[i]);
  }
  return arr;
}