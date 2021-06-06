'use strict';

function shortDescript(stroka) {

  const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  while (typeof (stroka) !== 'string' || stroka.trim().length === 0 || isNumber(stroka)) {
    stroka = prompt('введите строку', '');
  }

  let shortString = stroka.trim();

  stroka = (shortString.length < 30) ? shortString : (`${shortString.substring(0, 30)}...`);

  return console.log('Краткое описание:' + stroka);
}

shortDescript();