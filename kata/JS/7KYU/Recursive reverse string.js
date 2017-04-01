function reverse(str) {
  return str.length > 1 ? str[str.length - 1] + reverse(str.substring(0, str.length - 1)) : str;
}
