const valAndUnits = (s) => {
  const timtam = {}
  timtam.val = /\d/g.test(s) ? +s.match(/[.\-\d]/g).join('') : '';
  timtam.units = /[^.\d]/g.test(s) ? s.match(/[^.\-\d]/g).join('').trim() : '';
  return timtam;
};
