howMuchILoveYou = (nbPetals) ->
 arr = ['I love you', 'a little','a lot','passionately','madly','not at all']
 arr[(nbPetals - 1) % arr.length]
  