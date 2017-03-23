String.prototype.toJadenCase = () ->
 arr = @.split ' ' 
 newArr = arr.map (x) -> (x[0].toUpperCase() + x.slice(1))
 newArr.join(' ')