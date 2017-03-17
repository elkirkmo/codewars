nbMonths = (priceOld, priceNew, saving, perLoss) ->
 saved = 0 
 month = 0
 loss = perLoss
	while (priceOld+saved) < priceNew
    saved += saving
    priceOld = priceOld - (priceOld *loss)/100
    priceNew = priceNew - (priceNew *loss)/100
    if month%2 is 0
      loss += 0.5
    month++
  difference = Math.round (saved + priceOld) - priceNew
  return [month, difference]
  