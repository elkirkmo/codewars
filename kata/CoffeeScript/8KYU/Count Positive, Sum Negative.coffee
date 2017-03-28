countPositivesSumNegatives = (arr) ->
 array = arr ? [];
 i = 0
 sum = 0
 count = 0
 while i < array.length 
  if array[i] > 0 then count++ else sum +=array[i]
  i++
 if array.length is 0 then [] else [count, sum]