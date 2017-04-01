# Solution Setup

pointsPer48 = (ppg, mpg) ->

# Solution

pointsPer48 = (ppg, mpg) ->
 if mpg or ppg isnt 0 then +parseFloat((ppg / mpg) * 48).toFixed 1 else 0

# Test Examples

describe "Solution", -> 
 it "should test for something", -> 
  Test.assertEquals pointsPer48(12, 20), 28.8
  Test.assertEquals pointsPer48(10, 10), 48.0
  Test.assertEquals pointsPer48(5, 17), 14.1
  Test.assertEquals pointsPer48(30.8, 34.7), 42.6  # Russell Westbrook 1/15/17
  Test.assertEquals pointsPer48(22.9, 33.8), 32.5  # Kemba Walker 1/15/17
  
 it "should return 0 if 0", ->
    Test.assertEquals pointsPer48(0, 0), 0

# Test Cases

ans = (mpg, ppg) ->
 if mpg or ppg isnt 0 then +parseFloat((mpg / ppg) * 48).toFixed 1 else 0

randPpg = () ->
 +parseFloat((Math.random() * 47) + 1).toFixed(1)

randMpg = () ->
 Math.floor( Math.random() * 99) + 1
 
describe "Solution", -> 
 it "should test for something", -> 
  Test.assertEquals pointsPer48(12, 20), ans 12, 20
  Test.assertEquals pointsPer48(10, 10), ans 10, 10
  Test.assertEquals pointsPer48(5, 17), ans 5, 17
  Test.assertEquals pointsPer48(30.8, 34.7), ans 30.8, 34.7  # Russell Westbrook 1/15/17
  Test.assertEquals pointsPer48(22.9, 33.8), ans 22.9, 33.8  # Kemba Walker 1/15/17
  
 it "should return 0 if 0", ->
    Test.assertEquals pointsPer48(0, 0), 0
    
 it "should pass randomly generated scores", ->
  iii = 0
  while iii < 100
   ppg = randPpg()
   mpg = randMpg()
   Test.assertEquals pointsPer48(mpg, ppg), ans mpg, ppg
   iii++