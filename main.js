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

  while (typeof (stroka) !== 'string' || cutSpaces(stroka).length === 0) {
    stroka = prompt('введите строку', '');
  }

  return console.log('Краткое описание:', shortString(stroka));
}

shortDescript();