nbYear = (p0, percent, aug, p) ->
 year=0	
	(p0 + (p0 * (percent/100))+aug; year++)	while p0 < p 
 return year
