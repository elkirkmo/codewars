sortTwisted37 = (array) ->
 array.slice sort (a,b) -> twist(a) - twist(b)
twist = (number) ->
 threeSeven = {7:3,3:7}
 parseInt number.toString().replace(/[37]/g, (a) -> threeSeven[a])
