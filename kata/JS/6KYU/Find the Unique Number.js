const findUniq = (arr) => {
  const s = arr.sort((a, b) => a - b);
  return s[s.length - 1] === s[s.length - 2] ? s.shift() : s.pop();
};

