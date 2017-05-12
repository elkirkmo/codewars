export function repeatStr (n:number, s:String):String {
  let str = [];
  let i:number = 0;
  while (i < n) {
	  str.push(s);
    i += 1;
  }
  return str.join('');
}
