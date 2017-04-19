function wave() {
  const str = wave.arguments[0].toLowerCase();
  const arr = [];
  for (let i = 0; i < str.length; i += 1) {
    if (str.charAt(i) !== ' ') {
      const cap = str.charAt(i).toUpperCase();
      const front = str.substr(0, i);
      const back = str.slice(i + 1);
      arr.push(front + cap + back);
    }
  }
  return arr;
}

