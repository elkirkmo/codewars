const rps = (p1, p2) => {
  let p1w = false;
  if (p1 === p2) {
    return 'Draw!';
  }
  if (p1 === 'rock') {
    p2 === 'scissors' ? p1w = true : p1w = false;
  } else if (p1 === 'scissors') {
    p2 === 'paper' ? p1w = true : p1w = false;
  } else if (p1 === 'paper') {
    p2 === 'rock' ? p1w = true : p1w = false;
  }

  return p1w ? 'Player 1 won!' : 'Player 2 won!';
};
