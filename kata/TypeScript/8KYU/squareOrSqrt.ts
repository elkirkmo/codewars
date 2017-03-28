export function squareOrSquareRoot(array:number[]) : number[] {
  return array.map(x => Math.sqrt(x)%1===0 ? Math.sqrt(x) : x**2);
}