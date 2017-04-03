sortTheInnerContent = (words) ->
 arr = words.split(' ')
 str = ''
 arr.forEach (word) -> 
  firstL = word.charAt 0
  lastL = word.charAt word.length - 1
  sorted = word.substr(1, word.length - 2).split('')
   .sort()
   .reverse()
   .join('')
   if word.length <= 3 then str += "#{word} " else str += "#{firstL}#{sorted}#{lastL} " 
 str.trim()
