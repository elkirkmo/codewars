const anagrams = (word, words) => {
  return words.filter((item) => {
    return item.split('').sort().join('') === word.split('').sort().join('');
  });
};
a