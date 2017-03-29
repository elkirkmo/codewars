const validBraces = (braces) => {
  const open = ['(', '[', '{'];
  const closed = [')', ']', '}'];
  const results = [];
  let match;
  for (let i = 0; i < braces.length; i + 1) {
    if (open.indexOf(braces[i]) > -1) {
      results.push(braces[i]);
    } else if (closed.indexOf(braces[i]) > -1) {
      match = open[closed.indexOf(braces[i])];
      if (results.length === 0 || results.pop() !== match) {
        return false;
      }
    }
  }
  return results.length === 0;
};

validBraces('()()(}{}');
