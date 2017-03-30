rps = (p1, p2) ->
 return "Draw!" if p1 is p2
 rules = {rock : 'scissors', paper : 'rock', scissors : 'paper'}
 if p2 is rules[p1] then 'Player 1 won!' else 'Player 2 won!'