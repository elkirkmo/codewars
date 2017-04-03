using System;

public class Kata
{
  public static int KnapsackLight(int value1, int weight1, int value2, int weight2, int maxW)
  {
    if (maxW < weight1 && maxW < weight2) return 0;
    if (maxW >= weight1 + weight2) return value1 + value2;
    if (maxW >= weight1 && maxW < weight2) return value1;
    if (maxW >= weight2 && maxW < weight1) return value2;
    return Math.Max(value1, value2);
  }
}