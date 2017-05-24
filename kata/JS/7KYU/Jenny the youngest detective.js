const missingWord = (nums, str) => {
  const st = str.split(' ').join('').toLowerCase();
  let s = '';
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] > st.length) {
      s = 'No mission today';
      break;
    }
    s += st[nums[i]];
  }
  return s;
};
