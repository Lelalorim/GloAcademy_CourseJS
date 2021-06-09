'use strict';

const arr = ['27', '43', '66', '275', '421', '524', '742'];
const filteredArr = arr.filter(function (elem) {
  return (elem.startsWith('2') || elem.startsWith('4'));
});

console.log('Задача №1');
console.log('Начальный массив:' + arr);
console.log('filteredArr: ', filteredArr);

console.log(`        
Задача №2
`);

const start = prompt('Введите число начало диапазона', 0),
  end = prompt('Введите конечное число диапозона', 100);

function primeNumber(num) {

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  if (num > 1) {
    return true;
  }
}

for (let i = start; i <= end; i++) {
  if (primeNumber(i)) {
    console.log(`Число ${i} - простое и его делители 1 и ${i}`);
  }
}