const or = (a, b) => {
  if (a) {
    return true;
  } else if (b) {
    return true;
  }
  return false;
};

const xor = (a, b) => {
  if (a) {
    if (!b) {
      return true;
    }
  } else if (b) {
    return true;
  }
  return false;
};
