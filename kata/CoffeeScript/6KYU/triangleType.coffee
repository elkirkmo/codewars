triangleType = (a, b, c) ->
 sorted = [a,b,c].sort (a,b) -> a-b
 a= sorted[0]
 c = sorted[2]
 b = sorted[1]
 if a + b <= c
  0
 else if a*a + b*b == c*c
  2
 else if a*a + b*b > c*c
  1
 else if a*a + b*b < c*c
  3