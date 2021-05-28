'use strict';

let num = 266219;

// Перебор цифр из числа по порядку
function multiplySum(arr) {
  let sum = 1;
  let elem = String(arr); //перевод в строчный тип данных
  //console.log(typeof (elem), elem);

  for (let i = 0; i < elem.length; i++) {
    sum *= Number(elem[i]); //умножение на следующий элемент. Number - перевод в числовой тип данных.
    //console.log(elem[i]);
  }
  return (sum);
}

console.log(multiplySum(num));

let stepen = multiplySum(num) ** 3;
//console.log('stepen: ', stepen);

console.log(String(stepen).substr(0, 2));
//console.log(String(stepen).substring(0, 2));