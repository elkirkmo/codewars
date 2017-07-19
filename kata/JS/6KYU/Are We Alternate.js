function isAlt(word) {
  const a = word.split('');
  for (let i = /[aeiou]/g.test(a[0]) ? 0 : 1; i < a.length; i += 2) {
    if (a.length === 1) {
      return true;
    }
    if (!/[aeiou]/g.test(a[i])) {
      return false;
    } else if (/[aeiou]/g.test(a[i]) && /[aeiou]/g.test(a[i + 1]) && i + 1 < a.length) {
      return false;
    }
  }
  return true;
}


/*
Better version
!/[aeiou]{2}|[^aeiou]{2}/.test(word)
*/
