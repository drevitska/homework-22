
// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

let num = +prompt('трехзначное число');
let a = num % 10;
let b = (Math.floor(num / 10)) % 10;
let c = (Math.floor(num / 100));
console.log(a, b, c);
if (a === b || a ===c || b === c) {
  console.log('есть одинаковые цифры');
} else {
    console.log('нет одинаковых цифр');
}