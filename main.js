'use strict';

const arg = prompt('Введите текст');

function shortDescript(arg) {
  if (typeof (arg) !== 'string' || arg.trim().length == 0) {
    alert('Введите текст');
  } else {
    const trueString = arg.trim();
    console.log(`"строка: ${trueString}"`);
    if (trueString.length > 30) {
      return (`${trueString.substring(0,30)}...`);
    } else {
      return arg;
    }
  }
}

console.log('shortDescript(): ', shortDescript(arg));