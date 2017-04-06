function sumAverage(arr) {
  return Math.floor(arr.map(a => {
    return a.reduce((b, c) => b + c) / a.length;
  }).reduce((d, e) => d + e));
}
