to_obj = (string) ->
 data = {}
 string = string.split(/\r?\n/)
 i=0
 while i < string.length
    str = string[i].split(':');
    town = str[0]
    numbers = str[1].replace(/[^\d,.]/g,"").split(',')
    data[town] = numbers
    i++
 data

mean = (town, strng) ->
 data = to_obj(strng)
 m = 0
 for k of data
  if k is town
   cityData = data[k]
   i = 0
   while i < cityData.length
    m+= parseFloat(cityData[i])
    i++
   return m/cityData.length
 -1
  

variance = (town, strng) ->
 data = to_obj(strng)
 m = mean(town, strng)
 sum = 0
 for k of data
  if k is town
   cityData = data[k]
   i = 0
   while i < cityData.length
    sum += Math.pow(parseFloat(cityData[i])-m,2)
    i++
   return sum/cityData.length
 -1
