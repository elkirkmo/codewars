validBraces = (braces) ->
 results = []
 open = ['(','[','{']
 closed = [')',']','}']
 i = 0
 while i < braces.length
  if open.indexOf(braces[i]) > -1
   results.push braces[i]
  else if closed.indexOf(braces[i]) > -1
   match = open[closed.indexOf(braces[i])]
   if results.length is 0 or results.pop() isnt match
    return false
  i++
 results.length is 0