function cleanZeroes(s) {
  const a = s.split('');
  while (a[0] === '0') {
    a.shift();
  }
  return a.join('');
}

function addition(a, b) {
  const sum = [];
  const al = a.length;
  const bl = b.length;
  let j = 1;
  let carryOne = false;
  for (let i = al - 1; i >= 0; i -= 1) {
    const a1 = +a[i];
    const b1 = isNaN(+b[bl - j]) ? 0 : +b[bl - j];
    let s = '';
    if ((a1 + b1 + carryOne) > 9) {
      s = `${a1 + b1 + carryOne}`;
      sum.push((i === 0 ? s : s[1]));
      carryOne = true;
    } else {
      s = `${a1 + b1 + carryOne}`;
      sum.push(s);
      carryOne = false;
    }
    j += 1;
  }
  return sum;
}


function sumStrings(a, b) {
  const al = a.length;
  const bl = b.length;
  let e;
  let f;
  if (al === 0 || bl === 0) {
    return al === 0 ? b : a;
  } else if (al > bl) {
    e = cleanZeroes(a);
    f = cleanZeroes(b);
  } else {
    e = cleanZeroes(b);
    f = cleanZeroes(a);
  }
  return addition(e, f).reverse().join('');
}
