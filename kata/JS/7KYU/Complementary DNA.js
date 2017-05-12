function DNAStrand(dna){
  const dnarray = dna.split('');
   dnarray.forEach((a,b) => {
    if (a === 'A' || a === 'T') {
      a === 'A' ? dnarray[b] = 'T' : dnarray[b] = 'A';
    } else {
      a === 'C' ? dnarray[b] = 'G' : dnarray[b] = 'C'; 
    }
  });
  return dnarray.join('');
}
