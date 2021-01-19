// Написать конвертор валют. Пользователь вводит количество USD, 
//выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

let money = +prompt('Введите количество USD');
let valuta = prompt('в какую валюту хочете перевести EUR, UAN или AZN');

let exchangeEUR = 1.2;
let exchangeUAN = 5.4;
let exchangeAZN = 10.7;
let res;
if (valuta === 'EUR') {
  res = money * exchangeEUR;
} else if (valuta === 'UAN') {
  res = money * exchangeUAN;
} else if (valuta === 'AZN') {
  res = money * exchangeAZN;
} else {
  res = 'неверно введена валюта'
}
console.log(`${money} USD = ${res} ${valuta}.`)