'use strict';

function shortDescript(stroka) {

  function cutSpaces(arg) { //обрезка пробелов
    if (arg === null) {
      return '';
    } else {
      return arg.trim();
    }
  }

  function checkString(par) { //обрезка до 30 символов
    if (cutSpaces(par).length < 30) {
      return cutSpaces(par);
    } else {
      return (`${cutSpaces(par).substring(0, 30)}...`);
    }
  }

  while (typeof (stroka) !== 'string' || cutSpaces(stroka).length === 0) { //проверка на строку
    stroka = prompt('введите строку', '');
    //console.log(`Длина строки: ${stroka.length}`);
    // console.log(stroka);
    // console.log(`Строка без пробелов:${cutSpaces(stroka)}`);
  }

  //shortDescript(stroka); //обрезанная строка с ... или короткая
  return console.log('Краткое описание:', checkString(stroka));
}

shortDescript();