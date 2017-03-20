using System;

public class Kata
{
  public static int CalculateYears(double principal, double interest,  double tax, double desiredPrincipal)
        {
        	var years = 0;
          while (principal < desiredPrincipal){
          	principal += (principal * interest) - ((principal * interest)*tax);
            years++;
          }
          return years;
        }
}