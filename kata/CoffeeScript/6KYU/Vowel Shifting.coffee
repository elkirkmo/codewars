vowelShift = (text, n) ->
 return text if text is "" or text is null
 vowels = /[aeiouAEIOU]/
 words = if text then text.split '' else text
 newStr = ''
 location = []
 i = 0
 while i < words.length
  if vowels.test words[i]
   newStr +=words[i]
   location.push i
  i++
 while n < 0
  n = newStr.length + n
 n %= newStr.length
 newStr = newStr.substring(newStr.length - n ) + newStr.substring(0, 
  newStr.length-n)
 i=0
 while i < location.length
  words[location[i]] = newStr[i]
  i++
 return words.join ''
