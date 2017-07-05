function mobileKeyboard(str) {
  return str.split('').map((a) => {
    return /[0-9]|\#|\*/gi.test(a) ? 1
      : /[adgjmptw]/gi.test(a) ? 2
      : /[behknqux]/gi.test(a) ? 3
      : /[cfilorvy]/gi.test(a) ? 4
      : 5;
  }).reduce((a, b) => a + b, 0);
}
