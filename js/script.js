'use strict';

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const isString = function (perem) {
  return isNumber(perem) || perem === null || perem.trim().length === 0;
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
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 500000,
  period: 9,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function () {

    if (confirm('Есть ли у вас дополнительный источник заработка?')) {

      let itemIncome,
        cashIncome;

      do {
        itemIncome = prompt('Какой у вас дополнительный зароботок', 'Шабашка');
      }
      while (isString(itemIncome));
      do {
        cashIncome = +prompt('Сколько в месяц вы на этом зарабатываете?', 2000);
      }
      while (!isNumber(cashIncome) || cashIncome === 0);
      appData.income[itemIncome] = cashIncome;
    }

    let addExpenses;

    do {
      addExpenses = prompt('Перечислите возможные расходы через запятую', 'Интернет, Коммуналка, Мобильный');
    }
    while (isString(addExpenses));

    appData.addExpenses = addExpenses.toLocaleLowerCase().split(', ');

    for (let i = 0; i < appData.addExpenses.length; i++) {
      appData.addExpenses[i] = appData.addExpenses[i][0].toUpperCase() +
        appData.addExpenses[i].slice(1);
    }

    appData.deposit = confirm('Есть ли у вас депозит в банке?');

    for (let i = 0; i < 2; i++) {
      let expense = 0,
        expenseTarif = 0;

      do {
        expense = prompt('Введите обязательную статью расходов?', appData.addExpenses[i]);
      }
      while (isString(expense));

      do {
        expenseTarif = +prompt(`Сколько вы тратите на оплату ${expense}?`, 1200);
      }
      while ((!isNumber(expenseTarif) || expenseTarif === 0));
      appData.expenses[expense] = expenseTarif;
    }
    console.log(appData.expenses);
  },
  getExpensesMonth: function () {
    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
    }
  },
  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
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
  },
  getInfoDeposit: function () {
    if (appData.deposit) {
      do {
        appData.percentDeposit = +prompt('Укажите процентyю ставку по депозиту', 3);
      }
      while (!isNumber(appData.percentDeposit) || appData.percentDeposit === 0);
      do {
        appData.moneyDeposit = +prompt('Укажите сумму вклада', 10000);
      }
      while (!isNumber(appData.moneyDeposit) || appData.moneyDeposit === 0);
    }
  },
  calcSavedMoney: function () {
    return appData.budgetMonth * appData.period;
  }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getInfoDeposit();

console.log(`Возможные расходы: ${appData.addExpenses.join(', ')}.`);
console.log(`На обязательные платежи вы тратите ${appData.expensesMonth}.`);

if (appData.getTargetMonth() < 0) {
  console.log('Цель не будет достигнута');
} else {
  console.log(`Вы достигните цели через ${appData.getTargetMonth()} месяцев(-а).`);
}

console.log(appData.getStatusIncome());

console.log('Наша программа включает в себя данные:');
for (let key in appData) {
  console.log(`${key} - ${appData[key]}`);
}