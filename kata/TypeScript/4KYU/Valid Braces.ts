export class Challenge {
  static validBraces(braces: string) {
    const open: string[] = ['(','[','{'];
    const closed: string[] = [')',']','}'];
    let res: string[] = [];
    let match;
    let i = 0;
  	while (i < braces.length) {
      if (open.indexOf(braces[i]) > -1) {
      	res.push(braces[i]);
      } else if (closed.indexOf(braces[i]) > -1) {
        match = open[closed.indexOf(braces[i])];
        if (res.length === 0 || res.pop() !== match) {
          return false;
        }
      }
      i++;
    }
    return res.length === 0;
  }
}
