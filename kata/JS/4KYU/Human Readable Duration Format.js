function formatDuration (seconds) {
  if (seconds === 0) {
    return 'now';
  }
  let years = 0;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let secs = 0;
  while (seconds > 59) {
    minutes++;
    seconds -= 60;
  }
  secs = seconds;
  while (minutes > 59) {
    hours++;
    minutes -= 60;
  }
  while (hours > 23) {
    days++;
    hours -= 24;
  }
  while (days > 364) {
    years++;
    days -= 365;
  }
  const nums = { 'years': years, 'months': months, 'days': days, 'hours': hours, 'minutes': minutes, 'seconds': secs};
  let str = '';
  
  for (let v in nums) {
    nums[v] === 0 ? '' : str += nums[v] + ' ' + (nums[v] > 1 ? v : v.replace(/s$/g,'')) + ', ';
  }
  str = str.trim().replace(/,$/g, '');
  if (str.indexOf(',') > -1) {
    return str.replace(/,([^,]*)$/, ' and$1');
  }
  return str;
}
