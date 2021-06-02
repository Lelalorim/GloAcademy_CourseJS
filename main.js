'use strict';

const arg = 0;

function shortDescript(arg) {
  arg = prompt('Введите текст');
  if (typeof (arg) !== 'string') {
    alert('Введите текст');
  } else {
    const trueString = arg.trim();
    console.log(typeof (arg));
    console.log(`"строка: ${trueString}"`);
    if (trueString.length > 30) {
      console.log(`${trueString.substring(0,30)}...`);
    }
  }
}

shortDescript();