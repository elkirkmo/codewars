animals = (heads, legs) ->
 cows = (legs/2) - heads
 chickens = heads-cows
 if (chickens or heads or cows or legs) < 0
  return "No solutions"
 
 if Number.isInteger(chickens) and chickens >= 0 and Number.isInteger(cows) and cows >= 0
  [chickens, cows]
 else
  return "No solutions"