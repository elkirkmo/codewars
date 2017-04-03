getDrinkByProfession = (profession) ->
 DRINKS = 
    'jabroni': 'Patron Tequila'
    'school counselor': 'Anything with Alcohol'
    'programmer': 'Hipster Craft Beer'
    'bike gang member': 'Moonshine'
    'politician': 'Your tax dollars'
    'rapper': 'Cristal'

  if DRINKS[profession.toLowerCase()] isnt undefined then DRINKS[profession.toLowerCase()] else 'Beer'