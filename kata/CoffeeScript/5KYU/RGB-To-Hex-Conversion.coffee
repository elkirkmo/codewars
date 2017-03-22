rgb = (r, g, b) ->
 toHex(r) + toHex(g) + toHex(b)

toHex = (s) ->
 if parseInt(s) > 255
  s = "FF"
 else if parseInt(s) <= 0
 	s = "00"
 else
 	s.toString(16).toUpperCase()
