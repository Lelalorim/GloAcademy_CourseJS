'use strict';

const arr = ['27', '43', '66', '275', '421', '524', '742'];

console.log('Начальный массив:' + arr);

for (let i = 0; i < arr.length; i++) {

  if (arr[i].charAt(0) === '2' || arr[i].charAt(0) === '4') {
    console.log(arr[i]);
  }
}