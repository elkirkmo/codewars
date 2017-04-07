createArrayOfTiers = (num) ->
 arr = []
 n = num.toString()
 i = 1;
 while i <= n.length
  arr.push n.substr 0, i
  i++
 arr