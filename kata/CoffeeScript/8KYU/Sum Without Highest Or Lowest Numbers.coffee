sumArray = (arr) ->
 if arr is null or arr.length <= 2 
 then 0 
 else arr.sort((a,b) -> a-b).slice(1, arr.length-1).reduce (a,b) -> a+b