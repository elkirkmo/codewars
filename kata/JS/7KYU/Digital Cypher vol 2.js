function decode(code, n) {
  const num = n.toString().split('');
  const arr = [];
  for (let i = 0; i < code.length; i += 1) {
    arr.push(String.fromCharCode((code[i] - +num[i % num.length]) + 96));
  }
  return arr.join('');
}
