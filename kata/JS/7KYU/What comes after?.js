function comes_after(str,l) {
  const arr = str.split('');
  let s = '';
  arr.forEach((a,b) => {
    if (b < arr.length - 1){
      if ((arr[b] === l.toLowerCase() || arr[b] === l.toUpperCase()) && /[a-zA-Z]/.test(arr[b + 1])) {
        s += arr[b + 1];
      }
    }
  });
  return s;
}
