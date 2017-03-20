function nbYear(p0, percent, aug, p) {
	var year = 0;
  while(p0<p){
  	p0 = p0 + (p0 * (percent/100)) + aug;
    year++;
  }
  return year;
}