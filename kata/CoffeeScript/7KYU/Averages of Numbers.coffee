averages = (numbers) ->
 if numbers is null or numbers.length < 2 then [] else check numbers

check = (num) ->
 arr = []
 num.forEach (a, b) ->
  if b < num.length - 1
   arr.push (a + num[b + 1]) / 2
 arr