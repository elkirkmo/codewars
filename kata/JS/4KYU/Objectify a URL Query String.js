const convertQueryToMap = (query) => {
 let splits = query.split('&');
 let obj = new Object();
 for (let i = 0; i < splits.length; i++){
   if (splits[0] === '') {
     return obj;
   } 
   let a = splits[i].split('=');
   let prop = a[0];
   let val = a[1];
   prop.split('.').reduce((current, next, j, arr) => {
     if (!current[next]) current[next] = {};
     if (j === arr.length - 1) current[next] = decodeURIComponent(val);
     return current[next];
   }, obj);
 }
 return obj;
}