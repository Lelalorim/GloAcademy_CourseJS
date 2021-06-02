'use strict';

const money = +prompt('Укажите ваш месячный доход'),
  income = 'Фриланс',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Интернет, Коммуналка, Мобильный'),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  mission = 500000,
  period = 9;

const showTypeOf = function (data) {
  console.log(data, typeof (data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

const expensesOne = prompt('Введите обязательную статью расходов?', addExpenses.split(', ')[0]),
  amountOne = +prompt(`Сколько вы тратите на оплату ${expensesOne}?`),
  expensesTwo = prompt('Введите обязательную статью расходов?', addExpenses.split(', ')[1]),
  amountTwo = +prompt(`Сколько вы тратите на оплату ${expensesTwo}?`);

function getExpensesMonth(a, b) {
  return a + b;
}

const sumExpenses = getExpensesMonth(amountOne, amountTwo);
console.log(`На обязательные платежи вы тратите ${sumExpenses}.`);
console.log(addExpenses.toLocaleLowerCase().split(', '));


function getAccumulatedMonth(a, b) {
  return a - b;
}

function gettargetMonth(a, b) {
  return Math.ceil(a / b);
}

const accumulatedMonth = getAccumulatedMonth(money, sumExpenses),
  budgetDay = Math.floor(accumulatedMonth / 30);

console.log(`Вы достигните цели через ${gettargetMonth(mission, accumulatedMonth)} месяцев(-а).`);
console.log(`Бюджет на день ${budgetDay}.`);

const getStatusIncome = function () {
  if (budgetDay >= 1200) {
    return ('У вас высокий уровень дохода.');
  } else if (budgetDay >= 600 && budgetDay < 1200) {
    return ('У вас средний уровень дохода.');
  } else if (budgetDay < 600 && budgetDay >= 0) {
    return ('К сожалению у вас уровень дохода ниже среднего.');
  } else {
    return ('Что то пошло не так.');
  }
};

console.log(getStatusIncome());