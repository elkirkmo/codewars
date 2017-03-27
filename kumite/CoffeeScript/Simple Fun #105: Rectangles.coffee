### Preloaded ###

### Solution Setup ###
rectangles = (n,m) ->
 #coding and coding

### SOlution ###

rectangles =  (n,m) ->
 (n-1)*(m-1)*n*m/4

### Test Examples ###
describe "Basic Tests", ->
 it "It should works for basic tests.", ->
  Test.assertEquals rectangles(2,3),3
  Test.assertEquals rectangles(2,2),1
  Test.assertEquals rectangles(1,1),0
  Test.assertEquals rectangles(0,1),0
  Test.assertEquals rectangles(3,3),9
  Test.assertEquals rectangles(100,100),24502500


###Test Cases ###
an =  (n,m) ->
 (n-1)*(m-1)*n*m/4
  
an1 = (n, m) -> (m*m-m)*(n*n-n)/4
#an2 = (N, M) -> Math.floor(M/3)*N + (M%3)*Math.floor(N/3)

rand = (from,to) ->
 Math.floor((to-from+1)*Math.random()+from)

maxlen=50
maxtt=20

showResult = (s,color="00cc00",who="Your") ->
 console.log "<font face='sans-serif' color='#"+color+"' size=3><b>"+who+" result is:</b></font><font face='sans-serif' color='#cccc00' size=3>"+
      "\n"+s+"</font>",""


describe "Basic Tests", ->
 it "It should works for basic tests.", ->
  Test.assertEquals rectangles(2,3),3
  Test.assertEquals rectangles(2,2),1
  Test.assertEquals rectangles(1,1),0
  Test.assertEquals rectangles(0,1),0
  Test.assertEquals rectangles(3,3),9
  Test.assertEquals rectangles(100,100),24502500
  
failed=0
recfailed=[]
describe "100 Random Tests --- Testing for correctness of solution", ->
 it "It should work for random tests.", ->
  iii = 0;
  while iii<100
   ddd=rand(0,100)
   eee=rand(0,100)
   ans=an(ddd,eee)
   console.log """<font face='sans-serif' color='#00cc00' size=3><b>Testing for:</b></font><font face='sans-serif' color='#eeee00' size=3>
      \n n  = #{JSON.stringify(ddd)}
      \n m = #{JSON.stringify(eee)}
      </font>""",""
   useran=rectangles(ddd,eee)
   if JSON.stringify(useran) != JSON.stringify(ans)
    failed++  
   iii++
   Test.assertEquals(useran,ans)
   
 if failed is 0
  describe "Congratulations! You have passed all the tests!", ->
   console.log "<font color='#00aa00' size=2><b>I'm waiting for your <font color='#dddd00'>feedback, rank and vote.<font color='#00aa00'>many thanks! ;-)</b></font>",""  
