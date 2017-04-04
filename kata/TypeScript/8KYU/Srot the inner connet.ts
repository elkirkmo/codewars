export function sortTheInnerContent(words:string):string
{
  const arr = words.split(' ');
  let str = '';
  arr.forEach((word,i) => {
    const firstL = word.charAt(0);
    const lastL = word.charAt(word.length-1);
    const sorted = word.substr(1, word.length -2).split('').sort().reverse().join('');
    if (word.length > 3) {
      str += `${firstL}${sorted}${lastL} `;
    } else {
      str += `${word} `;
    }
  });
  return str.trim();
}