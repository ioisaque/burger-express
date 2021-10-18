export function leftPad(value, totalWidth, paddingChar) {
  var length = totalWidth - value.toString().length + 1;
  return Array(length).join(paddingChar || '0') + value;
}

export function capOnlyFirstLetter(str) {
  let newString = str ? str.toLowerCase() : '';
  newString = newString.charAt(0).toUpperCase() + newString.slice(1);

  return newString;
}
export function capEveryFirstLetter(str) {
  var splitStr = str ? str.toLowerCase().split(' ') : '';
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
}
export function floatToReais(numero) {
  var numero = numero
    ? parseFloat(numero)
        .toFixed(2)
        .split('.')
    : 0;
  numero[0] = 'R$ ' + numero[0].split(/(?=(?:...)*$)/).join('.');
  return numero.join(',');
}
