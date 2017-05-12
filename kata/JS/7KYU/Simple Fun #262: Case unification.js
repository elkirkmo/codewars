function caseUnification(s) {
  const a = s.split('');
  let b = [];
  let c = [];
  a.forEach((d) => {
    d === d.toLowerCase() ? b.push(d) : c.push(d);
  });
  return b.length > c.length ? s.toLowerCase() : s.toUpperCase();
}
