function songDecoder(song){
  let newSong = song.split("WUB"), temp = [];
  for(let i of newSong)
    i && temp.push(i);
  newSong = temp;
  delete temp;
return newSong.join(' ').toString();
  
}