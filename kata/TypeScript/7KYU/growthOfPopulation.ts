export class G964 {

    public static nbYear = (p0, percent, aug, p) => {
      let years:number = 0;
      while (p0 <  p)
      {
      	p0 = p0 + (p0 * (percent/100)) + aug;
        years++
      }
    	return years
    }
}	