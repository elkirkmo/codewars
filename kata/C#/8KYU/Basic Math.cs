namespace Solution
{
  public static class Program
  {
    public static double basicOp(char op, double val1, double val2)
    {
    	switch(op.ToString())
      {
      	case "+":
         return val1 + val2;
      	case "-":
         return val1 - val2;
      	case "*":
         return val1 * val2;
      	case "/":
         return val1 / val2;
       }
       return -1;      
    }
  }
}