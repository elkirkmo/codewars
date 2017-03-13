findMissingLetter = (array) -> 
	missingLetter = ''
	i = 0
	while i < array.length
    if (array[i].charCodeAt(0) != (array[i+1].charCodeAt(0)-1))
      return missingLetter += String.fromCharCode(array[i].charCodeAt(0)+1)
    else
    	i++