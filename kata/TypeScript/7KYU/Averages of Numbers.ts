export function averages(numbers:number[]):number[] {
  if (numbers === null) {
    return [];
  }
  
  return numbers.map((a,b) => {
    if (b < numbers.length -1) {
      return (a + numbers[b + 1]) / 2;
    }
  }).slice(0,numbers.length-1);
};
