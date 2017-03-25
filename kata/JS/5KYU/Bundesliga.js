function table (results) {
  let newArr = [];
  for (let i  = 0; i < results.length; i++){
  	let team1 = {};
    let team2 = {};
    let matchResults = results[i].slice(0,3);
    let gamePlayed;
    if (matchResults === '-:-'){
      gamePlayed = false;
      matchResults = '0:0';
    } else {
      gamePlayed = true;
      matchResults;
    }
    let team1Score = matchResults.split(':')[0];
    let team2Score = matchResults.split(':')[1];
    let teamName = results[i].slice(3, results[i].length).split('-')[0].trim();
    let teamName2 = results[i].slice(3, results[i].length).split('-')[1].trim();
    team1.teamName = teamName + " ".repeat(30 - teamName.length);
    team2.teamName = teamName2 + " ".repeat(30 - teamName2.length);
    team1.PF = team1Score;
    team2.PF = team2Score;
    team1.PA = team2Score;
    team2.PA = team1Score;
    team1.Wins = team2.Wins = "0";
    team1.Loss = team2.Loss = "0";
    team1.Ties = team2.Ties = "0";
    team1.gamesPlayed = team2.gamesPlayed = "0";
    team1.matchResult = team1Score +":"+team2Score;
    team2.matchResult = team2Score +":"+team1Score;
    team1.points = team2.points = "0"
    if (gamePlayed){
    	team1.gamesPlayed = team2.gamesPlayed = "1";
    	if (parseInt(team1Score)>parseInt(team2Score)){
      	team1.Wins = team2.Loss = "1";
        team1.matchResult = team1Score +":"+team2Score
        team2.matchResult = team2Score +":"+team1Score
        team1.points = "3"
    	} else if (parseInt(team1Score)===parseInt(team2Score)){
      	team1.Ties = team2.Ties = "1"
        team1.matchResult = team1Score +":"+team2Score
        team2.matchResult = team2Score +":"+team1Score
        team1.points = team2.points = "1"
      } else {
      	team1.Loss = team2.Wins = "1"
        team1.matchResult = team2Score +":"+team1Score
        team2.matchResult = team1Score +":"+team2Score
        team2.points="3"
      }      
    }
    newArr.push(team1,team2);
  }
   let compare = (a,b)=>{
  	let pointsA = parseInt(a.points);
    let pointsB = parseInt(b.points);
    let goalsA = parseInt(a.PF)-parseInt(a.PA);
    let goalsB = parseInt(b.PF)-parseInt(b.PA);
    if (pointsA != pointsB){
      if (pointsA > pointsB) return -1;
      if (pointsA < pointsB) return 1;
    } else if (goalsA != goalsB) {
      if (goalsA > goalsB) return -1;
      if (goalsA< goalsB) return 1;
  	} else if (parseInt(a.PF) != parseInt(b.PF)){
    	if(parseInt(a.PF) > parseInt(b.PF)) return -1;
    	if(parseInt(a.PF) < parseInt(b.PF)) return 1;
    } else {
    	if (a.teamName.toLowerCase() > b.teamName.toLowerCase()) return 1;
      if (a.teamName.toLowerCase() < b.teamName.toLowerCase()) return -1;
    }
    return 0;
  }
  
  let table = '';
  let counter = 1;
  newArr.sort((a,b) => compare(a,b));
	for (let i = 0; i < newArr.length; i++){
  	let stats = newArr[i];
    if (i < newArr.length && i > 0) {
			if (stats.points < newArr[i-1].points){
        i===1? counter++ : counter=i+1;
       } else if (parseInt(stats.PF)-parseInt(stats.PA) < parseInt(newArr[i-1].PF)-parseInt(newArr[i-1].PA)){
       	i===1? counter++ : counter=i+1;
       }else if (parseInt(stats.PF) < parseInt(newArr[i-1].PF)){
       	i===1? counter++ : counter=i+1;
       }
    } 
  	let str = (counter > 9 ? counter  : " " + counter )+ '. '+stats.teamName+stats.gamesPlayed+(" ").repeat(2)+stats.Wins+(" ").repeat(2)+stats.Ties+(" ").repeat(2)+stats.Loss+(" ").repeat(2)+stats.PF+":"+stats.PA+(" ").repeat(2)+(i === newArr.length-1 ? stats.points :stats.points+"\n");
    table += str;
  }
  return table;
}