function palindrome(num) {
  if (isNaN(num) || typeof num !== 'number' || num < 0) {
    return 'Not valid';
  }
  const arr = num.toString().split('');
  let bool = true;
  if (arr.length === 1) {
    return true;
  }
  arr.forEach((n,i) => {
    +n !== +arr[arr.length - 1] ? bool = false : arr.pop();
  });
  return bool;
}

// better answer
/*
return +num.toString().split('').reverse().join('') === num ? true : false;

*/
