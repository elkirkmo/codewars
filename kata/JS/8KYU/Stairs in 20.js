const stairsIn20 = (stairs) => {
  return +stairs.map(stair => {
    return stair.reduce((a, b) => a + b);
  }).reduce((a, b) => a + b) * 20;
};


