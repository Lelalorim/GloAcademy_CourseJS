'use strict';

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
const start = function () {
  do {
    money = +prompt('Укажите ваш месячный доход', 30000);
  }
  while (!isNumber(money) || money === 0);
};
start();

const appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 500000,
  period: 9,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function () {
    const addExpenses = prompt('Перечислите возможные расходы через запятую', 'Интернет, Коммуналка, Мобильный');
    appData.addExpenses = addExpenses.toLocaleLowerCase().split(', ');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');

    for (let i = 0; i < 2; i++) {
      let expense = prompt('Введите обязательную статью расходов?', appData.addExpenses[i]),
        expenseTarif = 0;
      do {
        expenseTarif = +prompt(`Сколько вы тратите на оплату ${expense}?`, 1200);
      }
      while ((!isNumber(expenseTarif) || expenseTarif === 0));
      appData.expenses[expense] = expenseTarif;
    }
    console.log(appData.expenses);
  },
  getExpensesMonth: function () {
    let sum = 0;
    for (let key in appData.expenses) {
      sum += appData.expenses[key];
    }
    return sum;
  },
  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.getExpensesMonth();
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: function () {
    return Math.ceil(appData.mission / appData.budgetMonth);
  },
  getStatusIncome: function () {
    if (appData.budgetDay >= 1200) {
      return ('У вас высокий уровень дохода.');
    } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
      return ('У вас средний уровень дохода.');
    } else if (appData.budgetDay < 600 && appData.budgetDay >= 0) {
      return ('К сожалению у вас уровень дохода ниже среднего.');
    } else {
      return ('Что то пошло не так.');
    }
  }
};

appData.asking();
appData.getBudget();


console.log(`На обязательные платежи вы тратите ${appData.getExpensesMonth()}.`);
if (appData.getTargetMonth() < 0) {
  console.log('Цель не будет достигнута');
} else {
  console.log(`Вы достигните цели через ${appData.getTargetMonth()} месяцев(-а).`);
}
console.log(appData.getStatusIncome());

for (let key in appData) {
  console.log(`Наша программа включает в себя данные: ${key}: ${appData[key]}`);
}