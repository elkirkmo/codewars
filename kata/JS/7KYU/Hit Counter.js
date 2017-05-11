function counterEffect(hitCount) {
  const newArr = [];
  const arr = hitCount.split('');
  for (let i = 0; i < arr.length; i += 1) {
    let a = +arr[i];
    let b = [];
    for (let j = 0; j <= a; j += 1) {
      b.push(j);
    }
    newArr.push(b);
    b = [];
  }
  
  return newArr;
}
