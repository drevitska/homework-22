
// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

let num = +prompt('пятиразрядное число');
if ((num % 10) === Math.floor(num / 10000) && (Math.floor(num/10)) % 10 === (Math.floor(num/1000) % 10)) {
  console.log(`${num} -является палиндромом.`)
} else {
  console.log(`${num} -не является палиндромом.`)
}