export function sumArray(array:number[]) : number {
  return array == null || array.length <=2 ? 0 : array.sort((a,b)=>a-b).slice(1,array.length-1).reduce((a,b)=>a+b);
}