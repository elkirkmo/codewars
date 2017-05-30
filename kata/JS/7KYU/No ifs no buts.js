const noIfsNoButs = (a, b) => {
  let greater = '';
  switch (true) {
    case a > b:
      greater = `${a} is greater than ${b}`;
      break;
    case a < b:
      greater = `${a} is smaller than ${b}`;
      break;
    case a === b:
      greater = `${a} is equal to ${b}`;
      break;
    default:
      greater = 'nope';
  }
  return greater;
};
