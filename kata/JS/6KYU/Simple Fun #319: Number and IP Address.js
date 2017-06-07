function numberAndIPaddress(s) {
  const addLeadingZeros = (str, n) => {
    let newStr = str;
    while (newStr.length < n) {
      newStr = `0${newStr}`;
    }
    return newStr;
  };
  let ip = '';
  if (s.indexOf('.') > -1) {
    ip = parseInt(s.split('.')
      .map(x => (+x).toString(2))
      .map(x => x.length < 8 ? addLeadingZeros(x, 8) : x)
      .reduce((a, b) => a + b), 2).toString();
  } else {
    const binArr = addLeadingZeros(parseInt(s, 10).toString(2), 32).match(/.{1,8}/g);
    ip = binArr.map(x => parseInt(x, 2).toString(10)).join('.');
  }
  return ip;
}
