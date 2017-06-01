const sabb = (x, val, happ) => {
  const s = x.toLowerCase().split('').filter(a => a.match(/([sabticl])/)).length;
  return s + val + happ > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.';
};
