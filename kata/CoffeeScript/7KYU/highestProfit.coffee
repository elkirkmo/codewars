minMax = (arr) ->
  newArray = []
  max = (arr) -> Math.max.apply Math, arr
  min = (arr) -> Math.min.apply Math, arr
  newArray.push min arr
  newArray.push max arr
  return newArray