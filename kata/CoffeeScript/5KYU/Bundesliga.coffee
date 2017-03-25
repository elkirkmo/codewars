table = (results) ->
 newArr = []
 i=0
 while (i < results.length)
  team1 = {}
  team2 = {}
  gamePlayed
  matchResults = results[i].slice 0,3
  if matchResults is "-:-" 
   matchResults = "0:0"
   team1.gamesPlayed = team2.gamesPlayed = "0"
   gamePlayed = false
  else
   team1.gamesPlayed = team2.gamesPlayed = "1"
   gamePlayed = true
  teamName = results[i]
            .slice 3, results[i].length
            .split('-')[0]
            .trim()
  teamName2 = results[i]
            .slice 3, results[i].length
            .split('-')[1]
            .trim()
  team1.teamName = teamName+" ".repeat(30-teamName.length)
  team2.teamName = teamName2+" ".repeat(30-teamName2.length)
  team1Score = matchResults.split(":")[0]
  team2Score = matchResults.split(":")[1]
  team1.PF = team1Score
  team2.PF = team2Score
  team1.PA = team2.PF
  team2.PA = team1.PF
  team1.Wins = "0"
  team2.Wins = "0"
  team1.Loss = team2.Loss = "0"
  team1.Ties = team2.Ties = "0"
  team1.points = team2.points = "0"
  team1.matchResult = """#{team1.PF}:#{team1.PA}"""
  team2.matchResult = """#{team2.PF}:#{team2.PA}"""
  if gamePlayed
   team1.gamesPlayed = team2.gamesPlayed = "1"
   if parseInt(team1Score) > parseInt(team2Score)
    team1.Wins = "1"
    team2.Loss = "1"
    team1.points = "3"
   else if parseInt(team2Score)> parseInt(team1Score)
    team2.Wins = "1"
    team1.Loss = "1"
    team2.points = "3"
   else
    team1.Ties = team2.Ties = "1"
    team1.points = team2.points = "1"
  newArr.push team1,team2
  i++
 compare = (a,b) ->
  pointsA = parseInt(a.points)
  pointsB = parseInt(b.points)
  goalsA = parseInt(a.PF) - parseInt (a.PA)
  goalsB = parseInt(b.PF) - parseInt (b.PA)
  if pointsA != pointsB
   return -1 if pointsA > pointsB 
   return 1 if pointsA < pointsB
  else if goalsA isnt goalsB
   return -1 if goalsA > goalsB
   return 1 if goalsA < goalsB
  else if parseInt(a.PF) isnt parseInt(b.PF)
   return-1 if parseInt(a.PF) > parseInt(b.PF)
   return 1 if parseInt(a.PF) < parseInt(b.PF)
  else
   return 1 if a.teamName.toLowerCase() > b.teamName.toLowerCase()
   return -1 if a.teamName.toLowerCase() < b.teamName.toLowerCase()
  0
 newTable = ''
 counter = 1
 i = 0
 newArr.sort((a,b) -> compare(a,b))
 while (i < newArr.length)
  stats = newArr[i]
  if i < newArr.length and i > 0
   if stats.points < newArr[i-1].points
    if i is 1 then counter++ else counter=i+1
   else if (parseInt(stats.PF) - parseInt(stats.PA)) < (parseInt(newArr[i-1].PF) - parseInt(newArr[i-1].PA))
    if i is 1 then counter++ else counter=i+1
   else if parseInt(stats.PF) < parseInt(newArr[i-1].PF)
    if i is 1 then counter++ else counter=i+1
  rank = if counter > 9 then counter else " "+counter
  last = if i is newArr.length-1 then stats.points else stats.points+"\n"
  str = """#{rank}. #{stats.teamName}#{stats.gamesPlayed}  #{stats.Wins}  #{stats.Ties}  #{stats.Loss}  #{stats.PF}:#{stats.PA}  #{last}""" 
  newTable += str
  i++
 newTable