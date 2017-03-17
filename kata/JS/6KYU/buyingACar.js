function nbMonths(startPriceOld, startPriceNew, savingPerMonth, percentLossByMonth){
  var months = 0,loss = percentLossByMonth,sum = 0;
  while(startPriceNew > (startPriceOld+ sum)) {
   sum += savingPerMonth;
   startPriceOld = startPriceOld - (startPriceOld * loss)/100;
   startPriceNew = startPriceNew - (startPriceNew*loss)/100;
   if (months % 2 === 0){
     loss += 0.5;
   } 
   months++;
  } 
  var diff = Math.round(sum + startPriceOld - startPriceNew);
  return [months, diff];
}