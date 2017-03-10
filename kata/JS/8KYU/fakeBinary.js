function fakeBin(x){
let b = [];
x.split('').forEach(function(a){(a>=5?b.push("1"):b.push("0"));});
return b.join("");
}