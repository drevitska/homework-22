
// Запросить дату (день, месяц, год) и вывести следующую за ней дату. 
//Учтите возможность перехода на следующий месяц, год, а также високосный год.

let day = +prompt('Введите день');
let mouse = +prompt('Введите месяц');
let year = +prompt('Введите год');

console.log(`Вы ввели ${day}.${mouse}.${year},`);

let short, mouseLength;

if (mouse === 4 || mouse === 6 || mouse === 9 || mouse === 11) {
  mouseLength = short;
}

if (day === 31 && mouse === 12) {
  day = 1;
  mouse = 1;
  year++;
} else if ( year % 4 === 0 && mouse === 2 && day === 29) {
day = 1;
mouse++;
} else if (day === 31) {
  day = 1;
  mouse++
} else if (day === 30 && mouseLength === short) {
  day = 1;
  mouse++;
}else {
  day++;
}

console.log(`следующий день ${day}.${mouse}.${year}.`);
