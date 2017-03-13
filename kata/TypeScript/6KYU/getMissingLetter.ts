export function findMissingLetter(a:string[]):string
{
	let missingLetter:string = '';
	for (let i:number = 0; i < a.length-1; i++){
  	if (a[i].charCodeAt(0) != (a[i+1].charCodeAt(0)-1)){
    	missingLetter = String.fromCharCode(a[i].charCodeAt(0)+1)
    }
  }  
  return missingLetter;
}