function findUnique(n) {
  const a = n.sort((b, c) => b - c);
  for (let i = 0; i < a.length; i += 2) {
    if (a[i] !== a[i + 1]) {
      return a[i];
    }
  }
}

// Let it be known that the better way to do it is like to use XOR with bitwise operators
// except fuck bitwise, for real.
const findUnique = n => n.reduce((a, b) => a ^ b);
