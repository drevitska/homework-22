
// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
//  от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

let sum = +prompt('Введите сумму покупки');
let dickont1 = 0.03, dickont2 = 0.05, dickont3 = 0.07;
let res;
if (sum < 200) {
  res = 0;
} else if (sum< 300) {
  res = sum * dickont1;
} else if ( sum < 500) {
  res = sum * dickont2;
} else {
  res = sum * dickont3;
}
res = res.toFixed(2);
console.log(`На сумму ${sum} гривень, скидка составит ${res} гривень.`)