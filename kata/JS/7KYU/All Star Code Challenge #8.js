function insurance(a, s, n) {
  const CARS = {
    economy: 0,
    medium: 10,
    'full-size': 15,
  };
  return n > 0 ?
    (a > 24 ? 0 : 10 * n) + (50 * n) + (CARS[s] !== undefined ? CARS[s] * n : 15 * n)
    : 0;
}
