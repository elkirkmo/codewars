const convertQueryToMap = (query) => {
  const splits = query.split('&');
  const obj = {};
  for (let i = 0; i < splits.length; i + 1) {
    if (splits[0] === '') {
      return obj;
    }
    const a = splits[i].split('=');
    const prop = a[0];
    const val = a[1];
    prop.split('.').reduce((current, next, j, arr) => {
      if (!current[next])  current[next] = {};
      if (j === arr.length - 1) current[next] = decodeURIComponent(val);
      return current[next];
    }, obj);
  }
  return obj;
};

convertQueryToMap('a=1&b=2');
