'use strict';

let money = 42000;
let income = 'Фриланс';
let addExpenses = 'Интернет, Коммуналка, Мобильный';
let deposit = true;
let mission = 500000;
let period = 9;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей.');

console.log(addExpenses.toLocaleLowerCase().split(', '));

/* через дополнительную переменную
let addExpensesLowerCase = addExpenses.toLocaleLowerCase();
console.log(addExpensesLowerCase.split(', '));
*/

let budgetDay = (money / 30);

console.log(budgetDay);