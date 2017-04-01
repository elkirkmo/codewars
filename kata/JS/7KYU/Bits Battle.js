function bitsBattle(numbers) {
  const bits = numbers.map(a => (a >>> 0).toString(2));
  const odds = bits.filter(num => num % 2 !== 0).join('').split('').filter(num => +num > 0);
  const evens = bits.filter(num => num % 2 === 0).join('').split('').filter(num => +num === 0);
  if (odds.length === evens.length) {
    return 'tie';
  }
  return odds.length > evens.length ? 'odds win' : 'evens win';
}
