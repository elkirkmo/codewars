greetLanguage = (a,b) ->  
 """#{ a ? 'Hello'}, #{b ? 'CoffeeScript'}!"""

 ###Tests###

 Test.describe "greetLanguage", ->
 Test.it "should pass all the tests provided", -> 
  Test.assertEquals greetLanguage("Hello","Javascript") ,  "Hello, Javascript!"
  Test.assertEquals greetLanguage("Hallo"), "Hallo, CoffeeScript!"
  Test.assertEquals greetLanguage("Hola"), "Hola, CoffeeScript!"
  Test.assertEquals greetLanguage("Bonjour"), "Bonjour, CoffeeScript!"
  Test.assertEquals greetLanguage(undefined, "PHP"), "Hello, PHP!"
  Test.assertEquals greetLanguage(undefined, "Ruby"), "Hello, Ruby!"
  Test.assertEquals greetLanguage(undefined, "Sass"), "Hello, Sass!"
  Test.assertEquals greetLanguage(undefined, "Swift"), "Hello, Swift!"
  Test.assertEquals greetLanguage(undefined, "CoffeeScript"), "Hello, CoffeeScript!"
  Test.assertEquals greetLanguage("你好", "JS"), "你好, JS!"