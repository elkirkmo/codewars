function list(names){
let simpsons = [], simpsonString = "";
for (var k in names){
if (names[k].name.length > 0)
  simpsons.push(names[k].name)
}  

if (simpsons.length === 1){
 return simpsons.join('');
} else if (simpsons.length === 2){
  return simpsons.join(' & ')
} else if (simpsons.length === 0){
  return simpsonString;
} else {
    simpsons.forEach(function(name, i){
      if (i === simpsons.length-2){
        simpsonString += name;
        simpsonString += " & ";
      } else if (i === simpsons.length -1) {
        simpsonString += name;
      } else {
        simpsonString += name + ", ";
      }
    });
}
return simpsonString;
}    