const clonewars = (n) => {
  let clones = 1;
  let kata = n;
  while (n > 1) {
    n--;
    clones += clones;
    kata += n * clones;
  }
  return [clones, kata];
};

