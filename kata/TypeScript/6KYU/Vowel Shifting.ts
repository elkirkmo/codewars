export function vowelShift(text:string, n:number):string {
  if (text === null || text === '')
    return text
  let letters = text.split('');
  let newStr:string = '';
  let location: number[] = [];
  letters.forEach(function (value, i) {
      if (/[aeiouAEIOU]/.test(letters[i])) {
          newStr += letters[i];
          location.push(i);
	}
  });
  
  while( n < 0){
    n = newStr.length + n;
  }
  n %= newStr.length
  newStr = newStr.substring(newStr.length - n) + newStr.substring(0, newStr.length-n);
  
  for (let i in location){
    letters[location[i]] = newStr[i];
  }
  return letters.join('');
}
