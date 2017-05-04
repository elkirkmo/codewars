const SCORES = {
  'Wild': 10,
  'Star': 9,
  'Bell': 8,
  'Shell': 7,
  'Seven': 6,
  'Cherry': 5,
  'Bar': 4,
  'King': 3,
  'Queen': 2,
  'Jack': 1,
};

const fruit = (reels, spins) => {
  let score = 0;
  const a = SCORES[reels[0][spins[0]]];
  const b = SCORES[reels[1][spins[1]]];
  const c = SCORES[reels[2][spins[2]]];
  if (a === b || b === c || a === c) {
    const arr = [a, b, c].sort((d, e) => d - e);
    if (a === b && b === c) {
      score = a * 10;
    } else {
      arr[2] === 10 ? arr[1] === 10 ? score = 10 : score = arr[1] * 2 : score = arr[1];
    }
  }
  return score;
};
