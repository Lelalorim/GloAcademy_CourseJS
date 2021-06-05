'use strict';

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;

const start = function () {
  do {
    money = +prompt('Укажите ваш месячный доход');
  }
  while (!isNumber(money) || money === 0);
};

start();

const income = 'Фриланс',
  addExpenses = prompt('Перечислите возможные расходы через запятую', 'Интернет, Коммуналка, Мобильный'),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  mission = 500000,
  period = 9;

const showTypeof = function (data) {
  console.log(data, typeof (data));
};

showTypeof(money);
showTypeof(income);
showTypeof(deposit);

console.log(addExpenses.toLocaleLowerCase().split(', '));

let expenses = [];

const getExpensesMonth = function () {
  let sum = 0,
    tarif = 0;

  for (let i = 0; i < 2; i++) {
    expenses[i] = prompt('Введите обязательную статью расходов?',
      addExpenses.toLocaleLowerCase().split(', ')[i]);

    do {
      tarif = +prompt(`Сколько вы тратите на оплату ${expenses[i]}?`, 1200);
    }
    while ((!isNumber(tarif) || tarif === 0));

    sum += tarif;
  }

  console.log(expenses);
  return sum;
};

const expensesAmount = getExpensesMonth();

console.log(`На обязательные платежи вы тратите ${expensesAmount}.`);

const getAccumulatedMonth = function (a, b) {
  return a - b;
};

const gettargetMonth = function (a, b) {
  return Math.ceil(a / b);
};

const accumulatedMonth = getAccumulatedMonth(money, expensesAmount),
  budgetDay = Math.floor(accumulatedMonth / 30);

if (gettargetMonth(mission, accumulatedMonth) < 0) {
  console.log('Цель не будет достигнута');
} else {
  console.log(`Вы достигните цели через ${gettargetMonth(mission, accumulatedMonth)} месяцев(-а).`);
}

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