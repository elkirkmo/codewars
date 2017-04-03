function getDrinkByProfession(param) {
  const DRINKS = {
    jabroni: 'Patron Tequila',
    school counselor: 'Anything with Alcohol',
    programmer: 'Hipster Craft Beer',
    bike gang member: 'Moonshine',
    politician: 'Your tax dollars',
    rapper: 'Cristal',
  };
  
   return DRINKS[param.toLowerCase()] !== undefined ? DRINKS[param.toLowerCase()] : 'Beer';
 }