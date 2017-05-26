String.prototype.camelCase = function() {
  return this.split(' ').map( a =>
  {
    return a.charAt(0).toUpperCase() + a.slice(1);
  }).join('');
}

