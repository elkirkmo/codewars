function gHappy(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === 'g' && (str[i - 1] !== 'g' && str[i + 1] !== 'g')) {
      return false;
    }
  }
  return true;
}
