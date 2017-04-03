function sortTheInnerContent(words) {
  const arr = words.split(' ');
  let str = '';
  arr.forEach((word) => {
    if (word.length > 3) {
      const firstL = word.charAt(0);
      const lastL = word.charAt(word.length - 1);
      const sorted = word.substr(1, word.length - 2).split('')
      .sort()
      .reverse()
      .join('');
      str += `${firstL}${sorted}${lastL} `;
    } else {
      str += `${word} `;
    }
  });
  return str.trim();
}
