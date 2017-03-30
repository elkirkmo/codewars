function isSmooth(arr) {
  let smooth = false;
  let middle;
  arr.length % 2 === 0 ? middle = arr[(arr.length / 2) - 1] + arr[arr.length / 2] : middle = arr[(arr.length-1)/2];
  if (middle === arr[0] && middle === arr[arr.length - 1]) {
    smooth = true;
  }
  return smooth;
}