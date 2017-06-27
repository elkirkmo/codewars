function toUnderscore(s) {
  const a = String(s).split('')
  .map(x => x === x.toUpperCase() && !/[0-9]/g.test(x) ? ' ' + x : x)
  .join('')
  .split(' ');
  a.length > 1 ? a.shift() : a;
  return a.join('_').toLowerCase();
}
