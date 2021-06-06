'use strict';

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function shortDescript(stroka) {

  while (typeof (stroka) !== 'string' || stroka.trim().length === 0 || isNumber(stroka)) {
    stroka = prompt('введите строку', '');
  }

  stroka = (stroka.trim().length < 30) ? stroka.trim() : (`${stroka.trim().substring(0, 30)}...`);
  return console.log(`Краткое описание:${stroka}`);
}

shortDescript();