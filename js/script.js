'use strict';

let money = 42000,
  income = 'Фриланс',
  addExpenses = 'Интернет, Коммуналка, Мобильный',
  deposit = true,
  mission = 500000,
  period = 9,
  budgetDay = (money / 30);

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей.');

console.log(addExpenses.toLocaleLowerCase().split(', '));

console.log(budgetDay);