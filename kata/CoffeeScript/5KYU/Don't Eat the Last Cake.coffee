class Player
  constructor: (cakes) ->
   console.log cakes
  
  # Decide who move first - player or opponent (return true if player)
  firstmove: (cakes) ->
   false if cakes > 2 and cakes % 4 isnt 2
    
  # Decide your next move (return 1, 2 or 3)
  move: (cakes, last) ->
    if cakes % 4 < 3 then 3 else 1