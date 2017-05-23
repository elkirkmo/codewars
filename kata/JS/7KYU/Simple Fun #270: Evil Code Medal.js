function evilCodeMedal(userTime, gold, silver, bronze) {
  const convertToSec = (timeString) => {
    const arr = timeString.split(':');
    let secs = 0;
    secs += +arr[2];
    secs += +arr[1] * 60;
    secs += +arr[0] * 60 * 60;
    return secs;
  };
  
  const u = convertToSec(userTime);
  const g = convertToSec(gold);
  const s = convertToSec(silver);
  const b = convertToSec(bronze);
  let medal = '';
  
  if (u >= b) {
    medal = 'None';
  } else if ( u < b && u >= s) {
    medal = 'Bronze';
  } else if (u < b && u < s && u >= g) {
    medal = 'Silver';
  } else {
    medal = 'Gold';
  }
  
  return medal;
  

  
}