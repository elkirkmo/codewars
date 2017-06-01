function getLosAngelesPoints(results) {  
  const laTeams = /(Los Angeles )+(\D)+$/g;
  const bob = results.filter(x => x[0].match(laTeams)).map(a => a[1].split(':')[0]);
  return bob.length > 0 ? +bob.reduce((a, b) => +a + +b) : bob.length;
}

