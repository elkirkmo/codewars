
const monthAsDigit = (month, bool) => {
  let num = '0';
  switch (month) {
    case 'Jan':
      num = '01';
      break;
    case 'Feb':
      num = '02';
      break;
    case 'Mar':
      num = '03';
      break;
    case 'Apr':
      num = '04';
      break;
    case 'May':
      num = '05';
      break;
    case 'Jun':
      num = '06';
      break;
    case 'Jul':
      num = '07';
      break;
    case 'Aug':
      num = '08';
      break;
    case 'Sep':
      num = '09';
      break;
    case 'Oct':
      num = '10';
      break;
    case 'Nov':
      num = '11';
      break;
    case 'Dec':
      num = '12';
      break;
    default:
      break;
  }
  if (bool) {
    num = +num + 50;
  }
  return num;
};

function driver(data) {
  const sex = data[4] === 'F' ? true : false;
  const lastName = data[2].length >= 5 ? data[2].substr(0, 5).toUpperCase() : data[2].concat([99999999]).join('').substr(0, 5).toUpperCase();
  const birthDec = data[3].charAt(data[3].length - 2);
  const birthDay = data[3].substr(0, 2);
  const birthYear = data[3].charAt(data[3].length - 1);
  const birthMonth = monthAsDigit(data[3].substr(3, 3), sex);
  const initials = data[1].length > 0 ? data[0].charAt(0) + data[1].charAt(0) : data[0].charAt(0) + '9';
  return `${lastName}${birthDec}${birthMonth}${birthDay}${birthYear}${initials}9AA`;
}
