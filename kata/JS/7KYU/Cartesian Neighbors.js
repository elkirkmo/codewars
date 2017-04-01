function cartesianNeighbor(x, y) {
  const xs = [x - 1, x, x + 1];
  const ys = [y - 1, y, y + 1];
  const neighbors = [];
  [].concat.apply([], xs.map(function (a) {
    [].concat.apply([], ys.map(function (b) {
      if (a === x && b === y) {
        // do nothing
      } else {
        neighbors.push([a, b]);
      }
    }));
  }));
  return neighbors;
};
