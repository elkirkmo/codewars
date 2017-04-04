function knapsackLight (value1, weight1, value2, weight2, maxW) {
  let val = 0;
  if (weight1 + weight2 <= maxW) {
    val = value1 + value2;
  } else if (weight1 + weight2 > maxW && weight1 <= maxW && weight2 <= maxW) {
    val = value1 > value2 ? value1 : value2;
  } else if (weight1 <= maxW && weight2 > maxW) {
    val = value1;
  } else if (weight1 > maxW && weight2 <= maxW) {
    val = value2;
  }
  return val;
}
