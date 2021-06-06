'use strict';

console.log('Задача №1');

const arr = ['27', '43', '66', '275', '421', '524', '742'];

console.log('Начальный массив:' + arr);

for (let i = 0; i < arr.length; i++) {

  if (arr[i].charAt(0) === '2' || arr[i].charAt(0) === '4') {
    console.log(arr[i]);
  }
}

console.log(`        
Задача №2
`);

const start = prompt('Введите число начало диапазона', 0),
  end = prompt('Введите конечное число диапозона', 100);

function primeNumber(num) {
  if (num > 1) {
    return true;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
}

for (let i = start; i <= end; i++) {
  if (primeNumber(i)) {
    console.log(`Число ${i} - простое и его делители 1 и ${i}`);
  }
}