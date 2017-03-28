let stripUrlParams = (url, paramsToStrip) => {
   if (!url.match(/[?]/g))
    return url;
   let host = url.split("?")[0],
   params = url.split("?")[1].split("&").sort().filter(function(item, pos, ary) {
        return !pos || item.charAt(0) != ary[pos - 1].charAt(0);
    }),
   arr = [],
   strip = paramsToStrip === undefined ? false: paramsToStrip.join("");   
   for (let i = 0; i < params.length; i++){
    if (params[i].indexOf(strip) === -1)  
       arr.push(params[i]);
   }
   return `${host}?${arr.join("&")}`
}