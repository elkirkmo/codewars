squareOrSquareRoot = (array) ->
 arr = array.map (x)-> if Math.sqrt(x) % 1 is 0 then Math.sqrt(x) else x*x