'use strict';

function shortDescript(stroka) {

  function cutSpaces(arg) {
    if (arg === null) {
      return '';
    } else {
      return arg.trim();
    }
  }

  function shortString(par) {
    if (cutSpaces(par).length < 30) {
      return cutSpaces(par);
    } else {
      return (`${cutSpaces(par).substring(0, 30)}...`);
    }
  }

  const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  while (typeof (stroka) !== 'string' || cutSpaces(stroka).length === 0 || isNumber(stroka)) {
    stroka = prompt('введите строку', '');
  }

  return console.log('Краткое описание:', shortString(stroka));
}

shortDescript();