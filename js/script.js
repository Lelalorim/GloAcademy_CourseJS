'use strict';

let money = +prompt('Укажите ваш месячный доход'),
  income = 'Фриланс',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Интернет, Коммуналка, Мобильный'),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  expensesOne = prompt('Введите обязательную статью расходов?', addExpenses.split(', ')[0]),
  amountOne = +prompt('Сколько вы тратите на оплату ' + expensesOne + ' ?'),
  expensesTwo = prompt('Введите обязательную статью расходов?', addExpenses.split(', ')[1]),
  amountTwo = +prompt('Сколько вы тратите на оплату ' + expensesTwo + ' ?'),
  budgetMonth = money - (amountOne + amountTwo),
  mission = 500000,
  period = 9,
  budgetDay = budgetMonth / 30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей.');
console.log(addExpenses.toLocaleLowerCase().split(', '));
console.log('Бюджет на месяц ' + budgetMonth);
console.log('Цель будет достигнута за ' + Math.ceil(mission / budgetMonth) + ' месяцев(-a)');
console.log('Бюджет на день ' + Math.floor(budgetDay));

if (budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay < 1200) {
  console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay >= 0) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
  console.log('Что то пошло не так');
}