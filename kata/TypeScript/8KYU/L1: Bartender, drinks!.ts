export function getDrinkByProfession(profession:string){
 const DRINKS = {
    jabroni: 'Patron Tequila',
    'school counselor': 'Anything with Alcohol',
    programmer: 'Hipster Craft Beer',
    'bike gang member': 'Moonshine',
    politician: 'Your tax dollars',
    rapper: 'Cristal',
  };

  return DRINKS[profession.toLowerCase()] !== undefined ? DRINKS[profession.toLowerCase()] : 'Beer';
}