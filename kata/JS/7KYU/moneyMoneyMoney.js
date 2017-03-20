function calculateYears(principal, interest, tax, desired) {
	var years = 0;
  while (desired > principal){
  	principal += (principal * interest) - ((principal * interest)*tax);
    years++
  }
  return years;
}