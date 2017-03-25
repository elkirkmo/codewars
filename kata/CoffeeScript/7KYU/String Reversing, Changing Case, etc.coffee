reverseAndMirror=(s1,s2) ->
 flip2 = s2.split('')
    .reverse()
    .map((x)-> if x is x.toUpperCase() then x.toLowerCase() else x.toUpperCase())
    .join('')
 flip1 = s1.split('')
              .reverse()
              .map((x)-> if x is x.toUpperCase() then x.toLowerCase() else x.toUpperCase())
              .join('')
 swap1 = s1.split('')
           .map((x)-> if x is x.toUpperCase() then x.toLowerCase() else x.toUpperCase())
           .join('')
 result = """#{flip2}@@@#{flip1}#{swap1}"""