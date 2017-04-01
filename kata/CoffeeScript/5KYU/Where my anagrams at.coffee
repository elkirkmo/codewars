anagrams = (word, words) ->
 test = word.split ''
            .sort()
            .join ''

 words.filter (item) ->
  item.split ''
      .sort()
      .join('') is test