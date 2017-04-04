function sortByHeight(a) {
  let trees = [];
  let people = [];
  a.map((b, i) => {
     b < 0 ? trees.push(i) : people.push(b);  
  });
  people = people.sort((a, b) => a - b);
  trees.forEach((a, i) => {
    people.splice(a, 0, -1);
  });
  return people;
}
