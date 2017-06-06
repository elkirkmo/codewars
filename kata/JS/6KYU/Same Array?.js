const same = (aArr, bArr) => {
  if (aArr.length === 0 || bArr.length === 0) {
    return true;
  }
  const a = aArr.reduce((c, d) => c.concat(d)).sort((e, f) => e - f).join('');
  const b = bArr.reduce((c, d) => c.concat(d)).sort((e, f) => e - f).join('');
  return a === b;
};
