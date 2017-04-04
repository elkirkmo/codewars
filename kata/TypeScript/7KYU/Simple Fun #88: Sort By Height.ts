export function sortByHeight(list: number[]): number[] {
  let trees: number[] = [];
  let people: number[] = [];
  list.map((a,i) => {
    a < 0 ? trees.push(i) : people.push(a)
  });
  people = people.sort((a,b) => a - b);
  trees.forEach(a => {
    people.splice(a, 0, -1);
  });
  
  return people;
}